(function() {
    'use strict';

    var pannels = document.getElementsByClassName('panel');
    var spin = document.getElementById('spin');

    var cards = [
        'seven.png',
        'bell.png',
        'cherry.png'
    ];

    var timerIDs = [];

    var stopCount = 0;

    function runSlot(n) {
        timerIDs[n] = setTimeout(function () {
            pannels[n].children[0].src = 
                'img/' + cards[Math.floor(Math.random() * cards.length)];
            runSlot(n);
        }, 50);
    }

    function initPanel() {
        var i;
        for (i=0; i<pannels.length; i++) {
            pannels[i].children[1].addEventListener('click', function() {
                if (this.className.indexOf('inactive') !== -1) {
                    return;
                }
                clearTimeout(timerIDs[this.dataset.index]);
                stopCount++;
                this.className = 'stop inactive';
                if (stopCount === pannels.length) {
                    stopCount = 0;
                    checkResults();
                    spin.className = '';
                }
            });
        }
    }

    function checkResults () {
        var imgs = [];
        var i;
        for (i=0; i<pannels.length; i++) {
            imgs.push(pannels[i].children[0]);
        }

        if (imgs[0].src !== imgs[1].src && imgs[0].src !== imgs[2].src) {
            imgs[0].className = 'unmatched';
        }

        if (imgs[1].src !== imgs[2].src && imgs[1].src !== imgs[0].src) {
            imgs[1].className = 'unmatched';
        }

        if (imgs[2].src !== imgs[1].src && imgs[2].src !== imgs[0].src) {
            imgs[2].className = 'unmatched';
        }
        
    }

    initPanel();

    spin.addEventListener('click', function() {
        if (this.className.indexOf('inactive') !== -1) {
            return;
        }
        var i;
        this.className = 'inactive';
        for (i=0; i<pannels.length; i++) {
            runSlot(i);
            pannels[i].children[0].className = '';
            pannels[i].children[1].className = 'stop';
        }
    });
})();