const {writeFile} = require('fs');
const request = require('request');
const URL = process.argv[2];
const filePath = process.argv[3];
let string;
let strLength;

const outputFunction = function (error, response, body) {
  string = error + response + body;
  strLength = string.length;

  writeFile(filePath, string, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file saved successfully");
      console.log(`downloaded and saved ${strLength} bytes to ${filePath}`);
    }
  })
};

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  //call the function with parameters provided
  outputFunction(error, response, body)
 })