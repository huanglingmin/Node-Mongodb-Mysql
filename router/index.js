const fs = require('fs');
const express = require('express');
const Router = express.Router;

function search(root, dir, router) {
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    const path = dir + '/' + file;
    const stat = fs.statSync(path);
    const routerPath = '/' + file.split('.')[0];
    if (stat && stat.isDirectory()) {
      router.use(routerPath, search(root, path, Router()));
    } else {
      const modulePath = dir.replace(root, '') + routerPath;
      const routerModule = require('.' + modulePath).default;
      if (routerModule) {
        router.use(routerPath, routerModule);
      }
    }
  });
  return router;
}
module.exports = search(__dirname, __dirname, Router());