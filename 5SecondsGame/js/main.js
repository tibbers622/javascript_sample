(function() {
    'use strict';

    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');
    var startTime;
    var isStarted = false;
    var elapsedTime;

    start.addEventListener('click', function() {
        if (isStarted) {
            return;
        }
        startTime = Date.now();
        this.className = 'pushed';
        stop.className = '';
        isStarted = true;
        result.textContent = '0.000';
        result.className = 'standby';
    });

    stop.addEventListener('click', function() {
        if (!isStarted) {
            return;
        }
        elapsedTime = (Date.now() - startTime)/1000;
        this.className = 'pushed';
        start.className = '';
        result.className = '';
        isStarted = false;
        result.textContent = elapsedTime.toFixed(3);
        var diff = elapsedTime - 5.0;
        if (Math.abs(diff) < 0.1) {
            result.className = 'perfect';
        } else if (Math.abs(diff) < 1.0) {
            result.className = 'close';
        }
    });

})();