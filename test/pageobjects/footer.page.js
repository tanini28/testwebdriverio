import page from './page.js';

class footerPage extends page {
    get twitterLink() { return $('.social_twitter a'); }
    get facebookLink() { return $('.social_facebook a'); }
    get linkedinLink() { return $('.social_linkedin a'); }

    async clickSocialLink(link) {
        await link.waitForDisplayed();
        await link.click();
    }
    
    async verifySocialLinkOpensNewTab(link) {
        await this.clickSocialLink(link);
        await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length > 1;
        });
        
        const handles = await browser.getWindowHandles();
        await expect(handles.length).toBe(2);
        

        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
  
    async verifyAllSocialLinks() {

        await this.verifySocialLinkOpensNewTab(this.twitterLink);

        await this.verifySocialLinkOpensNewTab(this.facebookLink);

        await this.verifySocialLinkOpensNewTab(this.linkedinLink);
    }
}
export default new footerPage();