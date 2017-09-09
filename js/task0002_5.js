//////////////////////////////////////
// 实现一个可拖拽交互的界面                     //
// 如示例图，左右两侧各有一个容器，里面的选项可以通过拖拽来左右移动 //
// 被选择拖拽的容器在拖拽过程后，在原容器中消失，跟随鼠标移动    //
// 注意拖拽释放后，要添加到准确的位置                //
// 拖拽到什么位置认为是可以添加到新容器的规则自己定         //
// 注意交互中良好的用户体验和使用引导                //
//////////////////////////////////////

//////////////
//很多地方需要优化  //
//////////////

// 参数获取
var dragWrapper = $('.drag-wrapper');
var boxLeft = $('.boxLeft');
var boxRight = $('.boxRight');
var group = document.getElementsByClassName('group');
var draging = false;
console.log(dragWrapper);
console.log(boxLeft);
console.log(boxRight);
console.log(group);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

// 鼠标按下，鼠标移动，鼠标抬起

for(var i=0; i<group.length; i++){
	$.on(group[i],"mousedown",drag);
}

function drag(e) {
	console.log('mousedown')
	var e = e || window.event;
	var target = e.target || e.srcElement;
	var posX = e.clientX; //记录当前鼠标点击位置
	var posY = e.clientY;

    var groupX = target.offsetLeft;  //记录当前小块位置
    var groupY = target.offsetTop;

    var disX = posX - groupX;
    var disY = posY - groupY;
    console.log(posX);
    console.log(posY);
    console.log(groupX);
    console.log(groupY);

    draging = true;

    document.onmouseover = function(e){
    	var e = e ||　window.event;
    	if (draging == true) {
    		console.log('mousemove');
    		console.log(e.clientX);
    		console.log(e.clientY);
		    target.style.left = e.clientX -groupX - disX + 'px';
		    target.style.top = e.clientY -groupY  - disY +'px';
		    console.log('ok');
		    console.log('left=' + parseInt(target.style.left));
		    console.log('top='+ parseInt(target.style.top));
    	}else{
    		return;
    	}
    }

    document.onmouseup = function () {
    	draging = false;
    	console.log('mouseup');
    }


}