var wrapper = $('.rotation-wrapper');
var banner = $('.banner');
var buttons = $('.list').getElementsByTagName('span');
var prev = $('#prev');
var next = $('#next');
var index = 1;
var animated = false;
var timer;

function showButton() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].className == 'on') {
            buttons[i].className = '';
            break;
        }
    }
    buttons[index - 1].className = 'on';
}

function animate(offset) {
    animated = true;
    var newLeft = parseInt(banner.style.left) + offset;
    var time = 300;
    var interval = 10;
    var speed = offset / (time / interval);

    function go() {
        if ((speed < 0 && parseInt(banner.style.left) > newLeft) || (speed > 0 && parseInt(banner.style.left) < newLeft)) {
            banner.style.left = parseInt(banner.style.left) + speed + 'px';
            setTimeout(go, interval);
        } else {
            animated = false;
            banner.style.left = newLeft + 'px';
            if (newLeft < -3600) {
                banner.style.left = -600 + 'px';
            }
            if (newLeft > -600) {
                banner.style.left = -3600 + 'px';
            }
        }
    }
    go();
}

function prevImg() {
    if (index == 1) {
        index = 6;
    } else {
        index--;
    }
    showButton();
    if (!animated) {
        animate(600);
    }
}

function nextImg() {
    if (index == 6) {
        index = 1;
    } else {
        index++;
    }
    showButton();
    if (!animated) {
        animate(-600);
    }
}
$.click(prev, prevImg);
$.click(next, nextImg);

for (var i = 0; i < buttons.length; i++) {
    $.click(buttons[i], function() {
        var myIndex = parseInt(this.getAttribute('index'));
        var offset = -600 * (myIndex - index);
        if (!animated) {
            animate(offset);
        }
        index = myIndex;
        showButton();
    });
}

function play() {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function() {
        next.click();
    }, 1000);
}

function stop() {
    clearInterval(timer);
}
play();

wrapper.onmouseover = stop;
wrapper.onmouseout = play;
