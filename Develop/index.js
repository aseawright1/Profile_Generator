import { generateHTML } from './generateHTML'
const generateHTML = generateHTML()

const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile)

const questions = [{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
}, {
    type: "list",
    name: "favorite-color",
    message: "What is your favorite color?",
    choices: ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'black']
}];

function promptUser() {
    return inquirer.prompt(questions)
}

// function writeToFile(fileName, data) {

// }

async function init() {
    console.log('Please answer the prompts below to generate your profile PDF')
    try {
        const answers = await promptUser()
        const html = generateHTML(data)
        await writeFileAsync('index.html', html)
        console.log('Successfully wrote to index.html')
    } catch (err) {
        console.log(err);
    }
}
init();