/*jslint node: true*/
var HomePage = require('../pages/HomePage');

var landing = function(){
    "use strict";
    var hmpage = new HomePage();
   
    this.Given(/^"([^"]*)" is launched and user navigates to homepage$/, function (arg1) {
          return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
        });
    
     this.When(/^title of the page is "([^"]*)"$/, function (arg1){
          return expect(browser.getTitle()).to.eventually.equal('Computers database');
        });
      this.Then(/^header of the page should display the "([^"]*)" link having "([^"]*)" background color$/, function (arg1, arg2) {
        return expect(element(hmpage.menuBarLocator).getText()).to.eventually.equal(arg1);
        });

        this.Then(/^label for total computers found should be displayed$/, function() {
         return expect(element(hmpage.lblTotalComputerFound).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^computer database list table should be displayed$/, function() {
          return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^input field to filter the computers by name should be displayed$/, function () {
          return expect(element(hmpage.filterOption).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^"([^"]*)" button of "([^"]*)" color should be displayed$/, function (arg1, arg2) {
          return expect(element(hmpage.fiterButton).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^"([^"]*)" and "([^"]*)" buttons in the footer is visible$/,function (arg1, arg2) {
         return expect(element(hmpage.nextButton).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^pagination should be present in the footer$/, function () {
          
           return expect(element(hmpage.currentPage).isDisplayed()).to.eventually.be.true;
        });

     

};

module.exports = landing;