//? import your packagess here
import data from "./modules/DataModule.js";
//import NavSystem from "./modules/TheNavModule.js";

(() => {
    //? stub  * just a place for non component specific stuff

    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;
    
    function handleDataSet(data) {
        
        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].nickname;
            currentUserText[3].textContent = data[user].role;

            userSection.appendChild(currentUser);
        }
        //currentUserText[1]       
    }

    handleDataSet(data);

})();
