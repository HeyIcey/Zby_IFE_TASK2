// function sum(id) {
//     return document.getElementById(id);
// }

// function add(num1, num2) {
//     var sum =  parseInt(num1) + parseInt(num2);
//     return sum;
// }

// function renderResult(res) {
//     sum("result").innerHTML = res;
// }

// function addEventHandle() {
//     var num1 = parseInt(sum('number1').value);
//     var num2 = parseInt(sum('number2').value);
//     var result = add(num1, num2);
//     renderResult(result);
// }

// function initEvent() {
//     sum("addbtn").addEventListener("click", addEventHandle, false);
// }

// initEvent();

// 判断arr是否为一个数组，返回一个bool值
// 法一
function isArray(arr) {
    // your implement
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        console.log(true);
    } else {
        console.log(false);
    };
}
// 法二
// function isArray(arr) {
//     console.log(arr instanceof Array);
// }
// 判断fn是否为一个函数，返回一个bool值
// 法一
function isFunction(fn) {
    // your implement
    if (Object.prototype.toString.call(fn) === '[object Function]') {
        console.log(true);
    } else {
        console.log(false);
    }
}
// 法二
// function isFunction(fn) {
//     // your implement
//     console.log(fn instanceof Function);
// }
// arr = new Array();
// fn = new Function();
// isArray(arr);
// isFunction(fn);
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    switch (Object.prototype.toString.call(src)) {
        case '[object Number]':
            var tar = src;
            break;
        case '[object String]':
            var tar = src;
            break;
        case '[object Boolean]':
            var tar = src;
            break;
        case '[object Date]':
            var tar = new Date(src);
            break;
        case '[object Array]':
            tar = new Array();
            for (var i = 0; i < src.length; i++) {
                tar[i] = cloneObject(src[i]);
            }
            break;
        case '[object Object]':
            tar = new Object();
            for (var key in src) {
                tar[key] = cloneObject(src[key]);
            }
            break;
    }
    return tar;
}

// 测试用例：
// var srcObj = {
//     a: 1,
//     b: {
//         b1: ["hello", "hi"],
//         b2: "JavaScript"
//     }
// };
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a); // 1
// console.log(tarObj.b.b1[0]); // "hello"


// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1); //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
            }
        }
    }
    return arr;
}

// 使用示例
// var a = [1, 3, 5, 7, 5, 3];
// var b = uniqArray(a);
// console.log(b); // [1, 3, 5, 7]
// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    while (str[0] === " " | str[0] === "	") {
        str = str.substr(1);
    }
    var len = str.length - 1;
    while (str[len] === " " | str[len] === "	") {
        str = str.substr(0, len - 1);
        len = str.length - 1;
    }
    return str;
}
var sim = ' 		 ha sd 	 a a   	';
sim = simpleTrim(sim);
console.log(sim);
// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

// // 使用示例
// var str = '   hi!  ';
// str = trim(str);
// console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for (var i = 0; i < arr.length; i++) {
        var index = i;
        fn(arr[i], index);
    }
}

// 其中fn函数可以接受两个参数：item和index

// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];

// function output(item) {
//     console.log(item);
// }
// each(arr, output); // java, c, php, html
// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];

// function output(item, index) {
//     console.log(index + ': ' + item)
// }
// each(arr, output); // 0:java, 1:c, 2:php, 3:html
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var num = 0;
    for (var key in obj) {
        num++;
    }
    return num;
}

// // 使用示例
// var obj = {
//     a: 1,
//     b: 2,
//     c: {
//         c1: 3,
//         c2: 4
//     }
// };
// console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    return (/(^[a-z0-9-_\.]+)@([a-z0-9-_]+)/i).test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    return (/(^13)|(^18)|(^15)|(^14)|(^17)[0-9]{9}/g).test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    var eleclass = element.className;
    if (eleclass.length === 0) {
        element.className = "newClassName";
    } else {
        element.className += " " + "newClassName";
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    element.className = "";
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    // if(element.parentNode === siblingNode.parentNode){
    // 	return true;
    // }else{
    // 	return false;
    // }
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    obj = new Object;
    var current = element.offsetParent;
    var abtop = element.offsetTop;
    var ableft = element.offsetLeft;
    while (current !== null) {
        abtop += current.offsetTop;
        ableft += current.offsetLeft;
        current = current.offsetParent;
    }
    var scrtop = element.scrollTop;
    var scrleft = element.scrollLeft;
    obj.x = abtop - scrtop;
    obj.y = ableft - scrleft;
    return obj;
}
// 接下来挑战一个mini $，它和之前的$是不兼容的，它应该是document.querySelector的功能子集，在不直接使用document.querySelector的情况下，在你的util.js中完成以下任务：
// 实现一个简单的Query
function $(selector) {
    return document.querySelector(selector.substring(1));
}

