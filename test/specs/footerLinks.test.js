import LoginPage from '../pageobjects/login.page.js';
import FooterPage from '../pageobjects/footer.page.js';

describe('Footer Links', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should verify all footer links open in new tabs', async () => {
        await FooterPage.verifyAllSocialLinks();
    });
});