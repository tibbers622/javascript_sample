(function() {
    'use strict';

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        var results = ['大吉', '中吉', '末吉', '凶'];
        var n = Math.random();
        if (n < 0.05) {
            this.textContent = results[0];    
        } else if (n < 0.2) {
            this.textContent = results[1];
        } else if (n < 0.5) {
            this.textContent = results[2];
        } else {
            this.textContent = results[3];
        }        
    });

    btn.addEventListener('mousedown', function() {
        this.className = 'pushed';
    });

    btn.addEventListener('mouseup', function() {
        this.className = '';
    });

})();