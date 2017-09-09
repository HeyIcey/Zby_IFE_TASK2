/////////////////////////////////////
////////////////////////////////// //
// 允许使用鼠标点击选中提示栏中的某个选项          // //
// 允许使用键盘上下键来选中提示栏中的某个选项，回车确认选中 // //
// 选中后，提示内容变更到输入框中              // //
////////////////////////////////// //
// 键盘效果有待优化                        //
//需要优化的地方还有很多                      //
//有时间再弄                            //
//先赶进度                             //
//就酱                               //
/////////////////////////////////////

// 伪造数据
var index = 0; //提示栏中li的序列号
var suggestData = ['Simon', 'Erik', 'Kener','Simon1', 'Erik1', 'Kener1','Simon2', 'Erik2', 'Kener2','Simon3', 'Erik3', 'Kener3'];
// 参数获取
var  text = $('.search-text');
var suggest = $('.search-list');
// 正则表达式匹配规则
var pattern = /"^"+text.value/gi ;
//获取开头相同的字符串// 智能提示
function suggestShow(){
	var value = text.value;
	var suggestList='';
	var pattern = new RegExp("^" + value, "i");
	if (value == '') {
		suggest.style.display = 'none';
	}else{
		for(var i=0; i<suggestData.length; i++){
			if(pattern.test(suggestData[i])){
				suggestList += '<li>' + suggestData[i] + '</li>';
			};
		}
		suggest.innerHTML = suggestList;
		suggest.style.display = 'block';
	}

	var len = suggest.getElementsByTagName('li');
	for(var i=0; i<len.length; i++){
		len.className = '';
	}
	for(var i=0; i<len.length; i++){
		len[i].onmouseover = function(){
			this.className = 'on';
		};
		len[i].onmouseout = function(){
			this.className = '';
		};
	}
		
}

//智能提示与按键输入绑定
text.onkeyup = suggestShow;
// 事件代理 绑定给动态添加的元素节点点击事件
delegateEvent(suggest, 'li', 'click', showText); 

function showText() {
	text.value = this.innerHTML;
	suggest.style.display = 'none';
}

document.onclick = function () {
	suggest.style.display  = 'none';
}

// 键盘效果
//使用键盘控制li的选中
document.onkeyup = function(e){
	var li = suggest.getElementsByTagName('li');
	var len = li.length;
	var e = e || window.event;

	if (e&&e.keyCode == 38) {
		console.log('up');
		if (index>len) {
			index = 0;
		}else if(index == 0){
			index = 0;
		}else{
			index-- ;
		}

		for(var j=0; j<len-1; j++){
			li[j].className = '';
		}
		li[index-1].className = 'on';

	}
	if (e&&e.keyCode == 40) {
		console.log('down');
		if (index<len-1) {
			index++
		}else{
			index = len ;
		}

		for(var j=0; j<len-1; j++){
			li[j].className = '';
		}
		li[index-1].className = 'on';
		
	}
	if (e&&e.keyCode == 13) {
		console.log('enter');
		text.value = li[index-1].innerHTML;
		suggest.style.display = 'none';
		
	}
}