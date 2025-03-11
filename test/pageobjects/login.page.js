import Page from './page.js';

class loginPage extends Page {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async open() {
        await super.open();
        await this.usernameInput.waitForExist({ timeout: 5000 });
    }

    async clickLogin() {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
    
    async getErrorMessage() {
        await this.errorMessageContainer.waitForDisplayed();
        return await this.errorMessageContainer.getText();
    }
}

export default new loginPage();