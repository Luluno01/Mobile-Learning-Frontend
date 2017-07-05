// Interface/Shortcut
var Jint = Jint || {};
Jint.toggleSideNav = function() {
  if($$("body").hasClass("with-panel-left-cover")) {
    ML.closePanel();
    console.log("Panel closed.");
  } else {
    ML.openPanel("left");
    console.log("Panel opened.");
  }
}