ML.myPages = ML.myPages || {};
ML.compilePage = function(name, url, context) {
  if(!url) return;
  $$.get(url, null, function(data) {
    ML.myPages[name] = (Template7.compile(data))(context || {});
  });
  $$.ajax({
    url: url,
    async: false,
    success: function(data) {
      ML.myPages[name] = (Template7.compile(data))(context || {});
    }
  });
}
