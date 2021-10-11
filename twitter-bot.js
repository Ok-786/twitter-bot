console.log("da bot is started!!!");

const axios = require('axios');
var Twitter = require('twitter');
var config = require('./config');
var twitterClient = new Twitter(config);
var Twit = require('twit');
var T = new Twit(config);
var fs = require('fs');


const newCatsThisHour = async () => {
    const hourAgo = new Date(new Date().getTime() - 1000 * 60 * 45).toISOString();

    let catsWithPhotos = []

    try {
        const options = {
            url: 'https://api.petfinder.com/v2/oauth2/token',
            method: 'post',
            data: `grant_type=client_credentials&client_id=${process.env.PF_API_KEY}&client_secret=${process.env.PF_SECRET_KEY}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        const response = await axios(options);
        const { access_token } = response.data;

        const options1 = {
            url: `https://api.petfinder.com/v2/animals?type=cat&after=${hourAgo}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        const response1 = await axios(options1);
        const { animals } = response1.data;

        if (animals.length === 0) {
            return null;
        }
        if (animals.length > 0) {
            catsWithPhotos = animals.filter(animal => animal.photos.length > 0)
            return catsWithPhotos;
        }
        console.log(animals);
    } catch (err) {
        console.error(err.message);
    }
};

const shareCat = async () => {
    const newCats = await newCatsThisHour();

    console.log(newCats)





    var stream = T.stream('statuses/filter', { track: 'cat' })

    stream.on('tweet', function (tweet) {
        if (newCats) {
            let image = await axios.get(`${newCats[0].photos[0].medium}`, { responseType: 'arraybuffer' });
            let returnedB64 = Buffer.from(image.data).toString('base64');
            T.post('media/upload', { media_data: returnedB64 }, uploaded);

            function uploaded(err, data, response) {
                var id = data.media_id_string;
                var tweet = {
                    status: `#pet #cat #cats #adorable #cute #kitten #petfinder I'm looking for a home!😿🙀😿 ${newCats[0].url}`,
                    media_ids: [id]
                };

                T.post('statuses/update', tweet, tweeted);
                console.log('done')
            }

            function tweeted(err, data, response) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("it worked!!!")
                }
            }
        }
    })




    // console.log(newCats[0].photos[0])

}

shareCat();

setInterval(shareCat, 1000 * 60 * 28);