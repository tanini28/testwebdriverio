describe('Login with invalid login', () => {
    it('should display error message for invalid login', async () => {

        await browser.url('https://www.saucedemo.com');

        await $('#user-name').setValue('invalid_user');

        await $('#password').setValue('secret_sauce');

        await $('#login-button').click();

        await expect($('.error-message-container')).toBeDisplayed();
        await expect($('.error-message-container')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});