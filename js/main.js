

(() => {

    fetch('./data/DataSet.json')
        .then(res => res.json())
        .then(data => {
            handleDataSet(data);
        })
        .catch((error) => console.log(error));


      function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        

          for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[0].textContent = data[user].name;
            currentUserText[1].textContent = data[user].nickname;
            currentUserText[2].textContent = data[user].role;

            userSection.appendChild(currentUser);
        } 
        console.log(data);    
    }

    handleDataSet();

})();
