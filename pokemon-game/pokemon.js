const userLoggedIn = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

userLoggedIn(3000)
    .then(() => console.log('us getting you logged in!'));

let loadSite = () => {
    console.log('loading the site')
};

loadSite();