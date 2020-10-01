//? import your packagess here
import Team from "./modules/DataModule.js";
//import NavSystem from "./modules/TheNavModule.js";

(() => {
    //? stub  * just a place for non component specific stuff
    console.log('loaded');
    console.log(Team);

    let userSection = document.querySelector(".user-section").children;
    
    userSection[1].textContent = Team["Gavin"].name;
    userSection[2].textContent = Team["Gavin"].nickname;
    userSection[3].textContent = Team["Gavin"].role;

})();
