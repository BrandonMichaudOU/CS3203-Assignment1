const express = require('express');
const router = express.Router();
const fs = require('fs');

// Read in the json with the tweets
fs.readFile('favs.json', (err, data) => {

    // If the file could not be read, throw an error
    if (err) throw err;

    // Create an array to hold the tweets
    let tweets = JSON.parse(data);

    // When the user requests the tweets, send the array
    router.get('/tweets', (req, res) => {
        res.send(tweets);
    });

    // When the user requests the userIDs, create a new array and add the user IDs to it and send it back
    router.get('/userIDs', (req, res) => {
        let userIDs = [];
        for (let i in tweets) {
            userIDs.push(tweets[i].user.id);
        }
        res.send(userIDs);
    });

    // When the user requests a specific tweet, search for the tweet ID and if it is found send the tweet.
    // If the tweet could not be found, send an error message
    router.get('/tweets/:ID', (req, res) => {
        let tweetID = req.params.ID;
        let trip = true;
        for (let i in tweets) {
            if (tweets[i].id == tweetID) {
                trip = false;
                res.send(tweets[i]);
            }
        }
        if (trip) {
            res.send('Tweet ID not found');
        }
    });

    // When the user sends an update name request, search for the old screen name and if it is found change it to the new
    // screen name. If the old screen name could not be found, send an error message
    router.put('/update-name', (req, res) => {
        let names = req.body
        let oldName = names.oldName;
        let newName = names.newName;
        let trip = true;
        for (let i in tweets) {
            if (tweets[i].user.screen_name == oldName) {
                trip = false;
                tweets[i].user.screen_name = newName;
                res.send(`Screen name updated from ${oldName} to ${newName}`);
            }
        }
        if (trip) {
            res.send(`User with screen name ${oldName} was not found`);
        }
    });

    // When the user sends a delete tweet request, search for the tweet ID and if it is found delete it. 
    // If not send an error message
    router.delete('/delete/:tweetID', (req, res) => {
        let tweetID = req.params.tweetID;
        let trip = true;
        for (let i in tweets) {
            if (tweets[i].id == tweetID) {
                trip = false;
                tweets.splice(i, 1);
                res.send("Tweet was successfully deleted");
            }
        }
        if (trip) {
            res.send(`Tweet with ID: ${tweetID} was not found`);
        } 
    });

    // When the user sends a create tweet request, add the tweet to the array and send back a success notification
    router.post('/create', (req, res, next) => {
        let tweet = req.body;
        tweets.push(tweet);
        res.json({ Success: '1' });
    });
});

module.exports = router;