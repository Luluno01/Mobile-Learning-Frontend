/* Class Page
 * For template-pages only
 * To load static page, use <a href="subPages/page.html"></a>
*/

class Page {
  constructor(name, context, parent) {
    this.parent = parent;
    this.url = "subPages/" + name + ".html";
    this.name = name;
    this.data = null;
    this.context = context;
    this.page = null;
    this.js = null;
    this.namespace = {};

    this.callbackObj = null;
  }

  show() {
    var _this = this;
    this.callbackObj = ML.onPageBeforeRemove(name, function() {
      _this.destroy();
    });
    parent.router.loadContent(this.page || this.getPage());
    this.loadJs();
    return this;
  }

  hide() {
    parent.router.back();
  }

  /* This method should be called after mainView.router.loadContent(pageObj.page) 
   * Reloading is not allowed
  */
  loadJs() {
    if(!this.js) this.js = lib.loadScript("js/main/" + this.name + ".js", this.name);
  }

  setUrl(url) {
    this.url = url;
  }

  // Ajax get page & return compiled page
  getPage() {
    var _this = this;
    if(!this.page) {
      $$.ajax({
        url: this.url,
        async: false,
        success: function(data) {
          _this.data = data;
          _this.page = (Template7.compile(data))(_this.context || {});
        }
      });
    }
    return this.page;
  }

  // Recompile page
  recompile() {
    this.page = (Template7.compile(this.data))(this.context || {});
  }

  // Destructor-like method, destroy js for this page only (Avoid compiling the same templates multiply times)
  destroy() {
    if(this.namespace.onDestroy) {
      this.namespace.onDestroy();
    }
    if(this.js) {
      this.js.remove();
    }
    this.callbackObj.remove();
    console.log("Page " + this.name + "destroyed from DOM.");
  }
}