/*jslint node: true*/
var edit=function(){
    "use strict";

    this.computerNameLocator = by.xpath("//*[@id='name']");
    this.intrdateLocator = by.xpath("//*[@id='introduced']");
    this.discDateLocator = by.xpath("//*[@id='discontinued']");
    this.compaNameLocator = by.xpath("//*[@id='company']");
    this.deleteCompLocator = by.xpath("//*[@id='main']/form[2]/input");
    this.saveThisComputer = by.xpath("//*[@id='main']/form[1]/div/input");
    this.cancelBtnLocator = by.xpath("//*[@id='main']/form[1]/div/a");
    
};

module.exports = edit;
