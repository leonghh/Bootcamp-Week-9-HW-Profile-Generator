var generateHTML = require("./generateHTML")
var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios");


const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: [
      "green",
      "blue",
      "pink",
      "red"
    ]
  }
];

inquirer.prompt(questions)
  .then(function (data) {
    console.log(data.username);
    console.log(data.color)
    // getUsers(data.username);
    // getStars(data.username)
      // .then(writeToFile());

        console.log(generateToHTML)
  }).catch(function(err) {
    console.log(err);
  });

var generateToHTML = generateHTML();

function writeToFile() {
  fs.writeFile("index.html", generateToHTML, function(err) {

    if (err) {
      return console.log(err);
    }
    
    console.log("Success!");
  
  });
}




function getUsers(username) {
  const queryURLGithubUser = `https://api.github.com/users/${username}`;
  axios.get(queryURLGithubUser)
    .then(function (res) {
      console.log(res.data);
    });
};

function getStars(username) {
  const queryURLGithubStars = `https://api.github.com/users/${username}/repos`;
  axios.get(queryURLGithubStars)
    .then(function (res) {
      console.log(res.data);
    });
};


