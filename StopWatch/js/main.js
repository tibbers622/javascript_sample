(function() {
    'use strict';

    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var startTime;
    var elapsedTime = 0;
    var timerId;
    var timeToAdd = 0;
    var isRunning = false;

    function updateTimerText() {
        var minits = Math.floor(elapsedTime/60000);
        var seconds = Math.floor(elapsedTime%60000/1000);
        var milliseconds = elapsedTime % 1000;
        minits = ('0' + minits).slice(-2);
        seconds = ('0' + seconds).slice(-3);
        milliseconds = ('00' + milliseconds).slice(-3);
        timer.textContent = minits + ':' + seconds + '.' + milliseconds; 
        
    }

    function countUp() {
        timerId = setTimeout(function() {
            elapsedTime = Date.now() - startTime + timeToAdd;
            updateTimerText();
            countUp();
        }, 10);
    }

    function updateButtonState(startButtonState, stopButtonState) {
        start.className = startButtonState ? 'btn' : 'btn inactive';
        stop.className = stopButtonState ? 'btn' : 'btn inactive';
    }

    updateButtonState(true, false);

    start.addEventListener('click', function() {
        if (isRunning) {
            return;
        }
        isRunning = true;
        updateButtonState(false, true);
        startTime = Date.now();
        countUp();
    })

    stop.addEventListener('click', function() {
        if (!isRunning) {
            return;
        }
        isRunning = false;
        updateButtonState(true, false);
        clearTimeout(timerId);
        timeToAdd = Date.now() - startTime;
    })

    reset.addEventListener('click', function() {
        elapsedTime = 0;
        timeToAdd = 0;
        isRunning = false;
        updateButtonState(true, false);
        clearTimeout(timerId);
        updateTimerText();
    })
})();