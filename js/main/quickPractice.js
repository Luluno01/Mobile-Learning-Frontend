//Render quick practice page
ML.renderer =  ML.renderer || {};

ML.renderer.quickPractice = function (questions) {
  var html = '';
  for (var question of questions){
    html += `<div class="swiper-slide" style="width: 360px;">${lib.renderer.oneChoiceQuestion(question, question.id)}</div>`
  }
  $$('#oneChoiceQuestionContainer').html(html);

}

ML.handler = ML.handler || {};

ML.handler.quickPractice = function () {
  lib.get(API_URL.ONE_CHOICE_QUESTION.API.ID_LIST, {}, function (data) {
    data = JSON.parse(data);
    ML.questionsId = lib.random.sample(data, 10);
    ML.questions = [];
    for(var questionId of ML.questionsId){
      lib.get(API_URL.ONE_CHOICE_QUESTION.API.FULL + questionId + '/', {}, function (data) {
        data = JSON.parse(data);
        ML.questions.push(data);
        if(ML.questions.length == ML.questionsId.length){
          ML.renderer.quickPractice(ML.questions);
        }
      }, console.error)
    }
  }, console.error);

}

ML.namespaces = ML.namespaces || {};

ML.namespaces.quickPractice = {
  onShow: ML.handler.quickPractice,
  onDestroy: function () {
  }
}