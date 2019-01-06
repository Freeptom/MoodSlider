let programmes = [
    prog1 = {
        "name": "Shrek",
        "mood": "calm",
        "img": "/imgs/Shrek.jpg"
    },
    prog2 = {
        "name": "Silence of the Lambs",
        "mood": "scared"
    },
    prog3 = {
        "name": "Happy Gilmore",
        "mood": "happy"
    }
]

// get all slider elements
let els = document.querySelectorAll('.slider');
let el = document.querySelectorAll('.slider')[0];

// get all prog slots titles
let progSlotsTitles = document.querySelectorAll('.programme-slot-title')[0];


// on change event to each
el.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value == -1) {
        const calmProgrammes = programmes.filter(program => {
            return program.mood === 'calm'
        });
    console.log(calmProgrammes);
    // change innerHTML of title
    progSlotsTitles.innerHTML = calmProgrammes[0].name;

    }
});