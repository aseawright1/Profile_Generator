# Profile_Generator

## Demo
![alt text](https://github.com/aseawright1/7.Profile_Generator/blob/master/Assets/images/profile-gen-demo.gif)

## What this project is
This is a command-line based application that dynamically generates a PDF resume from a GitHub username. The application is invoked with the following command:

```sh
node index.js
```

The user is prompted for their GitHub username and a favorite color, which will be used to apply formatting to their custom PDF document

The PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Why I began this project
When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## How I implemented this project
This project was implemented using Node.js, Axios, and [this html-to-pdf converter](https://github.com/marcbachmann/node-html-pdf.git)

## What I hope to eventually accomplish with this project
This project will be a building block that I can expand upon to create other helpful applications that pull user data and organize it into a neat, readable format
