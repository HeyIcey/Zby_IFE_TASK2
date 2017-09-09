// 获取参数
var banner = $('.banner');
var buttons = $('.list').getElementsByTagName('span');
var prev = $('#prev');
var next = $('#next');

var index = 1; 
var animated = false;

var timer;
// 事件绑定
$.click(prev,prevImg);
$.click(next,nextImg);
for(var i = 0; i<buttons.length; i++){
	$.click(buttons[i],function(){
		if (this.className == 'on') {
			return;
		}
		var myIndex = parseInt(this.getAttribute('index'));
		var offset = -600 *(myIndex-index);
		animate(offset);
		index = myIndex;	
		showButton();
	});
}
// 动态效果实现
// 按钮对应图片显示效果
function showButton(){
	for(var i=0; i<buttons.length;i++){
		if (buttons[i].className == 'on') {
			buttons[i].className = '';
			break;
		}
	}
	buttons[index-1].className = 'on';
}
// 图片切换效果
function animate(offset){
	animated = true;
	var newLeft =  parseInt(banner.style.left) + offset ;
	var time = 300; //位移总时间
	var interval = 10; //位移时间间隔
	var speed = offset/(time/10); //每次位移量
	function go(){
		if ((speed<0 && parseInt(banner.style.left)>newLeft) || (speed>0 && parseInt(banner.style.left)<newLeft)) {
			banner.style.left = parseInt(banner.style.left) + speed + 'px';
			setTimeout(go,interval);
		}else{
			animated = false;
			banner.style.left = newLeft + 'px';
			if (parseInt(banner.style.left) < -3600) {
				banner.style.left = '-600px';
			}
			if (parseInt(banner.style.left) > -600) {
				banner.style.left = '-3600px';
			}
			
		}
	}
	go();

}

function play(){
	if (timer) {
		stop();
	}
	var next = $('#next');
    timer = setInterval(function () {
        next.click();
    }, 3000);
	
}
function stop(){
	if (timer) {
		stop();
	}
	clearInterval(timer);
}
banner.onmouseover = stop;
banner.onmouseout = play;
play();
function prevImg() {
	if (index == 1) {
		index = 6;
	}else{
		index--;
	}
	showButton();
	if (animated == false) {
		animate(600);
	}
}

function nextImg(){
	if (index == 6) {
		index = 1;
	}else{
		index++;
	}
	showButton();
	if (animated == false) {
		animate(-600);
	}

}