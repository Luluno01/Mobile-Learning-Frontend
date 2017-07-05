// Config
const BASE_URL = "https://test.this.com:8027/";
const API_URL = (function(){
  var list = {
    USER: {
      BASE: "user/",
      API: {
        REGISTER: "register/",
        LOGIN: "login/",
        RESET: "reset/",
        LOGOUT: "logout/"
      }
    }
  };
  var BASE_URL = "";
  if(window.NativeInterface) { // In crosswalk
    BASE_URL = "https://sv.0x00000000.ml/";
  }
  for(var api in list) {
    for(var subApi in list[api].API) {
      list[api].API[subApi] = BASE_URL + list[api].BASE + list[api].API[subApi];
    }
  }
  return list;
})();

PAGES = {
  LOGIN: "subPages/login.html",
  SIGN_UP: "subPages/signUp.html"
}