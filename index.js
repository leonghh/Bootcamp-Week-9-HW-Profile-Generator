var generateHTML = require("./generateHTML")
var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");
var convertFactory  = require("electron-html-to");

var conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});

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
      "blue",
      "green",
      "pink",
      "red"
    ]
  }
];

init();

function init() {
  inquirer.prompt(questions).then(({ username, color }) => {
    getUsers(username)
      .then(response =>
        getStars(username).then(stars => {
          return generateHTML({
            stars,
            color,
            ...response.data
          });
        })
      )
      .then(html => {
        // console.log(html)
        conversion({ html: html }, function (err, result) {
          if (err) {
            return console.error(err);
          }
          console.log(result.numberOfPages);
          console.log(result.logs);
          result.stream.pipe(fs.createWriteStream('./profile.pdf'));
          conversion.kill();
        });
      });
  })
}



function getUsers(username) {
      const queryURLGithubUser = `https://api.github.com/users/${username}`;
      return axios.get(queryURLGithubUser)
    };

  function getStars(username) {
    const starCountArr = [];
    const queryURLGithubStars = `https://api.github.com/users/${username}/repos`;
    return axios.get(queryURLGithubStars)
      .then(function (res) {
        res.data.forEach(function (el) {
          starCountArr.push(el.stargazers_count);
        });
        const totalStar = starCountArr.reduce((a, b) => a + b, 0);
        return totalStar;
      });
  };


