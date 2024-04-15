


const auth = firebase.auth();

var start = document.getElementById('Start');
var stop = document.getElementById('Stop');
var reset = document.getElementById('Reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

 

//store a reference to a timer variable
var startTimer;


function timer(){
    //work timer countdown
    if (ws.innerText != 0){
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    //break timer countdown
    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //increment counter after one full cycle
    if (bm.innerText == 0 && bs.innerText  == 0 && wm.innerText == 0 && ws.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = 0o0;
        bm.innerText = 5;
        bs.innerText = 0o0;
        document.getElementById('rep-counter').innerText++;
    }
}

start.addEventListener('click', function() {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    } else {
        alert("Timer is lready running");
    }
})

stop.addEventListener('click', function() {
    stopInterval();
    startTimer = undefined;
})

function stopInterval() {
    clearInterval(startTimer);
}

reset.addEventListener('click', function() {

    stopInterval(startTimer);
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('rep-counter').innerText = 0;
    startTimer = undefined;
    
})