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

//option 1
function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handle on click user';
}

//option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handle event listener user';
})

//option 2 again for input text update
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})


// Create a comment box and display comment

// step 1 : add event listener to the post button
document.getElementById('btn-post').addEventListener('click', function(){
    // step 2 : get the comment
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    // step 3 : set the comment inside the comment container
    // 1. get the comment container
    // 2. create a new element (p tag)
    // 3. set the text of the comment as innerText of the p tag
    // 4. add the p tag using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // step 4 : clear the text area
    commentBox.value = '';
    
});