function $(selector) {
    var ele = document;
    var sel = selector.replace(/\s+/, ' ').split(' ');
    var len = sel.length;
    for (var i = 0; i < len; i++) {
        switch (sel[i][0]) {
            case '#':
                ele = ele.getElementById(sel[i].substring(1));
                break;
            case '.':
                ele = ele.getElementsByClassName(sel[i].substring(1));
                break;
            case '[':
                var valueLoc = sel[i].indexOf('=');

                if (valueLoc !== -1) {
                    var key = sel[i].substring(1, valueLoc);
                    var value = sel[i].substring(valueLoc + 1, sel[i].length - 1);
                    arr = ele.getElementsByTagName('*');
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i][key] = value) {
                            ele = arr[i];
                            break;
                        }
                    }
                } else {
                    arr = ele.getElementsByTagName('*');
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i][key]) {
                            ele = arr[i];
                            break;
                        }
                    }
                };
            default:
                ele = ele.getElementsByTagName(sel[i])[0];
                break;
        }
    }

    return ele;
}

// /**
//  * $函数的依赖函数，选择器函数
//  * @param   {string} selector CSS方式的选择器
//  * @param   {object} root     可选参数，selector的父对象。不存在时，为document
//  * @returns {Array}  返回获取到的节点数组，需要注意的是使用ID选择器返的也是数组
//  */
// function VQuery(selector, root) {
//     //用来保存选择的元素
//     var elements = []; //保存结果节点数组
//     var allChildren = null; //用来保存获取到的临时节点数组
//     root = root || document; //若没有给root，赋值document
//     switch (selector.charAt(0)) {
//     case "#": //id选择器
//         elements.push(root.getElementById(selector.substring(1)));
//         break;
//     case ".": //class选择器
//         if (root.getElementsByClassName) { //标准
//             elements = root.getElementsByClassName(selector.substring(1));
//         } else { //兼容低版本浏览器
//             var reg = new RegExp("\\b" + selector.substring(1) + "\\b");
//             allChildren = root.getElementsByTagName("*");
//             for (var i = 0, len = allChildren.length; i < len; i++) {
//                 if (reg.test(allChildren[i].className)) {
//                     elements.push(allChildren[i]);
//                 }
//             }
//         }
//         break;
//     case "[": //属性选择器

//         if (selector.indexOf("=") === -1) {
//         //只有属性没有值的情况
//             allChildren = root.getElementsByTagName("*");
//             for (var i = 0, len = allChildren.length; i < len; i++) {
//                 if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
//                     elements.push(allChildren[i]);
//                 }
//             }
//         } else {
//         //既有属性又有值的情况
//             var index = selector.indexOf("="); //缓存=出现的索引位置。
//             allChildren = root.getElementsByTagName("*");
//             for (var i = 0, len = allChildren.length; i < len; i++) {
//                 if (allChildren[i].getAttribute(selector.slice(1, index)) === selector.slice(index + 1, -1)) {
//                     elements.push(allChildren[i]);
//                 }
//             }
//         }
//         break;
//     default: //tagName
//         elements = root.getElementsByTagName(selector);
//     }
//     return elements
// }
// /**
//  * 模仿jQuery的迷你$选择符。
//  * @param   {string} selector CSS方式的选择器，支持简单的后代选择器（只支持一级）
//  * @returns {object} 返回获取到的第一个节点对象，后代选择器时，返回第一个对象中的第一个符合条件的对象
//  */
// function $(selector) {
// //这里trim处理输入时两端出现空格的情况，支持ie9+。但是这个函数实现起来也特别简单，可以参考我task0002（-）前面有trim函数的实现。稍微修改一下，这样就没兼容性问题了。
//     if (selector == document) {
//         return document;
//     }
//     selector = selector.trim();
//     //存在空格时，使用后代选择器
//     if (selector.indexOf(" ") !== -1) {
//         var selectorArr = selector.split(/\s+/); //分割成数组，第一项为parent，第二项为chlid。
//         //这里没去考虑特别多的情况了，只是简单的把参数传入。
//         return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
//     } else { //普通情况,只返回获取到的第一个对象
//         return VQuery(selector,document)[0];
//     }
// }
// 可以通过id获取DOM对象，通过#标示，例如
// $("#adom"); // 返回id为adom的DOM对象

// // 可以通过tagName获取DOM对象，例如
// $("a"); // 返回第一个<a>对象

// // 可以通过样式名称获取DOM对象，例如
// $(".classa"); // 返回第一个样式定义包含classa的对象

// // 可以通过attribute匹配获取DOM对象，例如
// $("[data-log]"); // 返回第一个包含属性data-log的对象

// $("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// // 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

// 我们来继续用封装自己的小jQuery库来实现我们对于JavaScript事件的学习
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if (element.addEventListener) { //标准
        element.addEventListener(event, listener);
    } else if (element.attactEvent) { //低版本ie
        element.attactEvent('on' + event, listener);
    } else { //都不行
        element['on' + event] = listener;
    }
}

