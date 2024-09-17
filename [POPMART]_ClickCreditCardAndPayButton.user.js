// ==UserScript==
// @name        Click Credit Card and Pay Button
// @namespace   Violentmonkey Scripts
// @match       https://www.popmart.com/vn/checkout
// @icon        https://www.google.com/s2/favicons?sz=64&domain=popmart.com
// @grant       none
// @version     2.0
// @author      -
// @description 9/17/2024, 10:56:19 AM
// @downloadURL  https://github.com/tht0310/Scripts/blob/main/%5BPOPMART%5D%20Click%20Credit%20Card%20and%20Pay%20Button.js
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
    const ccTime = setInterval(() => {
        const creditCardDiv = getElementByXPath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div[7]/div/div");
        if (creditCardDiv) {
            clearInterval(ccTime);
            creditCardDiv.click();
            const payTime = setInterval(() => {
                const validIcons = document.querySelectorAll(".adyen-checkout__input--valid");
                if (validIcons.length === 4) {
                    const payButton = getElementByXPath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div[7]/div/div[2]/div/div/div/ul/li[1]/div[2]/div/button");
                    payButton.click();
                    clearInterval(payTime);
                }
            }, 100);
        }
    }, 100);
})();
