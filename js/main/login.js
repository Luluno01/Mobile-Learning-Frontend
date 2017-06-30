document.addEventListener("loggedIn", function() {
  if(mainView.url == "subPages/login.html") mainView.router.back();
});