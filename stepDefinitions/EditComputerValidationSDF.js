/*jslint node: true*/
var EditComputerPage = require('../pages/EditComputerPage');
var HomePage = require('../pages/HomePage');
var editComputerPage = function (){
     "use strict";

     var edit = new EditComputerPage();
      var hmpage = new HomePage();
      var oldTotalComputer;
      var oldComputerName;


      this.Given(/^user is on homepage of computer database page$/, function () {
        return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
       });

       this.Then(/^user note first computer details in the list$/, function () {
         
            element(hmpage.firstCompName).getText().then(function(value){
               oldComputerName = value;
              //  expect(totalComp>0).to.eventually.be.true;
            });
       });

       this.Then(/^clicks on the name of first computer in the list$/, function() {
           element(hmpage.firstCompName).click();
       });

       this.Then(/^Computer Edit page should be opened$/, function () {
           return expect(element(edit.deleteCompLocator).isDisplayed()).to.eventually.be.true;
       });

       this.Then(/^Edit page should display Save this computer and Cancel buttons$/, function () {
            return expect(element(edit.saveThisComputer).isDisplayed()).to.eventually.be.true;
       });

       this.Then(/^Delete this computer button should exist$/, function () {
           return expect(element(edit.cancelBtnLocator).isDisplayed()).to.eventually.be.true;
       });

       this.Then(/^user clicks Cancel button$/, function () {
            element(edit.cancelBtnLocator).click();
       });

       this.Then(/^user sees homepage$/, function () {
           return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
       });

        this.Then(/^append "([^"]*)" at the end of the name of the computer$/, function (arg1) {
            // element(hmpage.firstCompName).click();
            expect(element(edit.cancelBtnLocator).isDisplayed()).to.eventually.be.true;
            expect(element(edit.computerNameLocator).isDisplayed()).to.eventually.be.true;
            element(edit.computerNameLocator).sendKeys(arg1);


        });

        this.Then(/^change introduced date to "([^"]*)"$/, function (arg1) {
           element(edit.intrdateLocator).clear();
           expect(element(edit.intrdateLocator).isDisplayed()).to.eventually.be.true;
           element(edit.intrdateLocator).sendKeys(arg1);
        });

        this.Then(/^change discontinued date to "([^"]*)"$/, function (arg1) {
          element(edit.discDateLocator).clear();
          expect(element(edit.discDateLocator).isDisplayed()).to.eventually.be.true;
           element(edit.discDateLocator).sendKeys(arg1);
        });

        this.Then(/^change company to "([^"]*)"$/, function (arg1) {
             return element(by.cssContainingText('option',arg1)).click();
        });

        this.Then(/^click Save this computer button$/, function () {
             element(edit.saveThisComputer).click();
        });

        this.Then(/^user navigates to homepage$/, function () {
            return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^user sees edit confirmation message$/, function () {
            return expect(element(hmpage.newCompConfMessage).isDisplayed()).to.eventually.be.true;
        });

};

module.exports = editComputerPage;
