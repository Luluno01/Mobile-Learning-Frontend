// Initialize your app
var ML = new Framework7({
  modalTitle: STRING.STRING1.APP_NAME,
  pushState: true,
  onAjaxStart: function (xhr) {
    ML.showIndicator();
  },
  onAjaxComplete: function (xhr) {
    ML.hideIndicator();
  },
  material: true,
  swipePanel: "left",
  scrollTopOnNavbarClick: true,
  notificationHold: 2000,
  notificationCloseOnClick: true,
  notificationCloseButtonText: STRING.STRING1.UNDO,
  precompileTemplates: true, // Doesn't work?
  template7Pages: true,
  materialRippleElements: '.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, .floating-button, .clickable',
  swipePanelActiveArea: 20
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = ML.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});



// Callbacks to run specific code for specific pages, for example for About page:
ML.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
        console.log("rua");
    });
});

/*ML.scripts = ML.scripts || {};
ML.onPageInit('choiceQuestion', function() {
  if(! ('choiceQuestion' in ML.scripts)) {
    ML.scripts.choiceQuestion = lib.loadScript('js/choiceQuestion.js');
  }
  lib.renderer.choiceQuestion();
});*/

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

function initIndex(page) {
  // run createContentPage func after link was clicked
  if(window.Lang) Lang.applyLang();

  ML.searchbar = ML.searchbar('.searchbar', {
    searchList: '.list-block-search',
    searchIn: '.item-title'
  });

  var subjectCategory = {
    primary : ['语文', '数学', '英语'],
    junior : ['语文', '数学', '英语','物理', '化学', '生物','政治','历史','地理'],
    senior : ['语文', '数学', '英语','物理', '化学', '生物','政治','历史','地理'],
    undergraduate : ['高等数学','物理'],
    postgraduate : ['计算机','数据库系统概论','马克思主义基本原理概论']
  };
  ML.subjectPicker = ML.picker({
    input: '#picker-dependent',
    rotateEffect: true,
    formatValue: function (picker, values) {
      return values[0] + "\t\t" + values[1];
    },
    cols: [
      {
        textAlign: 'left',
        values: ['小学', '初中', '高中','本科','研究生'],
        onChange: function (picker, grade) {
          if(picker.cols[1].replaceValues){
            picker.cols[1].replaceValues(subjectCategory[GRADE[grade]]);
          }
        }
      },
      {
        values: subjectCategory.primary,
        width: 160,
      },

    ]
  });



  ML.swipers = ML.swipers || {};
  ML.swipers.index = ML.swiper('.index-swiper-container', {
    speed: 400,
    spaceBetween: 10,
    paginationHide: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
}
initIndex();
ML.onPageInit('index', initIndex);

$$(".sidenav-tooltips a").on("click", function() {
  ML.closePanel();
});

$$(".panel .userview").on("click", function() {
  if(User.user.getLoginState()) {
    // Open user detail info page
  } else {
    // Open login page
    mainView.loadPage(PAGES.LOGIN);
  }
  ML.closePanel();
});

ML.myPages = ML.myPages || new PageManager(mainView);
ML.myPages.contexts = {};

// Quick practice
ML.myPages.loadPage('quickPractice');

/*ML.onPageInit('quickPractice', function() {
  ML.handler.quickPractice();
});*/

Template7.data = {
  "page:about": {
    TITLE_ABOUT: TITLE.TITLE_ABOUT,
    ABOUT_DESC: STRING.STRING1.ABOUT_DESC,
    APP_INFO_TITLE: STRING.STRING1.APP_INFO_TITLE,
    APP_INFO_CONTENT: STRING.STRING1.APP_INFO_CONTENT,
    CREDIT_TITLE: STRING.STRING1.CREDIT_TITLE,
    CREDIT_CONTENT: STRING.STRING1.CREDIT_CONTENT
  },
  "page:login": {
    TITLE_LOGIN: TITLE.TITLE_LOGIN,
    LABEL_USER_NAME: STRING.STRING1.LABEL_USER_NAME,
    LABEL_PASSWORD: STRING.STRING1.LABEL_PASSWORD,
    LOGIN: STRING.FUNCTIONAL.LOGIN,
    CREATE_ACCOUNT: STRING.FUNCTIONAL.CREATE_ACCOUNT
  },
  "page:signUp": {
    TITLE_SIGN_UP: TITLE.TITLE_SIGN_UP,
    LABEL_USER_NAME: STRING.STRING1.LABEL_USER_NAME,
    LABEL_PASSWORD: STRING.STRING1.LABEL_PASSWORD,
    LABEL_PASSWORD_CONFIRM: STRING.STRING1.LABEL_PASSWORD_CONFIRM,
    SIGN_UP: STRING.FUNCTIONAL.SIGN_UP,
    BACK_TO_LOGIN: STRING.FUNCTIONAL.BACK_TO_LOGIN
  },
  "page:quickPractice": {
    TITLE_QUICK_PRACTICE: TITLE.TITLE_QUICK_PRACTICE
  },
  "page:wrongTopic": {
    TITLE_FLAW_BOOK: TITLE.TITLE_FLAW_BOOK
  }
}
