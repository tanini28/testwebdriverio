
import LoginPage from '../pageobjects/login.page';
import FooterPage from '../pageobjects/footer.page';

describe('Footer Links', () => {
    before(async () => {
     
        await LoginPage.openLoginPage();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should open Twitter link in a new tab', async () => {
        await FooterPage.verifyLinkOpensInNewTab(FooterPage.twitterLink);
    });

    it('should open Facebook link in a new tab', async () => {
        await FooterPage.verifyLinkOpensInNewTab(FooterPage.facebookLink);
    });

    it('should open LinkedIn link in a new tab', async () => {
        await FooterPage.verifyLinkOpensInNewTab(FooterPage.linkedinLink);
    });
});