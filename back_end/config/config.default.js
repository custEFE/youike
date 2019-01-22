'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548143066507_1106';

  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: '140.143.163.52',
      port: '3306',
      user: 'root',
      password: 'wenyujie@123',
      database: 'youke'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  return config;
};
