const axios = require("axios");

const tlClient = axios.create({
  baseURL: "https://api.textlocal.in/",
  params: {
    apiKey: "NGMzNjcyNzc2NTU0Njk0Zjc3NTY2NTc0NmU2YzRkNDU=",
    sender: "TFS"
  }
});

//Dear Customer, OTP for verifying your THE FANSTREET account is OTP. DO NOT share this with anyone.

const smsClient = {
  sendPartnerWelcomeMessage: (number, otp) => {

    // console.log('got this', number, otp);

    return new Promise(async (resolve, reject) => {
      try {
        const params = new URLSearchParams();
        params.append("numbers", [parseInt("91" + number)]);
        params.append("message", `Dear Customer, OTP for verifying your THE FANSTREET account is ${otp}. DO NOT share this with anyone.`);
        const hold = await tlClient.post("/send", params);
        // console.log('response data', hold.data);
        return resolve(hold.data);

      } catch (error) {
        if (error.response) {
          return resolve(error.response);
        } else {
          let error = { status: "", statusText: "API_WRONG" };
          return resolve(error);
        }
      }
    })
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