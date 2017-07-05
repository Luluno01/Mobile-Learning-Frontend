// Snackbar
if(window.NativeInterface) {
  // TODO
  lib.snackbar = function(content) {
    ML.addNotification({
      message: content
    });
  }
} else {
  lib.snackbar = function(content) {
    ML.addNotification({
      message: content
    });
  }
}