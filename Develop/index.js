// import utilities and references
const generateHTML = require('./generateHTML.js');
const fs = require("fs")
const inquirer = require("inquirer")
const generatePDF = require('html-pdf')
const axios = require('axios')

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
}

// const options = { format: 'A4' }

generatePDF.create(html, options).toFile('./profile.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log('PDF generated');
})

// display prompts on console
async function init() {
    console.log('Please answer the prompts below to generate your profile PDF')
    try {
        const data = await promptUser()
        const html = generateHTML.data
        await writeFileAsync('index.html', html)
        console.log('Successfully wrote to index.html')
    } catch (err) {
        console.log(err);
    }
}

init();