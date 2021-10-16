class ResponseData {
  constructor({ status = 200, success = true, result = {}, msg = '' }) {
    this.status = status;
    this.success = success;
    this.result = result;
    this.msg = msg;
  }
}

module.exports = ResponseData;
