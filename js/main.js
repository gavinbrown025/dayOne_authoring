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
        //console.log(event.target.id);
    //! event.target is which spcific thing you clicked within the event listener 
        
        if(!event.target.id){return} //! if target doesnt have id sytop funtion
        
        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));

    }

    function renderPortfolioThumbs(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[0].src = `images/${thumbs[user].Avatar}`;
            currentUserText[0].id = thumbs[user].id;

            userSection.appendChild(currentUser);
        }

        userSection.addEventListener("click", retrieveProjectInfo);
    }

    fetchData("./includes/index.php").then(data => renderPortfolioThumbs(data)).catch(err => console.log(err));


})();
