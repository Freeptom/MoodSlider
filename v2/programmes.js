prog1 = {
    "name":"Shrek", 
    "mood":"happy"
}

// get all slider elements
let el = document.querySelectorAll('.slider')[0];


// on change event to each
el.addEventListener('change', (e) => {
    console.log(e.target.value);
    if(e.target.value == -1) {
        console.log('calm');
    }
} )


