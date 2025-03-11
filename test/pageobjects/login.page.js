import Page from './page.js';

class loginPage extends Page {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async open() {
        await super.open();
        await this.usernameInput.waitForExist();
    }

    async login(username, password) {
        if (username) {
            await this.usernameInput.setValue(username);
        }
        if (password) {
            await this.passwordInput.setValue(password);
        }
        await this.clickLogin();
    }

    async clickLogin() {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
    
    async getErrorMessage() {
        await this.errorMessageContainer.waitForDisplayed();
        return await this.errorMessageContainer.getText();
    }

    async waitForUrl(urlPart) {
        await browser.waitUntil(
            async () => (await this.getCurrentUrl()).includes(urlPart),
            { timeoutMsg: `URL did not include ${urlPart} after timeout` }
        );
    }
}

export default new loginPage();