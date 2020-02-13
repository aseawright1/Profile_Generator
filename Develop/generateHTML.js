const questions = [{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
}, {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'black']
}];

const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "#C1C72C",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "#5F64D3",
        headerBackground: "#26175A",
        headerColor: "white",
        photoBorderColor: "#73448C"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "#DE9967",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
    <title>Document</title>
    
      </head>
      
      <body>
    <div class="wrapper">
        <div class="photo-header">
            <img src="${data.avi}"></img>
            <h1>Hey there!</h1>
            <h2>My name is ${data.realName}.</h2>
            <h6>I currently work at ${data.business}</h6>
            <div class="links-nav">
                <a href="http://maps.google.com/?q=${data.location}" class="nav-link"><i class="fas fa-location-arrow"> ${data.location}</i></a>
                <a href="${data.profileLink}" class="nav-link"><i class="fab fa-github-alt"> GitHub</i></a>
                <a href="${data.blog}" class="nav-link"><i class="fas fa-blog"> Portfolio</i></a>
            </div>
        </div>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>${data.bio}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col card">
                        <h3>Public Repositories</h3>
                        <h5>${data.pubRepos}</h5>
                    </div>
                    <div class="col card">
                        <h3>Followers</h3>
                        <h5>${data.followers}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col card">
                        <h3>GitHub Stars</h3>
                        <h5>${data.stars}</h5>
                    </div>
                    <div class="col card">
                        <h3>Following</h3>
                        <h5>${data.following}</h5>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>`
}

module.exports = {
    questions: questions,
    generateHTML: generateHTML
};