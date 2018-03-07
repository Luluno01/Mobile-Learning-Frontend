//Render quick practice page
ML.renderer =  ML.renderer || {};

ML.renderer.quickPractice = function () {
  var html = '';
  for (var question of ML.questions){
    html += `<div class="swiper-slide" style="width: 360px;">${lib.renderer.oneChoiceQuestion(question, question.id)}</div>`
  }
/*  $$('#oneChoiceQuestionContainer .swiper-wrapper').html(html);*/
  return {
    TITLE_QUICK_PRACTICE: TITLE.TITLE_QUICK_PRACTICE,
    QUICK_PRACTICE_QUESTIONS: html
  };
}

ML.handler = ML.handler || {};

ML.handler.quickPractice = function (callback) {
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
          ML.myPages.pages.quickPractice.context = ML.renderer.quickPractice();
          if(typeof callback == 'function') callback();
        }
      }, console.error)
    }
  }, console.error);

}

ML.namespaces = ML.namespaces || {};

ML.namespaces.quickPractice = {
  renderer: ML.handler.quickPractice,
  onShow: function () {
    ML.swipers = ML.swipers || {};
    // ML.swipers.quickPractice = ML.swiper('#oneChoiceQuestionContainer', {
    //   speed: 400,
    //   paginationHide: false,
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev'
    // });
    ML.swipers.quickPractice = $$('#oneChoiceQuestionContainer')[0].swiper;
    $$('#oneChoiceQuestionContainer li').on('click', function() {
      let nextIndex = ML.swipers.quickPractice.activeIndex + 1;
      setTimeout(function() {
        // ML.swipers.quickPractice.slideNext();
        ML.swipers.quickPractice.slideTo(nextIndex);
      }, 700);
    });
  },
  onDestroy: function () {
  }
}