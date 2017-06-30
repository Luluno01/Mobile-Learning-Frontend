// Cookie operation

lib.setCookie = function(c_name, value, expiredays) { // Not my code; src: http://www.w3school.com.cn/js/js_cookies.asp
  var exdate=new Date()
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) +
  ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

lib.getCookie = function(name) { //Not my code
  var arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr = document.cookie.match(reg)) return unescape(arr[2]);
  else return null;
};