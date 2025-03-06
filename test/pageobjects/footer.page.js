
import Page from './page';

class FooterPage extends Page {
  
    get twitterLink() { return $('.social_twitter a'); }
    get facebookLink() { return $('.social_facebook a'); }
    get linkedinLink() { return $('.social_linkedin a'); }

  
    async verifyLinkOpensInNewTab(link) {
        await link.click();
        const handles = await browser.getWindowHandles();
        await expect(handles.length).toBe(2); 
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
}

export default new FooterPage();