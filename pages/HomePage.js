/*jslint node: true*/
var home = function(){
    "use strict";
    this.menuBarLocator = by.xpath("/html/body/header/h1/a");
    this.lblTotalComputerFound = by.xpath("//*[@id='main']/h1");
    this.addComputerLocator = by.xpath("//*[@id='add']");
    this.computerTable = by.xpath("//*[@id='main']/table");
    this.filterOption = by.xpath("//*[@id='searchbox']");
    this.fiterButton = by.xpath("//*[@id='searchsubmit']");
    this.nextButton = by.xpath("//*[@id='pagination']/ul/li[3]/a");
    this.prevButton = by.xpath("//*[@id='pagination']/ul/li[1]/a");
    this.currentPage = by.xpath("//*[@id='pagination']/ul/li[2]/a");
    this.newCompConfMessage = by.xpath("//*[@id='main']/div[1]");
    this.totalCompFooter = by.xpath("//*[@id='pagination']/ul/li[2]/a");
    this.noCompFoundLabel = by.xpath("//*[@id='main']/div[2]/em");
    this.firstCompName = by.xpath("//*[@id='main']/table/tbody/tr[1]/td[1]/a");
    

};

module.exports = home;