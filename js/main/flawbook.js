//render flaw book page in index page
ML.renderer =  ML.renderer || {};

ML.renderer.flawbook = function () {
  var html = '';
  for (var question of ML.questions){
    html += `<ul>
                        <li class="swipeout">
                          <a href="#" class="item-link">
                            <div class="swipeout-content item-content" style="">
                              <div class="item-inner">
                                <div class="item-title">错题一</div>
                                <div class="item-after">2017/05/03</div>
                              </div>
                            </div>
                          </a>
                          <div class="swipeout-actions-right"><a href="#" class="swipeout-delete" style="left: 0px;">Delete</a></div>
                        </li>
                      </ul>`
  }

  $$('#oneChoiceQuestionContainer .swiper-wrapper').html(html);
}

ML.handler = ML.handler || {};

ML.handler.flawbook = function () {
  /*lib.get(API_URL.FLAWBOOK.API.LIST, {}, function (data) {
    data = JSON.parse(data);
    ML.questionsId = data;

    for(var questionId of questionsId){
      lib.get(API_URL.ONE_CHOICE_QUESTION.API.FULL + questionId + '/', {}, function (data) {
        data = JSON.parse(data);
        ML.questions.push(data);
        if(ML.questions.length == questionsId.length){
          /!*ML.renderer.quickPractice(ML.questions);*!/

        }
      }, console.error)
    }
  }, console.error);*/

}