import loginPage from '../pageobjects/login.page.js';
import footerPage from '../pageobjects/footer.page.js';

describe('Footer Links', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should verify all footer links open in new tabs', async () => {
        await footerPage.verifyAllSocialLinks();
    });
});