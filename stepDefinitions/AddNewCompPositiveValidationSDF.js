/*jslint node: true*/
var HomePage = require('../pages/HomePage');
var AddComputerPage = require('../pages/AddComputerPage');

var addComputerPagePositive = function (){
     "use strict";
    var addPositive = new AddComputerPage();
    var hmpage = new HomePage();
    var totalComp;
      this.Given(/^user is on homepage$/, function () {
            return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
        });

        this.When(/^User clicks on Add new computer button$/, function () {
            return element(hmpage.addComputerLocator).click();
        });

        this.Then(/^Add a computer page should be displayed$/, function () {
             return expect(element(addPositive.addAComputerlblLocator).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^user clicks on Cancel button$/, function () {
            return element(addPositive.cancelBtnLocator).click();
        });

        this.Then(/^Homepage should be displayed$/, function () {
            return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^note the total number of computers$/, function () {

            element(hmpage.lblTotalComputerFound).getText().then(function(value){
               totalComp =  parseInt(value.trim().split(" ")[0]);
              //  expect(totalComp>0).to.eventually.be.true;
            });

           // totalComp = parseInt(element(hmpage.lblTotalComputerFound).getText().trim().split(" ")[0].trim());
           // return expect(totalComp>0).to.eventually.be.true;
        });

        this.Then(/^user enters "([^"]*)" as Computer name$/, function (arg1) {
              return element(addPositive.computerNameLocator).sendKeys(arg1);
        });

        this.Then(/^enters "([^"]*)" as Introduced date$/, function (arg1) {
              return element(addPositive.introducedDateLocator).sendKeys(arg1);
        });

        this.Then(/^enters "([^"]*)" as Discontinued date$/, function (arg1) {
              return element(addPositive.dicontDateLocator).sendKeys(arg1);
        });

      
        this.Then(/^selects "([^"]*)" as company$/, function (arg1) {
              return element(by.cssContainingText('option',arg1)).click();
        });

        this.Then(/^clicks on Create this computer button$/, function () {
              return element(addPositive.createBtnLocator).click();
        });

        this.Then(/^user should be redirected to homepage$/, function () {
              return expect(element(hmpage.computerTable).isDisplayed()).to.eventually.be.true;
        });

        this.Then(/^gets a confirmation message "([^"]*)"$/, function (arg1) {
              return expect(element(hmpage.newCompConfMessage).getText()).to.eventually.equal(arg1);
        });

        this.Then(/^the total number of computers should be increased by (\d+)$/, function (arg1) {
              element(hmpage.lblTotalComputerFound).getText().then(function(value){
              var newComp =  parseInt(value.trim().split(" ")[0]);
                 expect(newComp).to.equal(totalComp + 1);
            });
              
        });


};

module.exports = addComputerPagePositive;