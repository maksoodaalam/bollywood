const axios = require("axios");

const tlClient = axios.create({
  baseURL: "https://api.textlocal.in/",
  params: {
    apiKey: "NzY0Zjc2NmI3NjVhNmQ2NjZmNTk3NDYxNDk2ZTMxNTg=",
    sender: "TFS"
  }
});

//Dear Customer, OTP for verifying your THE FANSTREET account is OTP. DO NOT share this with anyone.

const smsClient = {
  sendPartnerWelcomeMessage: (number, otp) => {

    console.log('got this', number, otp);

    if (number) {

      return new Promise(async (resolve, reject) => {
        try {
          const params = new URLSearchParams();
          params.append("numbers", [parseInt("91" + number)]);
          params.append("message", `Dear Customer, OTP for verifying your THE FANSTREET account is 456789 DO NOT share this with anyone`);
          const hold = await tlClient.post("/send", params);
          console.log('holdholdhold', hold.data);
          return resolve(hold);
        } catch (error) {
          if (error.response) {
            return resolve(error.response);
          } else {
            let error = { status: "", statusText: "API_WRONG" };
            return resolve(error);
          }
        }
      })
    }
  },

  // sendVerificationMessage: user => {
  //   if (user && user.phone) {
  //     const params = new URLSearchParams();
  //     params.append("numbers", [parseInt("91" + user.phone)]);
  //     params.append(
  //       "message",
  //       `Your iWheels verification code is ${user.verifyCode}`
  //     );
  //     tlClient.post("/send", params);
  //   }
  // }
};

module.exports = smsClient;