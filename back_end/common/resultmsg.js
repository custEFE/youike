'use strict';

class ResultMsg {
    
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    getData() {
        return {
            code: this.code,
            msg: this.msg,
            data: this.data
        }
    }
}

module.exports = ResultMsg;