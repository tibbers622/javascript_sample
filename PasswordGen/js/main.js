(function() {
    'use strict';

    var slider = document.getElementById('slider');
    var label = document.getElementById('label');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    var lowercase = document.getElementById('lowercase');
    var uppercase = document.getElementById('uppercase');
    var numbers = document.getElementById('numbers');
    var symbols = document.getElementById('symbols');

    function getPassword() {
        var seed = '';
        var seed_lowercase = 'abcdefghijklmnopqrstuvwxyz';
        var seed_uppercase = seed_lowercase.toUpperCase();
        var seed_numbers = '0123456789'
        var seed_symbols = '!#$%&()?'

        var len = Number(slider.value);
        var pwd = [];

        if (lowercase.checked) {
            seed += seed_lowercase;
            pwd.push(seed_lowercase[Math.floor(Math.random() * seed_lowercase.length)]);
        }

        if (uppercase.checked) {
            seed += seed_uppercase;
            pwd.push(seed_uppercase[Math.floor(Math.random() * seed_uppercase.length)]);
        }

        if (numbers.checked) {
            seed += seed_numbers;
            pwd.push(seed_numbers[Math.floor(Math.random() * seed_numbers.length)]);
        }

        if (symbols.checked) {
            seed += seed_symbols;
            pwd.push(seed_symbols[Math.floor(Math.random() * seed_symbols.length)]);
        }

        if (seed !== '') {
            while(pwd.length !== len) {
                pwd.push(seed[Math.floor(Math.random() * seed.length)]);
            }

            // 配列のシャッフル
            while(len--) {
                var i = Math.floor(Math.random() * pwd.length);
                var j = Math.floor(Math.random() * pwd.length);
                var tmp = pwd[i];
                pwd[i] = pwd[j];
                pwd[j] = tmp;
            }
            result.value = pwd.join('');
        }
    }


    slider.addEventListener('change', function() {
        label.innerHTML = this.value;
    });

    btn.addEventListener('click', function() {
        getPassword();
    });

    result.addEventListener('click', function() {
        this.select();
    });

    getPassword();
})();