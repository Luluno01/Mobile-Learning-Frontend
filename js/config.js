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
  for(var api in list) {
    for(var subApi in list[api].API) {
      list[api].API[subApi] = list[api].BASE + list[api].API[subApi];
    }
  }
  return list;
})();