// 例如：
// function clicklistener(event) {
//     ...
// }
// addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) { //标准
        element.removeEventListener(event, listener);
    } else if (element.detachEvent) { //低版本ie
        element.detachEvent('on' + event, listener);
    } else { //都不行
        element['on' + event] = null;
    }
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element, 'click', listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    addEvent(element, 'keydown', function(e) {
        var e = e | window.event;
        if (e.keyCode === 13) {
            listener.call(element, e);
        }
    });
}

// 接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法

// addEvent(element, event, listener) -> $.on(element, event, listener);
// removeEvent(element, event, listener) -> $.un(element, event, listener);
// addClickEvent(element, listener) -> $.click(element, listener);
// addEnterEvent(element, listener) -> $.enter(element, listener);
$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;

function clickListener(event) {
    console.log(event);
}

// $.click($('#item1'), clickListener);
// $.click($('#item2'), clickListener);
// $.click($('#item3'), clickListener);
// each($('#list').getElementsByTagName('li'),function(li){
// 	addClickEvent(li,clickListener);
// });

// function renderList() {
//     $('#list').innerHTML = '<li>new list</li>';
// }

// function init() {
//     each($('#list').getElementsByTagName('li'), function(li) {
//         $.click(li, clickListener);
//     });

//     $.click($('#btn'), renderList);
// }
// init();


/**
 * 事件代理
 * @param   {HTMLElement}   element   需要进行事件代理的父元素。
 * @param   {string}   tag       需要触发事件的标签名
 * @param   {string}   eventName 触发的事件类型
 * @param   {function} listener  事件执行的函数
 * @returns {[[Type]]} [[Description]]
 */
// function delegateEvent(element, tag, eventName, listener) {
//     // your implement
//     	addEvent(element, eventName, function (ev) {
//         var oEvent = ev || event; //兼容处理
//         var target = oEvent.target || oEvent.srcElement; //兼容处理
//         if (target.tagName.toLocaleLowerCase() === tag) {
//             listener.call(target, oEvent); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
//         }
//     });
// }

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    //     // your implement
    addEvent(element, eventName, function(e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.tagName.toLocaleLowerCase() === tag) {
            listener.call(target, e); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
        }
    });
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
// $.delegate($("#list"), "li", "click", clickListener);

// 估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：

// $.on(selector, event, listener) {
//     // your implement
// }

// $.click(selector, listener) {
//     // your implement
// }

// $.un(selector, event, listener) {
//     // your implement
// }

// $.delegate(selector, tag, event, listener) {
//     // your implement
// }

// // 使用示例：
// $.click("[data-log]", logListener);
// $.delegate('#list', "li", "click", liClicker);
// 

//和上面的函数一样，原来第一个参数是传入获取到的父HTMLElement对象，现在直接传入选择器名称就行
// $.delegate = function (selector, tag, event, listener) {
// //这里的`$(selector)`，是用的自己封装的选择器函数，愿意的话可以换成标准支持的`document.querySelector()`
//     return delegateEvent($(selector), tag, event, listener);
// };
// // 使用示例：
// $.delegate('#list', "li", "click", liClicker);

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
    // if (navigator.appName === "Microsoft Internet Explorer") {
    // 	console.log('1');
    // 	return 1;
    // }else{
    // 	console.log('-1');
    // 	return -1;
    // }
    console.log(/msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp['\x241']) : -1);
    return /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp['\x241']) : -1;
}
isIE();

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = cookieName + '=' + cookieValue + ((expiredays === null) ? '' : ';expiredays=' + exdate.toGMTString());
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(cookieName + '=');
        if (c_start !== -1) {
            c_start = c_start + cookieName.length + 1;
            c_end = document.cookie.indexOf(';', c_start);
            if (c_end !== -1) {
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
    }
    return "";
}

// 学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：

function ajax(url, options) {
    // your implement
    var xhr;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xhr = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (options.date) {
        dataarr = new Array();
        for (var item in options.date) {
            dataarr.push(item + '=' + encodeURI(options.data[item]));
        }
        var data = dataarr.join('&');
    }
    if (!options.type) {
        options.type = 'GET';
    }
    options.type = options.type.toUpperCase();
    if (options.type === 'GET') {
        var myURL = '';
        if (options.data) {
            myURL = url + '?' + data;
        } else {
            myURL = url;
        }
        xhr.open('GET', myURL, true);
        xhr.send();
    } else if (options.type === 'POST') {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xhr.responseText, xhr.responseXML);
                }
            } else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    };
}

// 使用示例：
// ajax(
//     'http://localhost:8080/server/ajaxtest', {
//         data: {
//             name: 'simon',
//             password: '123456'
//         },
//         onsuccess: function(responseText, xhr) {
//             console.log(responseText);
//         }
//     }
// );
