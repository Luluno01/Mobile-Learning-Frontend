/* Class PageManager
 * Require Page.js
*/

class PageManager {
  constructor(parent) {
    this.pages = {};
    this.parent = parent;
  }

  loadPage(name, context) {
    if(!this.pages[name]) {
      this.pages[name] = new Page(name, context, this.parent);
    }
    return this.pages[name];
  }
}