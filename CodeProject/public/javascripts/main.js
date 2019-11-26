// 

console.log("test");

const buttonFav = document.querySelector(".favourite");
const buttonEditProfile = document.querySelector(".edit-profile");
// const buttonDeleteFav = document.querySelectorAll(".remove-favorite");

var buttonDeleteFav = document.getElementsByClassName('remove-favorite');


// Add favourite
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


if (buttonDeleteFav){

    // buttonDeleteFav.addEventListener("click", (e) => {
        
        for(let i = 0;i<buttonDeleteFav.length;i++){        
            buttonDeleteFav[i].addEventListener('click', (e) => {
                const deleteId = (e.target.dataset.placeid);
                // console.log(deleteID);
                
                axios.get(`http://localhost:3000/favouriteDelete?id=${deleteId}`)
                .then( (response) => {
                    buttonDeleteFav.style.background = 'blue';
                    // console.log('response ',response);
                    
                })
                .catch( (err) => console.log(err));
            });
        }
        
    };

// )}

// Modify profile edit
if(buttonEditProfile){
    buttonEditProfile.addEventListener("click", (e) => {
        window.location.replace("http://localhost:3000/private/edit");
    })
}