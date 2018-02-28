// Custom library
var lib = lib || {};

// http://www.cnblogs.com/yuanke/p/5039699.html
lib.loadScript = function(url, name) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
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
  "renderer",
  "recordDelete"
];

for(var index in lib.list) {
  lib.loadScript("js/lib/" + lib.list[index] + ".js", lib.list[index]);
}