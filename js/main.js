import { fetchData, postData } from "./modules/DataMiner.js"

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');

    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[0].src = `images/${data[user].Avatar}`;
            currentUserText[1].textContent = data[user].Name;
            currentUserText[2].textContent = data[user].Nickname;
            currentUserText[3].textContent = data[user].Role;


            userSection.appendChild(currentUser);
        }
        console.log(data);
    }

    function retrieveProjectInfo() {
        console.log(this.id);

        fetchData(`./includes/index.php?id=${this.id}`).then(data => console.log(data)).catch(err => console.log(err));

    }

    function renderPortfolioThumbs(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[0].src = `images/${thumbs[user].Avatar}`;
            currentUserText[0].id = thumbs[user].id;

            console.log(currentUserText.children);

            currentUserText[0].addEventListener("click", retrieveProjectInfo);
            userSection.appendChild(currentUser);
        }
    }

    fetchData("./includes/index.php").then(data => renderPortfolioThumbs(data)).catch(err => console.log(err));


})();
