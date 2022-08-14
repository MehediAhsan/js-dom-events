// option 1 
// <button onclick="document.body.style.backgroundColor = 'red'">Bg Red</button>


// option 2
// Important
//<button onclick="bgGreen()">Bg Green</button>
function bgGreen(){
    document.body.style.backgroundColor = 'green';
}


// option 3
//<button id="bg-blue">Bg Blue</button>
const bgBlueButton = document.getElementById('bg-blue');
bgBlueButton.onclick = bgBlue;

function bgBlue(){
    document.body.style.backgroundColor = 'blue';
}


//option 3 another 
//<button id="bg-blueviolet">Bg Blueviolet</button>
const bgBluevioletButton = document.getElementById('bg-blueviolet');
bgBluevioletButton.onclick = function bdBlueviolet(){
    document.body.style.backgroundColor = 'blueviolet'
}


//option 4
//<button id="bg-yellow">Bg Yellow</button>
const bgYellowButton = document.getElementById('bg-yellow');
bgYellowButton.addEventListener('click', bgYellow);

function bgYellow(){
    document.body.style.backgroundColor = 'yellow';
}


//option 4 another 
//<button id="bg-yellowgreen">Bg Yellowgreen</button>
const bgYellowgreenButton = document.getElementById('bg-yellowgreen');
bgYellowgreenButton.addEventListener('click', function bgYellowgreen() {
    document.body.style.backgroundColor = 'yellowgreen';
});


//option 4 final 
// Important
//<button id="bg-pink">Bg Pink</button>

document.getElementById('bg-pink').addEventListener('click', function() {
    document.body.style.backgroundColor = 'pink';
});



//final DOM event handlers



