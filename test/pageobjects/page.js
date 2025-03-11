export default class Page {
    open(path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
    
    async getCurrentUrl() {
        return await browser.getUrl();
    }
}