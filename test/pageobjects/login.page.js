import Page from './page.js';

class loginPage extends Page {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async open() {
        await super.open();

        await this.usernameInput.waitForExist({ timeout: 15000 });
    }

    async login(username, password) {
        try {

            await this.usernameInput.waitForClickable({ timeout: 15000 });
            await this.usernameInput.setValue(username);
            
            await this.passwordInput.waitForClickable({ timeout: 10000 });
            await this.passwordInput.setValue(password);
            
            await this.loginButton.waitForClickable({ timeout: 10000 });
            await this.loginButton.click();

            await browser.waitUntil(
                async () => {
                    const url = await browser.getUrl();
                    return url.includes('inventory.html') || 
                           await this.errorMessageContainer.isExisting();
                },
                {
                    timeout: 15000,
                    timeoutMsg: 'Login action did not complete in time'
                }
            );
        } catch (error) {
            console.error('Login failed:', error.message);
            throw error;
        }
    }
    
    async getErrorMessage() {
        await this.errorMessageContainer.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessageContainer.getText();
    }
}

export default new LoginPage();