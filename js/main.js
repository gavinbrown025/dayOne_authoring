import {fetchData, postData} from "./modules/DataMiner.js"

(() => {

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
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });


})();
