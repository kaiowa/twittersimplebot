require('dotenv').config();
const schedule = require('node-schedule');
var fs = require('fs');
const Config=require('./common/config.json');
const Utils=require('./src/utils');
const db = require('./src/database');
var datetime = require('node-datetime');

(async () => {
  Utils.checkPosts();
})();