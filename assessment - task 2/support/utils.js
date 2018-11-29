const assert = require('assert');
const driver = require('../support/myworld');
const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const By = webdriver.By;
const promise = require("bluebird");

module.exports = {
    waitForElementLocated: function (selector) {
        return driver.wait(until.elementLocated(selector), 30000);
    },
    isElementSelected: function(selector){
        return driver.findElement(selector).isSelected();
    },
    assertResults: function (sActual, sExpected, sMessage) {
        return assert.equal(sActual, sExpected, sMessage)
    },
    waitForElementsLocated: function (selector) {
        return driver.wait(until.elementsLocated(selector), 30000);
    },
    waitForElementIsEnabled: function (selector) {
        return driver.wait(until.elementIsEnabled(driver.findElement(selector)), 30000)
    },
    waitForElementIsVisible: function (selector) {
        return driver.wait(until.elementIsVisible(driver.findElement(selector)), 20000);
    },
    waitForElementsVisible: function (selector) {
        return driver.wait(until.elementIsVisible(driver.findElements(selector)), 30000);
    },
    waitForElementTextToBe: function (selector, string) {
        return driver.wait(until.elementTextContains(driver.findElement(selector), string));
    },
    getText: function (selector) {
        return this.waitForElementLocated(selector).then(function () {
            return driver.findElement(selector).getText();
        })
    },
    setValue: function (selector, value) {
        return this.waitForElementLocated(selector).then(function () {
            return driver.findElement(selector).sendKeys(value)
        })
    },
    click: function (selector) {
        return driver.wait(until.elementLocated(selector), 20000).then(element => {
            return driver.wait(until.elementIsVisible(driver.findElement(selector))).then(function () {
                return element.click();
            })
        })
    },

    assertSelectorIsDisplayed : function (selector) {
        return this.waitForElementLocated(selector).then(function () {
            return driver.findElement(selector).isDisplayed().then(function (displayed) {
                return this.assertResults(displayed, true, " > Element is not displayed on page")
            }).catch(function (err) {
                return err;
            })
        })
    }


}