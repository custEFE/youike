'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  async index() {
    const data = await this.app.mysql.select('demo')
    return data;
  }
  async insert(data) {
      const result = await this.app.mysql.insert('demo', data);
      return result.affectedRows === 1; 
  }
}

module.exports = DemoService;
