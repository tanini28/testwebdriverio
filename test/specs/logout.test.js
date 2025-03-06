describe('Logout', () => {
    it('should logout successfully', async () => {

        await browser.url('https://www.saucedemo.com');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await $('.bm-burger-button').click();

        await $('#logout_sidebar_link').click();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect($('#login-button')).toBeDisplayed();
    });
});