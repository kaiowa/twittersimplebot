const db = require('./database');
var datetime = require('node-datetime');
var Twit = require('twit')
 
var T = new Twit({
  consumer_key:        process.env.API_KEY,
  consumer_secret:     process.env.API_SECRET,
  access_token:        process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
async function getPost(){
  console.log('get 1 post from database');
  return new Promise((resolve,reject)=>{
    try {
      db.all("SELECT id,post from posts where id=3 limit 1", function(err, row) {
          resolve(row[0]);
      });
    } catch (error) {
      reject(error);
    }
  });
}
async function checkPosts(){

  this.getPost().then((data)=>{
    console.log(`data to post ${data}`);
    if(data && data.post){
      T.post('statuses/update', { status: data.post}, function(err, response) {
        console.log(data);
        let post_twitter_id=response.id;
      });
    }
  });
}
let Utils={
  'getPost':getPost,
  'checkPosts':checkPosts
}
module.exports = Utils;
