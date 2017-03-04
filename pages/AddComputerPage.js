/*jslint node: true*/
var add = function(){
     "use strict";

     this.computerNameLocator = by.xpath("//*[@id='name']");
     this.introducedDateLocator = by.xpath("//*[@id='introduced']");
     this.dicontDateLocator = by.xpath("//*[@id='discontinued']");
     this.companyNameLocator = by.xpath("//*[@id='company']");
     this.addAComputerlblLocator = by.xpath("//*[@id='main']/h1");
     this.lblComputerNameLocator = by.xpath("//*[@id='main']/form/fieldset/div[1]/label");
     this.lblIntrDateLocator = by.xpath("//*[@id='main']/form/fieldset/div[2]/label");
     this.lblDiscDateLocator = by.xpath("//*[@id='main']/form/fieldset/div[3]/label");
     this.lblCompanyNameLocator = by.xpath("//*[@id='main']/form/fieldset/div[4]/label");
     this.cancelBtnLocator = by.xpath("//*[@id='main']/form/div/a");
     this.createBtnLocator = by.xpath("//*[@id='main']/form/div/input");
     this.errorComputerNameLocator = by.xpath("//*[@id='main']/form/fieldset/div[1]");
     this.errorIntrLocator = by.xpath("//*[@id='main']/form/fieldset/div[2]");
     this.errorDisdateLocator = by.xpath("//*[@id='main']/form/fieldset/div[3]");
     this.errorCompanyLocator = by.xpath("//*[@id='main']/form/fieldset/div[4]");
     

};

module.exports = add;