'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.demo.index);
  router.get('/demo/insert', controller.demo.insert);
};
