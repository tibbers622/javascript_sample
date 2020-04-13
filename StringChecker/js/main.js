(function() {
    'use strict';

    var comment = document.getElementById('comment');
    var label = document.getElementById('label');

    var LIMIT = 140;
    var WARNING = 10;    

    label.innerHTML = LIMIT;

    comment.addEventListener('keyup', function() {
        var remaining = LIMIT - this.value.length;
        label.innerHTML = remaining;
        if (remaining < 0) {
            label.className = 'out';
        }else if (remaining < WARNING) {
            label.className = 'warning';
        }else{
            label.className = '';
        }
    });
})();