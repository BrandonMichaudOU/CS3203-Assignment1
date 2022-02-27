# Brandon Michaud Software Engineering Assignment 1

This project was developed with the purpose of being submitted for an assignment in my Software Engnineering class. It is based off of a github tutorial (see references) that the professor adapted and gave to us as an assignment.

# Installation in Local

For this project, you need to install Node.js, NPM, Nodemon, Express.js, Consolidate, Swig, and Body-Parser.

## To Install

`npm install node/express/nodemon/consolidate/swig/body-parser`

Note: `/` indicates or, e.g. only one of the keywords within the slashes can be inputted.

## To Run

`npm start` or `nodemon app`

The code is running on port 3000. To view in your browser, go to http://localhost:3000/

# Instructions

Once you have gone to the above link, you should see an html file that has six rows of inputs. Each input corresponds to a different task outlined in the assignment description.

## Get all Tweets

To get all of the tweets stored in the json file, click the submit button directly adjacent to the "get all tweets" label. If the request was successful, a table will appear below the inputs with the texts and times of all of the tweets. If the request was unsuccessful, the table will appear with an error message.

## Get all User IDs

To get all of the user IDs stored in the json file, click the submit button directly adjacent to the "get all user IDs" label. If the request was successful, a table will appear below the inputs with all of the user IDs. If the request was unsuccessful, the table will appear with an error message.

## Get Tweet Details

To get the details of a specific tweet, enter the tweet ID in the input text box adjacent to the "get tweet details" label and click the submit button adjacent to the aforementioned text box. If the request was successful, a table will appear below the inputs with the text and time of the tweet. If the request was unsuccessful, the table will appear with an error message indicating the tweet ID was not found.

## Create Tweet

To create a tweet, enter the tweet's text into the text box adjacent to the "create tweet" label and enter the creator's user ID into the next text box. Once you have entered the information, click the submit button at the end of the row to upload it. If the request was successful, a table will appear below the inputs notifying the user the tweets was created. If the request was unsuccessful, the table will appear with an error message.

## Update Name

To update a screen name, enter the old screen name into the text box adjacent to the "update name" label and enter the new screen name into the next text box. Once you have entered the information, click the submit button at the end of the row to save the changes. If the request was successful, a table will appear below the inputs notifying the user the name was changed. If the request was unsuccessful, the table will appear with an error message indicating the old screen name was not found.

## Delete Tweet

To delete a tweet, enter the tweet ID into the text box adjacent to the "delete tweet" label and click the submit button at the end of the row to delete it. If the request was successful, a table will appear below the inputs notifying the user the tweet was deleted. If the request was unsuccessful, the table will appear with an error message indicating the tweet ID was not found.

# References

- https://github.com/michaelcheng429/ajax-restful-api-tutorial
- https://youtube.com/playlist?list=PLillGF-RfqbYJVXBgZ_nA7FTAAEpp_IAc
- https://www.youtube.com/watch?v=pKd0Rpw7O48
- https://canvas.ou.edu/courses/249256/files/50917574/download?download_frd=1
