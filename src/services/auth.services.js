const users = require('../dbServices/users.db.services');
const ResponseData = require('../helper/responseData');
const messages = require('../helper/messages.json');
const { isEmpty } = require('lodash');
const bcrypt = require('bcrypt');
const { generatePasswordHash, generateToken } = require('../helper/helper');
const smsClient = require('../helper/textLocal');

module.exports = {

  loginService: async (data) => {
    try {
      // console.log('the data we get', data);

      const condition = { email: data.email };
      let msgDy;
      let actionStatus;
      let dataDy;
      const emailExist = await users.findSingle(condition);
      if (emailExist) {
        // console.log('EmailExist', emailExist.password);
        const isValidatePassword = await bcrypt.compare(data.password, emailExist.password);
        // console.log('isValidatePassword', isValidatePassword);
        if (isValidatePassword) {

          const tokenData = {
            id: emailExist.id,
            email: emailExist.email,
            password: emailExist.password
          };

          let userData;
          if (emailExist.status == true) {
            const token = await generateToken(tokenData);
            await users.update({ token: token }, condition);
            userData = await users.findSingle(condition);
          } else {
            await users.update({ token: null }, condition);
            userData = await users.findSingle(condition);
          }

          actionStatus = true;
          dataDy = userData;
          msgDy = messages.LOGGED_IN.replace('%type%', userData.name);
        } else {
          actionStatus = false;
          dataDy = null;
          msgDy = messages.WRONG_CREDENTIALS;
        }
      } else {
        actionStatus = false;
        dataDy = null;
        msgDy = messages.WRONG_CREDENTIALS;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: dataDy },
        msg: msgDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  createAccountServices: async (data) => {
    try {
      // console.log('the data we get', typeof (data.password));
      const conditionOne = { email: data.email }
      const conditionTwo = { contact_number: data.contact_number }
      const results = await users.findSingle(conditionOne);
      const contact_bool = await users.findSingle(conditionTwo);
      let messageDy;
      let actionStatus;

      if (results === null && contact_bool === null) {

        const hashedPassword = await generatePasswordHash(data.password);
        data.password = hashedPassword;

        const createBool = await users.create(data);
        // console.log('createBool', createBool);

        // const isValidatePassword = await bcrypt.compare(userData.password, userLoginData.password);

        messageDy = messages.ACCOUNT_CREATED;
        actionStatus = true;
      } else {
        messageDy = results === null ? messages.CONTACT_EXIST : messages.EMAIL_EXIST;
        actionStatus = false;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: messageDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  createOtp: async (createOtpPayload) => {
    try {

      const otp = Math.floor(100000 + Math.random() * 900000);
      // console.log('random number', otp);

      // const randomOtp = new Random();
      // nextInt(999999);

      // console.log('otpPayload', createOtpPayload.contact_number);
      const condition = { contact_number: createOtpPayload.contact_number };
      const isExist = await users.findSingle(condition);
      let msgDy;
      let status;
      if (isExist) {

        const respond = await smsClient.sendPartnerWelcomeMessage(createOtpPayload.contact_number, otp);

        // console.log('message api respond', respond);
        if (respond.errors) {
          console.log('message api error', respond.errors);
          status = false; msgDy = messages.OTP_COULD_NOT_SENT;
        } else {
          await users.update({ otp: otp }, condition);
          status = true; msgDy = messages.OTP_SENT;
        }

      } else {
        status = false; msgDy = messages.CONTACT_USERNOTEXITS;
      }

      return new ResponseData({
        status: 200,
        success: status,
        result: { data: null },
        msg: msgDy,
      });

    } catch (error) {
      console.log(messages.OTP_NOT_SENT, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.OTP_NOT_SENT,
      });
    }
  },

  verifyOtp: async (data) => {
    try {

      // console.log('the data we get', data, data.contact_number, data.otp);
      const condition = { contact_number: data.contact_number };
      const isExist = await users.findSingle(condition);
      let msgDy;
      let status;
      if (isExist) {
        // console.log('the data we get', data.otp);
        // console.log('the data we get', isExist.otp);
        if (toString(data.otp) === toString(isExist.otp)) {
          status = true;
          msgDy = messages.ACCOUNT_ACTIVE;
          await users.update({ otp: null, status: true }, condition);
        } else {
          status = false;
          msgDy = messages.OTP_INCORRECT;
        }

      } else {
        status = false;
        msgDy = messages.CONTACT_USERNOTEXITS
      }

      return new ResponseData({
        status: 200,
        success: status,
        result: { data: null },
        msg: msgDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  updateAccountAdmin: async (updateData) => {
    try {
      let condition;
      let msg;
      let actionStatus;
      if (updateData.id) {
        condition = { id: updateData.id };
      } else if (updateData.email) {
        condition = { email: updateData.email };
      } else if (updateData.contact_number) {
        condition = { contact_number: updateData.contact_number };
      }
      if (condition !== undefined) {

        const isExist = await users.findSingle(condition);
        if (isExist) {
          const updateBool = await users.update(updateData, condition);
          actionStatus = true;
          msg = messages.UPDATED_ACCOUNT;
        } else {
          actionStatus = false;
          msg = messages.ACCOUNT_NOT_EXIST;
        }
      } else {
        actionStatus = false;
        msg = messages.REQUIRED_FIELDS;
      }
      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: msg,
      });
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  updateAccountService: async (updateData) => {
    try {
      let condition;
      let msg;
      let actionStatus;
      if (updateData.id) {
        condition = { id: updateData.id };
      } else if (updateData.email) {
        condition = { email: updateData.email };
      } else if (updateData.contact_number) {
        condition = { contact_number: updateData.contact_number };
      }
      if (condition !== undefined) {

        const isExist = await users.findSingle(condition);
        if (isExist) {
          const updateBool = await users.update({ name: updateData.name }, condition);
          actionStatus = true;
          msg = messages.UPDATED_ACCOUNT;
        } else {
          actionStatus = false;
          msg = messages.ACCOUNT_NOT_EXIST;
        }
      } else {
        actionStatus = false;
        msg = messages.REQUIRED_FIELDS;
      }
      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: msg,
      });
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  deleteAccount: async (deleteData) => {
    try {
      let condition;
      let messageDy;
      let actionStatus;
      if (deleteData.id) {
        condition = { id: deleteData.id };
      } else if (deleteData.email) {
        condition = { email: deleteData.email };
      } else if (deleteData.contact_number) {
        condition = { contact_number: deleteData.contact_number };
      }
      if (condition !== undefined) {

        const deleteBool = await users.delete(condition);
        if (deleteBool) {
          messageDy = messages.ACCOUNT_DELETED
          actionStatus = true;
        } else {
          messageDy = messages.ACCOUNT_NOT_EXIST
          actionStatus = false;
        }
      } else {
        messageDy = messages.REQUIRED_FIELDS
        actionStatus = false;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: messageDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  updatePassword: async (data) => {
    try {
      let messageDy;
      let actionStatus;

      // console.log('update password', data);

      const condition = { id: data.user_id };
      const isExist = await users.findSingle(condition);
      if (data.old_password !== data.password) {
        if (isExist) {
          const isValidatePassword = await bcrypt.compare(data.old_password, isExist.password);
          if (isValidatePassword) {
            const hashedPassword = await generatePasswordHash(data.password);
            await users.update({ password: hashedPassword }, condition);
            actionStatus = true;
            messageDy = messages.PASS_CHANGED;
          } else {
            actionStatus = false;
            messageDy = messages.PREV_PASS_DIFF;
          }
        } else {
          actionStatus = false;
          messageDy = messages.USER_NOTEXIST;
        }
      } else {
        actionStatus = false;
        messageDy = messages.OLD_NEW_PASS;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: messageDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  forgotPassword: async (data) => {
    try {
      let messageDy;
      let actionStatus;

      const condition = { contact_number: data.contact_number };
      const isExist = await users.findSingle(condition);
      if (isExist) {
        const hashedPassword = await generatePasswordHash(data.password);
        await users.update({ password: hashedPassword }, condition);
        actionStatus = true;
        messageDy = messages.PASS_CHANGED;
      } else {
        actionStatus = false;
        messageDy = messages.USER_NOTEXIST;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: messageDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  }
}