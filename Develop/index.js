// import utilities and references
const generateHTML = require('./generateHTML.js');
const fs = require("fs")
const inquirer = require("inquirer")
const generatePDF = require('html-pdf')
const axios = require('axios')

// define data parameters
const dataParams = {
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
}

// begin promise
// const writeFileAsync = util.promisify(fs.writeFile)

// import questions into inquirer
// function promptUser() {
//     return inquirer.prompt(generateHTML.questions)
// }

function createFile(fileName, html) {
    console.log('Please wait')
    fs.writeFile('profile.pdf', html, (err) => {
        if (err) throw err;
    })

    // const options = { format: 'A4' }

    generatePDF.create(html, options).toFile('./profile.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log('PDF generated');
    })
}

// display prompts on console
// async function init() {
//     console.log('Please answer the prompts below to generate your profile PDF')
//     try {
//         const data = await promptUser()
//         const html = generateHTML.data
//         await writeFileAsync('index.html', html)
//         console.log('Successfully wrote to index.html')
//     } catch (err) {
//         console.log(err);
//     }
// }

function init() {
    // ask the questions
    inquirer.prompt(generateHTML.questionsquestions).then(
        function(data) {
            // link answers to HTML data
            dataParams.favcolor = data.color
            dataParams.profile = data.username

            // pull data from github and link to my parameters
            axios.get(`https://api.github.com/users/${data.username}`).then(function(response) {
                if (response.status == 200) {
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
                }
            })


        }
    )
}

init();