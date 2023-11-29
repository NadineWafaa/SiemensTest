const HomePage = require('../pages/HomePage');
module.exports = {
  '@tags': ['homePage'],

  before: function (browser) {
    browser.url(HomePage.url);
  },

  'Search for "dress" ': function (browser) {
    const homePage = browser.page.HomePage();

    homePage
      .waitForElementVisible('@searchInput', 5000)
      .setValue('@searchInput', 'dress')
      .click('@searchButton')
      .waitForElementVisible('@searchResults', 5000)
      .assert.visible('@searchResults')
      .end();
  },
};
