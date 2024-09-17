// ==UserScript==
// @name         Click Credit Card and Pay Button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description
// @author
// @match        *https://www.popmart.com/vn/checkout?spuId=1306&skuId=2001&count=1&spuTitle=Happy%20Halloween%20Party%20Series-Sitting%20Pumpkin%20Vinyl%20Plush%20Pendant
// @icon         https://www.google.com/s2/favicons?sz=64&domain=popmart.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function getElementByXPath(xpathExpression) {
        const result = document.evaluate(
            xpathExpression, // The XPath expression
            document, // The context node (usually the document)
            null, // Namespace resolver (null for HTML documents)
            XPathResult.FIRST_ORDERED_NODE_TYPE, // Result type
            null // Result (null to create a new XPathResult object)
        );
        return result.singleNodeValue;
    }
    const creditCardTimer = setInterval(() => {
        const creditCardDiv = getElementByXPath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div[7]/div/div");
        if (creditCardDiv) {
            clearInterval(creditCardTimer);
            creditCardDiv.click();
            const payTimer = setInterval(() => {
                const validIcons = document.querySelectorAll(".adyen-checkout__input--valid");
                if (validIcons.length === 4) {
                    const payButton = getElementByXPath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div[7]/div/div[2]/div/div/div/ul/li[1]/div[2]/div/button");
                    payButton.click();
                    clearInterval(payTimer);
                }
            }, 100);
        }
    }, 100);
})();
