const ContactUsPage = require('../pages/ContactUsPage');
module.exports = {
  '@tags': ['contactUs'],

  before: function (browser) {
    browser.url(ContactUsPage.url);
  },

  'Submit form with valid data': function (browser) {
    const contactPage = browser.page.ContactUsPage();

    contactPage
      .waitForElementVisible('@contactForm', 10000)
      .setValue('@subjectDropdown', '1') 
      .setValue('@emailInput', 'testvalidation@example.com')
      .setValue('@messageInput', 'Valid message')
      .click('@submitButton')
      .end();
  },

  'Submit form with invalid data': function (browser) {
    const contactPage = browser.page.ContactUsPage();
  
    contactPage
      .waitForElementVisible('@contactForm', 10000)
      .setValue('@subjectDropdown', '2') 
      .setValue('@emailInput', ' ')
      .setValue('@messageInput', 'This is a valid message')
      .click('@submitButton')
      .end();
  },

  'Submit form with valid data and file upload': function (browser) {
    const contactUSPage = browser.page.ContactUsPage();

    contactUSPage
      .waitForElementVisible('@contactForm', 10000)
      .setValue('@subjectDropdown', '2') 
      .setValue('@emailInput', 'valid.email@example.com')
      .setValue('@messageInput', 'This is a valid message')
      .setValue('@uploadInput', require('path').resolve(__dirname + '../testfile/test.txt')) 
      .click('@submitButton')
      .end();
  },
  
};
