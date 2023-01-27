// get all key
const keys = document.querySelectorAll('.key')

// play notes
function playNote(event) {
    console.log(event)
    // keyCode 

    // typed  or pressed key

    //if key exists

    // play audio

}

// click with mouse
keys.forEach( function(key) {
    key.addEventListener("click", playNote)
})

// keyboard type
window.addEventListener("keydown", playNote)