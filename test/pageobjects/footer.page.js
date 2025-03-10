import Page from './page.js';

class FooterPage extends Page {
    get twitterLink() { return $('.social_twitter a'); }
    get facebookLink() { return $('.social_facebook a'); }
    get linkedinLink() { return $('.social_linkedin a'); }

    async clickSocialLink(link) {
        await link.waitForDisplayed({ timeout: 5000 });
        await link.click();
    }
  
    async verifyAllSocialLinks() {
       await browser.pause(1000);
        
        // Twitter
        await this.clickSocialLink(this.twitterLink);
        await browser.pause(1000);
        let handles = await browser.getWindowHandles();
        await expect(handles.length).toBe(2); 
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        
        // Facebook
        await browser.pause(1000);
        await this.clickSocialLink(this.facebookLink);
        await browser.pause(1000);
        handles = await browser.getWindowHandles();
        await expect(handles.length).toBe(2); 
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        
        // LinkedIn
        await browser.pause(1000);
        await this.clickSocialLink(this.linkedinLink);
        await browser.pause(1000);
        handles = await browser.getWindowHandles();
        await expect(handles.length).toBe(2); 
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
}

export default new FooterPage();