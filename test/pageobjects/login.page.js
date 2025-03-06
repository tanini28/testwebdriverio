import { $ } from '@wdio/globals'
import Page from './page.js';
class LoginPage extends Page {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

  
    async login(username, password) {
        await this.usernameField.waitForDisplayed({ timeout: 5000 });
        await this.usernameField.setValue(username);
    
        await this.passwordField.waitForDisplayed({ timeout: 5000 });
        await this.passwordField.setValue(password);
    
        await this.loginButton.waitForClickable({ timeout: 5000 });
        await this.loginButton.click();
    }
   
    async openLoginPage() {
        await super.open(''); 
    }

}
export default new LoginPage();
