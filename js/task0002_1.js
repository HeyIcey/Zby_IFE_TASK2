function showHobby1() {
	var text = $('.text1').value;
	text = text.replace(/[\s,，；;、]+/g,' ');
	text = text.split(' ');
	text = uniqArray(text);
		$('.post1').innerHTML ='';
	for(var i=0; i<text.length; i++){
		$('.post1').innerHTML += text[i]+'&nbsp;&nbsp;&nbsp;'; 
	}

}
$.click($('.btn1'),showHobby1);
// $.focus($('.text1'),function(){
// 	if (this.value === '请输入你的兴趣爱好') {
// 		this.value = '';
// 	}

// });
// $.blur($('.text1'),function(){
// 	if (this.value === '') {
// 		this.value = '请输入你的兴趣爱好';
// 	}
// });
function showHobby2() {
	var text = $('.text2').value;
	text = text.replace(/[\s,，；;、\n]+/g,' ');
	text = text.split(' ');
	text = uniqArray(text);
		$('.post2').innerHTML ='';
	for(var i=0; i<text.length; i++){
		$('.post2').innerHTML += text[i]+'&nbsp;&nbsp;&nbsp;'; 
	}
	$('.text2').value = '';

}
$.click($('.btn2'),showHobby2);

function showHobby3() {
	$('.post3').innerHTML ='';
	var text = $('.text3').value;
	text = trim(text);
	if (text.length === 0) {
		if ($('.step3-wrap span') === null ) {
			var node = document.createElement('span');
			$('.step3-wrap').appendChild(node);
			node.innerHTML = '爱好数量不能為0个或超过10个';
		}
	}else {
		text = text.replace(/[\s,，；;、\n]+/g,' ');
		text = text.split(' ');
		text = uniqArray(text);
		if(text.length>10) {
			if ($('.step3-wrap span') === null ) {
				var node = document.createElement('span');
				$('.step3-wrap').appendChild(node);
				node.innerHTML = '爱好数量不能為0个或超过10个';
			}
		}
		else if (text.length < 10 ) {
			if ($('.step3-wrap span')) {
				$('.step3-wrap').removeChild($('span'));
			}
			for(var i=0; i<text.length; i++){
				$('.post3').innerHTML += '<input type="checkbox" id=text'+i+'><label for=text'+i+'>'+text[i]+'</label>'; 
			}
			$('.text3').value = '';
		}
	}
	

}
$.click($('.btn3'),showHobby3);



////////////////////////
// 遗留问题：什么都不输入时 无错误提醒 //
// 节点插入问题             //
// 以完善                //
////////////////////////

