var Lang = {};
Lang.language_event = document.createEvent("HTMLEvents");
Lang.language_event.initEvent("langapply", false, false);
Lang.applyLang = function() {
  if(STRING) {
    document.dispatchEvent(Lang.language_event);
    for(var section in STRING) {
      var key = Object.keys(STRING[section]);
      key.forEach(function(value) {
        $$("." + value).html(STRING[section][value]);
      });
    }
  }
}
document.addEventListener("langapply", function(e) {
  console.log("Language applyed for page: " + TITLE[document.title]);
}, false);
Lang.applyLang();
