///////////////////////////////////////////////////////////////////////////////
// 任务描述                                                         		 //
// 在和上一任务同一目录下面创建一个task0002_2.html文件，					//
// 在js目录中创建task0002_2.js，
// 并在其中编码，实现一个倒计时功能。 										//
// ////////////////////////////////////////////////////////////////////////////////////
// 界面首先有一个文本输入框，允许按照特定的格式YYYY-MM-DD输入年月日；       ///////////
// 输入框旁有一个按钮，点击按钮后，计算当前距离输入的日期的00:00:00有多少时间差    //
// 在页面中显示，距离YYYY年MM月DD日还有XX天XX小时XX分XX秒                          //
// 每一秒钟更新倒计时上显示的数                                                   //
// 如果时差为0，则倒计时停止                                                     //
////////////////////////////////////////////////////////////////////////////////////

///////////////
///有待完善  //
///代码结构  //
///定时器时间// 
///程序测试  //
///////////////
function countDown() {
	// 用正则表达式判断输入的时间格式是否正确
	var date = $('#time').value;
	var pattern =  /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|(3[0-1]))$/g;
	if (!pattern.test(date)) {
		var node = document.createElement('span');
		node.innerHTML = '请检查输入格式';
		if (!$('.show span')) {
			$('.show').innerHTML = '';
			$('.show').appendChild(node);
		}
	}else{
		var currentTime = new Date();
		var time = $('#time').value;
		var timearr = time.split('-');
		var year = timearr[0];
		var month = timearr[1];
		var day = timearr[2];
		var futureTime = new Date(time.replace("-", "/"));
		var countTime = futureTime - currentTime;//获得毫秒数
		console.log(countTime);
		var text = document.createElement('p');
		if(countTime<0){
			text.className = 'pastday';
			text.innerHTML = '请输入未来的某一天';
			if ($('.show span') | $('.show p') ) {
				$('.show').innerHTML = '';
				$('.show').appendChild(text);
			}else{
				$('.show').innerHTML = '';
				$('.show').appendChild(text);
			}
		}else{
			if (countTime === 0) {
				clearInterval(countDown);
			}else{
				// var countDays = parseInt(countTime/1000/3600/24);
				// var countHours = parseInt((countTime/1000/3600)%24);
				// var countMinutes = parseInt((countTime/1000/60)%60);
				// var countSeconds = parseInt((countTime/1000)%60);
				setInterval(countDown,900);
				var countDays = Math.floor(countTime/1000/3600/24);
				var countHours = Math.floor((countTime/1000/3600)%24);
				var countMinutes = Math.floor((countTime/1000/60)%60);
				var countSeconds = Math.floor((countTime/1000)%60);
				text.innerHTML = '距离'+year+'年'+month+'月'+day+'日还有'+countDays+'天'+countHours+'小时'+countMinutes+'分'+countSeconds+'秒';
				if ($('.show span') | $('.show p') ) {
					$('.show').innerHTML = '';
					$('.show').appendChild(text);
				}else{
					$('.show').innerHTML = '';
					$('.show').appendChild(text);
				}
			}
		}
	}
	// 计算倒计时时间
	//定时器

}

$.click($('button'),countDown);
