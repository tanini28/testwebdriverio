import Page from './page.js';

class LoginPage extends Page {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async open() {
        await super.open();
    }

    async login(username, password) {
        await this.usernameInput.waitForDisplayed({ timeout: 5000 });
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        await this.errorMessageContainer.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessageContainer.getText();
    }
}

export default new LoginPage();