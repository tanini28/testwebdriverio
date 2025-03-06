describe('Valid Login', () => {
    it('should redirect to inventory page', async () => {
        await browser.url('https://www.saucedemo.com');
 
        await $('#user-name').setValue('standard_user');
      
        await $('#password').setValue('secret_sauce');

        await $('#login-button').click();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect($('.inventory_list')).toBeDisplayed();
    });
});