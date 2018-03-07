//Render quick practice page
ML.renderer =  ML.renderer || {};

ML.renderer.quickPractice = function (questions) {
  var html = '';
  for (var question of questions){
    html += `<div class="swiper-slide" style="width: 360px;">${lib.renderer.oneChoiceQuestion(question, question.id)}</div>`
  }
  $$('#oneChoiceQuestionContainer .swiper-wrapper').html(html);
  ML.swipers = ML.swipers || {};
  ML.swipers.quickPractice = $$('#oneChoiceQuestionContainer')[0].swiper;
  $$('#oneChoiceQuestionContainer li').on('click', function() {
    setTimeout(function() {
      ML.swipers.quickPractice.slideNext();
    }, 700);
  });
}

ML.handler = ML.handler || {};

ML.handler.quickPractice = function () {
  lib.get(API_URL.ONE_CHOICE_QUESTION.API.ID_LIST, {}, function (data) {
    data = JSON.parse(data);
    ML.questionsId = data;
    ML.questions = [];
    var questionsId = [];
    for(var category of ML.questionsId) {
      questionsId = questionsId.concat(category);
    }
    questionsId = lib.random.sample(questionsId, 10);
    for(var questionId of questionsId){
      lib.get(API_URL.ONE_CHOICE_QUESTION.API.FULL + questionId + '/', {}, function (data) {
        data = JSON.parse(data);
        ML.questions.push(data);
        if(ML.questions.length == questionsId.length){
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