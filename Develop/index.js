// import { generateHTML } from './generateHTML'
const generateHTML = require('./generateHTML.js');
// let createHTML = generateHTML.generateHTML();

// import utilities
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

// begin promise
const writeFileAsync = util.promisify(fs.writeFile)

// import questions into inquirer
function promptUser() {
    return inquirer.prompt(generateHTML.questions)
}

// display prompts on console
async function init() {
    console.log('Please answer the prompts below to generate your profile PDF')
    try {
        const data = await promptUser()
        const html = generateHTML(data)
        await writeFileAsync('index.html', html)
        console.log('Successfully wrote to index.html')
    } catch (err) {
        console.log(err);
    }
}

init();