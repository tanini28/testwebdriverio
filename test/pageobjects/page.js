export default class Page {
    open(path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
    
    async getCurrentUrl() {
        return await browser.getUrl();
    }
    
    async waitForUrl(urlPart, timeout = 10000) {
        await browser.waitUntil(
            async () => {
                const url = await this.getCurrentUrl();
                return url.includes(urlPart);
            },
            {
                timeout,
                timeoutMsg: `Expected URL to contain ${urlPart}`
            }
        );
    }
}