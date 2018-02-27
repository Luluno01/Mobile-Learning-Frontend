//Render one choice question
lib.renderer =  lib.renderer || {};

lib.renderer.oneChoiceQuestion = function (question, id) {
  var html = `<div class="content-block">
              <p class="">${question.question_text}</p>
              <p class="color-gray">${question.source}</p>
            </div>
            <div class="list-block">
              <ul>`;
  for (var choice of question.choices){
    html += `<li>
              <label class="label-radio item-content">
                  <!--   by default -->
                  <input type="radio" name="${id}" value="${choice.id}">
                  <div class="item-media">
                    <i class="icon icon-form-radio"></i>
                  </div>
                  <div class="item-inner">
                      <div class="item-title">${choice.choice_text}</div>
                  </div>
              </label>
            </li>`;
}
  html += '</ul></div>';
  return html;
}

//render multiple choice quetion

lib.renderer.multipleChoiceQuestion = function (question, id) {
  var html = `<div class="content-block">
              <p class="">${question.question_text}</p>
              <p class="color-gray">${question.source}</p>
            </div>
            <div class="list-block">
              <ul>`;

  for (var choice of question.choices){
    html += `<li>
                  <label class="label-checkbox item-content">
                    <!-- Checked by default -->
                    <input type="checkbox" name="${id}" value="${choice.id}" >
                    <div class="item-media">
                      <i class="icon icon-form-checkbox"></i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title">${choice.choice_text}</div>
                    </div>
                  </label>
                </li>`;
  }
  html += '</ul></div>';
  return html;
}

//render true or false quetion

lib.renderer.trueOrFalseQuestion = function (question, id) {
  var html = `<div class="content-block">
              <p class="">${question.question_text}</p>
              <p class="color-gray">${question.source}</p>
            </div>
            <div class="list-block">
              <ul>
               <li>
                  <label class="label-radio item-content">
                    <!--   by default -->
                    <input type="radio" name="${id}" value="True">
                    <div class="item-media">
                      <i class="icon icon-form-radio"></i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title">${OPTIONSTRING.TRUE}</div>
                    </div>
                  </label>
                </li>
                <!-- Another radio input -->
               <li>
                  <label class="label-radio item-content">
                    <input type="radio" name="${id}" value="False">
                    <div class="item-media">
                      <i class="icon icon-form-radio"></i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title">${OPTIONSTRING.FALSE}</div>
                    </div>
                  </label>
                </li>
              </ul>
             </div>`;
  return html;
}

//render fill-in-the-blanks question

lib.renderer.fillInTheBlanksQuestion = function (question, id) {
  var html = `<div class="content-block">
              <p class="">${question.question_text}</p>
              <p class="color-gray">${question.source}</p>
            </div>
            <div class="list-block">
              <ul>`;
  for (var i = 1; i <= question.answer.length; i++) {
    html += `<li>
      <div class="item-content">
        <div class="item-inner">
          <div class="item-input">
            <input type="text" placeholder="${OPTIONSTRING.YOURANSWER + i}">
          </div>
        </div>
      </div>
    </li>`;
  }
  html += '</ul></div>';
  return html;
}

//render subjective question

lib.renderer.subjectiveQuestion = function (question, id) {
  var html = `<div class="content-block">
              <p class="">${question.question_text}</p>
              <p class="color-gray">${question.source}</p>
            </div>`;

  return html;
}