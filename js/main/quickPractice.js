//Render quick practice page
ML.renderers =  ML.renderers || {};

ML.renderers.oneChoiceQuestion = function (questions) {
  var html = '';
  for (var question of questions){
    html += `<div class="swiper-slide" style="width: 360px;">${lib.renderer.oneChoiceQuestion(question, question.id)}</div>`
  }

  $$('#oneChoiceQuestionContainer').html(html);

}