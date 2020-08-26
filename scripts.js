// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init() {
    let liftOff = document.getElementById('takeoff');
    let landing = document.getElementById('landing');
    let missionAbort = document.getElementById('missionAbort')
    let status = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById('rocket');
    // let directionalButton = document.getElementsByClassName('directional');
    // the above code was my first thought to select all buttons if the same class was applied to all, then using hte for statement below I could cycle through them
    let buttonRight = document.getElementById('right');
    let buttonLeft = document.getElementById('left');
    let buttonUp = document.getElementById('up');
    let buttonDown = document.getElementById('down');
    let newHeight = 0;
    //this was recommended by ryan, is it needed?
    rocket.style.position = 'absolute';
    
    liftOff.addEventListener('click', function(){
        if(window.confirm('Confirm that the shuttle is ready for takeoff.')){
            status.innerHTML = 'Shuttle in flight.';
            background.style.backgroundColor = 'blue';
            height.innerHTML = 10000;
        }
    });

    landing.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        status.innerHTML = ('The shuttle has landed.');
        background.style.backgroundColor = 'green';
        height.innerHTML = 0;
    });

    missionAbort.addEventListener('click', function(){
        if(window.confirm('Confirm that you want to abort the mission.')){
            status.innerHTML = ('Mission aborted.');
            background.style.backgroundColor = 'green';
            height.innerHTML = 0;
        }
    });
    
    buttonUp.addEventListener('click', function(){
        newHeight = Number(height.innerHTML) + 10000;
        height.innerHTML = newHeight;
        movement = parseInt(rocket.style.top) + 10 + 'px'
        rocket.style.top = movement;
        console.log('up')
    });

    buttonDown.addEventListener('click', function(){
        newHeight = Number(height.innerHTML) - 10000;
        height.innerHTML = newHeight;
        movement = parseInt(rocket.style.top) - 10 + 'px'
        rocket.style.top = movement;
        console.log('down')
    });

    buttonRight.addEventListener('click', function(){
        movement = parseInt(rocket.style.top) - 10 + 'px'
        rocket.style.left = movement;
        console.log('right')
    });

    buttonLeft.addEventListener('click', function(){
        movement = parseInt(rocket.style.left) + 10 + 'px'
        rocket.style.left = movement;
        console.log('left')
    });
}

    //scripting to search through the buttons, was not working
   /* directionalButton.addEventListener('click', function(){
        if (directionalButton.innerHTML == 'Up'){
            newHeight = Number(height.innerHTML) + 10000;
            height.innerHTML = newHeight;
            rocket.style.position -= '10px';
            console.log('up')
        } 
        if (directionalButton.innerHTML == 'Down'){
            newHeight = Number(height.innerHTML) - 10000;
            height.innerHTML = newHeight;
            console.log('down');
        }
        if (directionalButton.innerHTML == 'Right'){

        } 
        if (directionalButton.innerHTML == 'Left') {

        }
    })

} */

//update to "window load event" from the reading
window.onload = init;