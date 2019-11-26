// 

console.log("test");

const buttonFav = document.querySelector(".favourite");
const buttonEditProfile = document.querySelector(".edit-profile");

if (buttonFav) {
    buttonFav.addEventListener("click", (e) => {

        const restaurantId = (e.target.dataset.placeid);
        
        axios.get(`http://localhost:3000/favourite?id=${restaurantId}`)
        .then( (response) => {
            buttonFav.style.background = 'red'
            console.log('response ',response);
            
        })
        .catch( (err) => console.log(err));
    })
}

if(buttonEditProfile){
    buttonEditProfile.addEventListener("click", (e) => {
        window.location.replace("http://localhost:3000/private/edit");
    })
}