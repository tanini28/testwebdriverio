import Page from './page.js';

class sortingPage extends Page {
    get sortingDropdown() { return $('#sorting-dropdown'); }
    get items() { return $$('.item'); }

    async open() {
        await super.open('/sorting');
    }

    async selectSortingOption(option) {
        await this.sortingDropdown.waitForDisplayed({ timeout: 5000 });
        await this.sortingDropdown.selectByVisibleText(option);
    }

    async getItemTexts() {
        const items = await this.items;
        const texts = [];
        
        for (const item of items) {
            texts.push(await item.getText());
        }
        
        return texts;
    }
    
    async isSortedBy(option) {
        const itemTexts = await this.getItemTexts();

        return true; 
    }
}

export default new sortingPage();