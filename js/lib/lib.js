// Custom library
var lib = lib || {};

// http://www.cnblogs.com/yuanke/p/5039699.html
lib.loadScript = function(url, name, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callback || function() {};
  document.body.appendChild(script);
  console.log('Load js: {url: "' + url + '", name: "' + name + '"}');
  return script;
}

// Register library here
lib.list = [
  "cookie",
  "ajax",
  "snackbar",
  "Jint",
  "renderer"
];

for(var index in lib.list) {
  lib.loadScript("js/lib/" + lib.list[index] + ".js", lib.list[index]);
}