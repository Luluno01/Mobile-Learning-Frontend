// Config
const BASE_URL = "https://sv.0x00000000.ml/";
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
    },
    ONE_CHOICE_QUESTION: {
      BASE: "one-choice-question/",
      API: {
        LIST: "list/",
        ID_LIST: "id-list/",
        SIMPLE: "simple/",
        FULL: "full/",
        VALIDATE: "validate/"
      }
    }
  };
  var BASE_URL = "https://sv.0x00000000.ml/";
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

const PAGES = {
  LOGIN: "subPages/login.html",
  SIGN_UP: "subPages/signUp.html"
};

const GRADE = {
  '小学': 'primary',
  '初中': 'junior',
  '高中': 'senior',
  '本科': 'undergraduate',
  '研究生': 'postgraduate'

};
const SUBJECT = {
  '语文': 'Chinese',
  '数学': 'Math',
  '英语': 'English',
  '物理': 'Physics',
  '化学': 'Chemistry',
  '生物': 'Biology',
  '政治': 'Politics',
  '历史': 'History',
  '地理': 'Geography',
  '高等数学': 'AdvancedMathematics',
  '数据库系统概论': 'Database',
  '马克思主义基本原理概论': 'BasicPrincipleOfMarxism'

}

const QUESTION_TYPE = (function() {
  var _questionType = ['OneChoiceQuestion', 'MultipleChoiceQuestion', 'TrueOrFalseQuestion', 'FillInQuestion', 'SubjectiveQuestion'];
  var questionType = {};
  _questionType.forEach(function(typeName, index) {
    questionType[typeName] = index;
  });
  return questionType;
})();