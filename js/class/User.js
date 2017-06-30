// Class User

class User {
  constructor() {
    this.loginState = false;
    this.username = " ";
    this.usermail = " ";

    this.nickname = null;

    this.remember = false;
  }

  setState(state) {
    if(this.loginState && !state) { // Logged out
      // TODO: Avatar
      $$("#userview-name").html(STRING.STRING1.USER_NAME_GUEST);
      $$("#userview-email").html(STRING.STRING1.BLANK);
      document.dispatchEvent(User.logoutEvent);
    } else if(!this.loginState && state) { // Logged in
      // TODO: Avatar
      $$("#userview-name").html(this.username);
      $$("#userview-email").html(this.usermail);
      document.dispatchEvent(User.loginEvent);
    }
    this.loginState = state || false;
  }
  
  getLoginState() {
    return this.loginState;
  }

  checkLoginState(message) {
    if(this.loginState) {
      lib.snackbar(message || STRING.TIPS.TIPS_ALREADY_LOGGED_IN);
    }
    return this.loginState;
  }

  setRemember(remember) {
    this.remember = remember || false;
  }

  getRemember() {
    return this.remember;
  }

  static Handler() { // Inner class
    return class Handler {
      static networkError(xhr, status) {
        console.log("[Error] Network or server error.");
        lib.snackbar(STRING.TIPS.TIPS_NET_OR_SERVER_ERROR);
      }

      static loginError(xhr, status) {
        switch(status) {
          case 400: {
            console.log("[Login Error] Username or password incorrect or session expired.");
            lib.snackbar(STRING.TIPS.TIPS_USERNAME_OR_PASSWORD_INCORRECT_OR_SESSION_EXPIRED);
            break;
          }
          case 405: {
            console.log("[Login Error] Already logged in.");
            lib.snackbar(STRING.TIPS.TIPS_ALREADY_LOGGED_IN);
            User.user.setState(true);
            break;
          }
          default:
        }
      }

      static loginSuccess() {
        console.log("[Login] Logged in.");
        lib.snackbar(STRING.TIPS.TIPS_LOGGED_IN);
        User.user.setState(true);
      }

      static logoutSuccess() {
        console.log("[Logout] Logged out.");
        lib.snackbar(STRING.TIPS.TIPS_LOGGED_OUT);
        User.user.setState(false);
      }

      static logoutError(xhr, status) {
        console.log("[Logout Error] State code: " + status);
        switch(status) {
          case 401: {
            console.log("[Logout Error] Login required.");
            lib.snackbar(STRING.TIPS.TIPS_LOGOUT_ERROR_401);
            User.user.setState(false);
            break;
          }
          default: {
            console.log("[Logout Error] Unknown error.");
            lib.snackbar(STRING.TIPS.TIPS_UNKNOWN_ERROR);
          }
        }
      }

      static default() {

      }
    }
  }

  static sha512(content) {
    return CryptoJS.SHA512(content).toString();
  }

  static getDynamicSaltedSaltedPassword(password, staticSalt, dynamicSalt) {
    return User.sha512(User.sha512(password + staticSalt) + dynamicSalt);
  }

  getSalt() {
    if(!this.username || this.username == "") {
      return;
    }
    var res = lib.post(API_URL.USER.API.LOGIN, {

    })
  }

  getFormData() {
    return {
      username: $$("#login-username").val(),
      password: $$("#login-password").val(),
      remember: false // For now, false
    };
  }

  login(from) {
    User.from = from;
    if(this.loginState) {
      console.log("[Login Error] Already logged in.");
      lib.snackbar(STRING.TIPS.TIPS_ALREADY_LOGGED_IN);
      return;
    }
    var data = this.getFormData();
    this.username = data.username;
    this.usermail = " ";
    this.remember = data.remember;
    this.login1(data);
  }

  login1(data) { // Get salts
    var res = lib.post(API_URL.USER.API.LOGIN, {
      username: data.username
    }, this._login2(data), User.Handler().loginError);
  }

  _login2(data) {
    var _this = this;
    return function(responseText) {
      var json = JSON.parse(responseText);
      _this.login2(data, json.staticSalt, json.dynamicSalt);
    }
  }

  login2(data, staticSalt, dynamicSalt) {
    var Handler = User.Handler();
    var password = data.password;
    if(!password || password == "" || !User.user.username || User.user.username == "") {
      console.log("[Login Error] Invalid password or username.");
      lib.snackbar(STRING.TIPS.TIPS_INVALID_USERNAME_OR_PASSWORD);
      return;
    }
    var _this = User.user;
    function sendLogin2Request() {
      return lib.post(API_URL.USER.API.LOGIN, {
          username: _this.username,
          password: User.getDynamicSaltedSaltedPassword(password, staticSalt, dynamicSalt),
          remember: _this.remember || false
      }, Handler.loginSuccess, Handler.loginError);
    }
    var csrftoken = lib.getCookie('csrftoken');
    if(!csrftoken || csrftoken == "") {
      var res = lib.get(API_URL.USER.API.LOGIN, sendLogin2Request, Handler.networkError);
    } else {
      console.log("[Server] " + sendLogin2Request().responseText);
    }
  }

  logout() {
    var Handler = User.Handler();
    lib.post(API_URL.USER.API.LOGOUT, {}, Handler.logoutSuccess, Handler.logoutError);
  }
};

User.user = User.user || new User();
User.loginEvent = document.createEvent("HTMLEvents");
User.loginEvent.initEvent("loggedIn", false, false);
User.logoutEvent = document.createEvent("HTMLEvents");
User.logoutEvent.initEvent("loggedOut", false, false);