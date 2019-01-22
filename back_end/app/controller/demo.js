'use strict';

const Controller = require('egg').Controller;
const ResultMsg = require('../../common/resultmsg');
const Constants = require('../../common/constants');

class DemoController extends Controller {
  async index() {
    const data = await this.ctx.service.demo.index();
    this.ctx.set('Content-Type', 'application/json');
    var res = new ResultMsg(Constants.CODE_SUCCESS, Constants.MSG_QUERY_SUCCESS, data)
    this.ctx.body = res.getData();
  }
  async insert() {
    const data = {
      id: '123',
      name: 'name',
      age: 13,
      ctime: new Date()
    }
    const rs = await this.ctx.service.demo.insert(data);
    var res = null;
    if(rs) {
      res = new ResultMsg(Constants.CODE_SUCCESS, Constants.MSG_INSERT_SUCCESS, [])
    }else {
      res = new ResultMsg(Constants.CODE_ERROR, Constants.MSG_INSERT_ERROR, [])
    }
    this.ctx.set('Content-Type', 'application/json');
    this.ctx.body = res.getData();
  }
}

module.exports = DemoController;
