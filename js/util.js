// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        console.log(true);
    } else {
        console.log(false);
    };
}
// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if (Object.prototype.toString.call(fn) === '[object Function]') {
        console.log(true);
    } else {
        console.log(false);
    }
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
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
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var result = [];
    for(var i=0; i<arr.length; i++){
    	if (result.indexOf(arr[i]) === -1) {
    		result.push(arr[i]);
    	}
    }
    return result;
}
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for (var i = 0; i < arr.length; i++) {
        var index = i;
        fn(arr[i], index);
    }
}
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var num = 0;
    for (var key in obj) {
        num++;
    }
    return num;
}
// 判断是否为邮箱地址
function isEmail(emailStr) {
    return (/(^[a-z0-9-_\.]+)@([a-z0-9-_]+)/i).test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return (/(^13)|(^18)|(^15)|(^14)|(^17)[0-9]{9}/g).test(phone);
}
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var eleclass = element.className;
    if (eleclass.length === 0) {
        element.className = "newClassName";
    } else {
        element.className += " " + "newClassName";
    }
}
// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.className = "";
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
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
    return document.querySelector(selector);
}
// function $(selector) {
//     var ele = document;
//     var sel = selector.replace(/\s+/, ' ').split(' ');
//     var len = sel.length;
//     for (var i = 0; i < len; i++) {
//         switch (sel[i][0]) {
//             case '#':
//                 ele = ele.getElementById(sel[i].substring(1));
//                 break;
//             case '.':
//                 ele = ele.getElementsByClassName(sel[i].substring(1));
//                 break;
//             case '[':
//                 var valueLoc = sel[i].indexOf('=');

//                 if (valueLoc !== -1) {
//                     var key = sel[i].substring(1, valueLoc);
//                     var value = sel[i].substring(valueLoc + 1, sel[i].length - 1);
//                     arr = ele.getElementsByTagName('*');
//                     for (var i = 0; i < arr.length; i++) {
//                         if (arr[i][key] = value) {
//                             ele = arr[i];
//                             break;
//                         }
//                     }
//                 } else {
//                     arr = ele.getElementsByTagName('*');
//                     for (var i = 0; i < arr.length; i++) {
//                         if (arr[i][key]) {
//                             ele = arr[i];
//                             break;
//                         }
//                     }
//                 };
//             default:
//                 ele = ele.getElementsByTagName(sel[i])[0];
//                 break;
//         }
//     }

//     return ele;
// }


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
function addFocus(element,listener){
	addEvent(element,'focus',listener);
}
function addBlur(element,listener){
	addEvent(element,'blur',listener);
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

$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;
$.delegate = delegateEvent;
$.focus = addFocus;
$.blur = addBlur;
function isIE() { 
	return /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp['\x241']) : -1;
}

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