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
  console.log('Rua!');
  lib.get(API_URL.ONE_CHOICE_QUESTION.API.ID_LIST, {}, console.log, console.error);

}

ML.namespaces = ML.namespaces || {};

ML.namespaces.quickPractice = {
  onShow: ML.handler.quickPractice,
  onDestroy: function () {
  }
}