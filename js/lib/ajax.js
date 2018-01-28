// Customize $$.ajax, auto append csrfmiddlewaretoken
lib.post = function(url, data, success, error) {
  return $$.ajax({
    url: url,
    method: 'POST',
    data: 'csrfmiddlewaretoken=' + lib.getCookie('csrftoken') + '&json=' + (typeof data == 'string' ? data : JSON.stringify(data)),
    success: success || function(){},
    error: error || function(){}
  });
};

// Customize $$.ajax
lib.get = function(url, data, success, error) {
  data = data || {};
  return $$.ajax({
    url: url,
    data: 'json=' + (typeof data == 'string' ? data : JSON.stringify(data)),
    method: 'GET',
    success: success || function(){},
    error: error || function(){}
  });
};

lib.getSync = function(url, data, success, error) {
  data = data || {};
  return $$.ajax({
    async: false,
    url: url,
    data: 'json=' + (typeof data == 'string' ? data : JSON.stringify(data)),
    method: 'GET',
    success: success || function(){},
    error: error || function(){}
  });
};

// Customize $$.ajax
lib.put = function(url, data, success, error) {
  return $$.ajax({
    url: url,
    data: "csrfmiddlewaretoken=" + lib.getCookie("csrftoken") + "&json=" + (typeof data == "string" ? data : JSON.stringify(data)),
    method: 'PUT',
    success: success || function() {},
    error: error || function() {}
  });
}

// Customize $$.ajax
lib.del = function(url, data, success, error) {
  return $$.ajax({
    url: url,
    data: "csrfmiddlewaretoken=" + lib.getCookie("csrftoken") + "&json=" + (typeof data == "string" ? data : JSON.stringify(data)),
    method: 'DELETE',
    success: success || function() {},
    error: error || function() {}
  });
}

// lib.createxmlHttpRequest = function() {  
//   if (window.ActiveXObject) {
//     return new ActiveXObject("Microsoft.XMLHTTP");
//   } else if (window.XMLHttpRequest) {
//     return new XMLHttpRequest();
//   }
// }
  
// lib.convertData = function(data) {
//   if(typeof data === 'object') {
//     var convertResult = "";
//     for (var c in data) {
//       convertResult+= c + "=" + data[c] + "&";
//     }
//     convertResult = convertResult.substring(0, convertResult.length - 1)
//     return convertResult;
//   } else {
//     return data;
//   }
// }

// lib.ajax = function() {
//   var ajaxData = {
//     type: arguments[0].type || "GET",
//     url: arguments[0].url || "",
//     async: arguments[0].async || "true",
//     data: arguments[0].data || null,
//     dataType: arguments[0].dataType || "text",
//     contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
//     beforeSend: arguments[0].beforeSend || function(){},
//     success: arguments[0].success || function(){},
//     error: arguments[0].error || function(){},
//   }
//   ajaxData.beforeSend();
//   var xhr = lib.createxmlHttpRequest();
//   xhr.responseType = ajaxData.dataType;
//   xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
//   xhr.setRequestHeader("Content-Type", ajaxData.contentType);
//   xhr.withCredentials = "true";
//   xhr.send(lib.convertData(ajaxData.data));
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         ajaxData.success(xhr.response);
//       } else { 
//         ajaxData.error();
//       }
//     }
//   }
//   return xhr;
// }