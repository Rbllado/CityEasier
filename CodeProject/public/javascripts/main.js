// 

console.log("test");

const button = document.querySelector(".favourite");

if (button) {

    
    button.addEventListener("click", (e) => {

        const restaurantId = (e.target.dataset.placeid);
        
        axios.get(`http://localhost:3000/favourite?id=${restaurantId}`)
        .then( (response) => {
            button.style.background = 'red'
            console.log('response ',response);
            
        })
        .catch( (err) => console.log(err));
    })
}