export default class Page {
    async open(path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
    
    async getCurrentUrl() {
        return await browser.getUrl();
    }

    async waitForElementDisplayed(element) {
        await element.waitForDisplayed();
    }

    async waitForElementClickable(element) {
        await element.waitForClickable();
    }

    async waitForUrlContains(urlPart) {
        await browser.waitUntil(
            async () => (await this.getCurrentUrl()).includes(urlPart),
            { timeoutMsg: `URL did not include ${urlPart} after timeout` }
        );
    }
}