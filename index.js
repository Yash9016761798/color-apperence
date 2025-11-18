var btn = document.querySelector('button');
var main = document.querySelector('main');

btn.addEventListener('click', function () {
    var box = document.createElement('div');
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);

    box.classList.add('floating-box');
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    box.style.left = x + '%';
    box.style.top = y + '%';
    box.style.animationDelay = Math.random().toFixed(2) + 's';

    main.appendChild(box);
});