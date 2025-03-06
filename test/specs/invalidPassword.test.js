describe('login with invalid password', () => {
    it('should display error message', async () => {
        await browser.url('https://www.saucedemo.com');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('invalid_password');
        await $('#login-button').click();
        await expect($('.error-message-container')).toBeDisplayed();
        await expect($('.error-message-container')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});