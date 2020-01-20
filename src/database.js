const Config=require('../common/config.json');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(`./db/${Config.DBNAME}`);

db.run('CREATE TABLE IF NOT EXISTS posts (id TEXT, post TEXT, dateposted DATETIME,posted BOOLEAN)');

module.exports = db;