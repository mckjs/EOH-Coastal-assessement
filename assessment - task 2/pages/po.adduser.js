const pages = require('../pages/data.urls');
const chai = require('chai');
const assertError = chai.AssertionError;
const webdriver = require('selenium-webdriver');
const driver = require('../support/myworld');

const until = webdriver.until;
const assert = require('assert');
const By = webdriver.By;
const promise = require("bluebird");
module.exports = {

    poadduser: {
        eTable: By.className('smart-table table table-striped'),
        eTableHeader : By.className('smart-table-header-row'),
        eTableHeaderCell : By.className('smart-table-header-cell'),
        eTableDataCell : By.className('smart-table-data-cell'),
        eLinkAddUser : By.className('btn btn-link pull-right'),
        eBtnSave : By.className('btn btn-success'),
        eModalHeaderName : By.className('modal-header'),
        eInputFirstName : By.name('FirstName'),
        eInputLastName : By.name('LastName'),
        eInputUserName : By.name('UserName'),
        eInputPassword : By.name('Password'),
        eInputEmail : By.name('Email'),
        eInputCellphone : By.name('Mobilephone'),
        eRdbCustomerCompanyA : By.css("input[value='15']"),
        eRdbCustomerCompanyB : By.css("input[value='16']"),
        eDbxRole : By.name('RoleId'),
        eDbxOption : By.tagName('option')
    },
    navigateTo: function(string) {
       let url;
       if (string == "webtables"){
          url = pages.webtables;
       }else{
           return assertError.message("Please add relevant data to use to navigate to an url")
       }
       return driver.get(url);
    },
    getPageTitle: function () {
        return driver.getTitle();
    }
}