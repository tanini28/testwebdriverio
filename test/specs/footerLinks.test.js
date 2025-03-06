
import LoginPage from '../pageobjects/login.page';
import FooterPage from '../pageobjects/footer.page';

describe('Footer Links', () => {
    beforeEach(async () => {
        
        await LoginPage.openLoginPage();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should verify all footer links', async () => {
       
        await FooterPage.verifyLinkOpensInNewTab(FooterPage.twitterLink);
        await FooterPage.verifyLinkOpensInNewTab(FooterPage.facebookLink);
        await FooterPage.verifyLinkOpensInNewTab(FooterPage.linkedinLink);
    });
});
