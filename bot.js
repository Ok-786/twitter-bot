// console.log("da bot is started!!!");

// var Twit = require('twit');
// var config = require('./config');
// var T = new Twit(config);
// var fs = require('fs');
// const exec = require('child_process').exec;

// //get...............................................
// // var params = {
// //     q: 'qadeer khan',
// //     count: 2
// // };
// // 
// // T.get('search/tweets', params, gotData);

// // function gotData(err, data, response) {
// //     var tweets = data.statuses;
// //     tweets.forEach(element => {
// //         console.log(element.text);
// //     });
// // }



// //post in interval after 20 seconds...............................................
// // function tweetIt() {

// //     var r = Math.floor(Math.random()*100);

// //     var params = {
// //         status: `hello world! ${r}`
// //     };

// //     T.post('statuses/update', params, tweeted);

// //     function tweeted(err, data, response) {
// //         if (err) {
// //             console.error(err.message);
// //         } else {
// //             console.log("it worked!!!")
// //         }
// //     }
// // }
// // tweetIt();
// // setInterval(tweetIt, 1000*20);



// //// post picture in interval after 20 seconds...............................................
// // function tweetIt() {

// //     var cmd = '';
// //     // exec(cmd, processing);
// //     processing();

// //     function processing() {
// //         var filename = 'rainbow/output.png';
// //         var params = {
// //             encoding: 'base64'
// //         }
// //         var b64content = fs.readFileSync(filename, params);

// //         T.post('media/upload', { media_data: b64content }, uploaded);

// //         function uploaded(err, data, response) {
// //             var id = data.media_id_string;
// //             var tweet = {
// //                 status: `hello world! asddadd`,
// //                 media_ids: [id]
// //             };

// //             T.post('statuses/update', tweet, tweeted);
// //         }

// //     }


// //     function tweeted(err, data, response) {
// //         if (err) {
// //             console.error(err.message);
// //         } else {
// //             console.log("it worked!!!")
// //         }
// //     }
// // }
// // tweetIt();
// // setInterval(tweetIt, 1000 * 20);




// //replying whenever someone follows me.............................
// //Setting up a user stream
// var stream = T.stream('statuses/filter', { track: '@imcodezero' });

// //anytime someone follows me
// stream.on('tweet', followed);

// function followed(eventMsg) {
//     console.log('follow event!!!');
//     var name = eventMsg.source.name;
//     var screenName = eventMsg.source.screen_name;
//     tweetIt(`@${screenName} Thank you for following me!`);
// }


// // //post...............................................
// // function tweetIt(txt) {


// //     var tweet = {
// //         status: txt
// //     };

// //     T.post('statuses/update', tweet, tweeted);

// //     function tweeted(err, data, response) {
// //         if (err) {
// //             console.error("asd"+err.message);
// //         } else {
// //             console.log("it worked!!!")
// //         }
// //     }
// // }