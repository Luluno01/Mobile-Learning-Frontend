// Snackbar
if(window.NativeInterface) {
  // TODO
} else {
  lib.snackbar = function(content) {
    ML.addNotification({
      message: content
    });
  }
}