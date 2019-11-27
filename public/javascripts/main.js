const buttonFav = document.querySelector(".favourite");
const buttonEditProfile = document.querySelector(".edit-profile");

var buttonDeleteFav = document.getElementsByClassName('remove-favorite');

var btnMenu = document.querySelector('.side-menu-trigger');
var sideMenu = document.querySelector('.side-menu');

btnMenu.addEventListener('click', function (event) {
    console.log('apretado');

    sideMenu.classList.toggle('open');
});


// Add favourite element into profile page.

if (buttonFav) {
    buttonFav.addEventListener("click", (e) => {

        const restaurantId = (e.target.dataset.placeid);

        axios.get(`http://localhost:3000/favourite?id=${restaurantId}`)
            .then((response) => {
                buttonFav.style.background = 'red'
                console.log('response ', response);

            })
            .catch((err) => console.log(err));
    })
}


// Button to delete the favourite elemenst in the profile page.

if (buttonDeleteFav) {

    for (let i = 0; i < buttonDeleteFav.length; i++) {
        buttonDeleteFav[i].addEventListener('click', (e) => {
            const deleteId = (e.target.dataset.placeid);

            axios.get(`http://localhost:3000/favouriteDelete?id=${deleteId}`)
                .then((response) => {
                    buttonDeleteFav[i].style.background = 'blue';
                    location.reload();

                })
                .catch((err) => console.log(err));
        });
    }

};

// Modify profile edit, redirect when press the button edit.
if (buttonEditProfile) {
    buttonEditProfile.addEventListener("click", (e) => {
        window.location.replace("http://localhost:3000/private/edit");
    })
}