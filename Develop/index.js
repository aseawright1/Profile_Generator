// import utilities and references
const generateHTML = require('./generateHTML');
const fs = require('fs')
const inquirer = require('inquirer')
const generatePDF = require('html-pdf')
const axios = require('axios')

// define data parameters
const dataParams = {
    profile: '',
    favcolor: '',
    avi: '',
    realName: '',
    business: '',
    location: '',
    profileLink: '',
    blog: '',
    bio: '',
    pubRepos: '',
    followers: '',
    stars: '',
    following: ''
};

// function for creating the pdf file
function createFile(pdfName, html) {
    console.log('Please wait')
    fs.writeFile(pdfName, html, (err) => {
        if (err) {
            return console.log(err);
        }
    })

    // pdf generator formatting for A3 size paper
    const options = { format: 'A3' }

    generatePDF.create(html, options).toFile(`./${dataParams.profile}.pdf`, (err) => {
        if (err) return console.log(err);
        console.log('PDF Created!');
    });
}

function init() {
    // ask the questions
    inquirer.prompt(generateHTML.questions).then((data) => {
        const htmlName = `${data.username}.html`;
        // link answers to HTML data
        dataParams.favcolor = data.color
        dataParams.profile = data.username

        // pull data from github and link to my parameters
        axios.get(`https://api.github.com/users/${data.username}`)
            .then(function(response) {
                // if (response.status === 200) {
                dataParams.avi = response.data.avatar_url
                dataParams.realName = response.data.name
                dataParams.business = response.data.company
                dataParams.location = response.data.location
                dataParams.profileLink = response.data.html_url
                dataParams.blog = response.data.blog
                dataParams.bio = response.data.bio
                dataParams.pubRepos = response.data.public_repos
                dataParams.followers = response.data.followers
                dataParams.stars = response.data.public_gists
                dataParams.following = response.data.following

                const newFile = generateHTML.generateHTML(dataParams);
                createFile(htmlName, newFile);

                // console.log("error caught:", error.name, error.message)
                // }
            })
            .catch(err => {
                console.log(err);
                process.exit(1)
            })
    })
}
init();