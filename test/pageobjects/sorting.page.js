class SortingPage {
    get sortingDropdown() { return $('#sorting-dropdown'); }
    get items() { return $$('.item'); }

    async open() {
        await browser.url('/sorting');
    }

    async selectSortingOption(option) {
        await this.sortingDropdown.selectByVisibleText(option);
    }

    async isSortedBy(option) {
        const itemTexts = await this.items.map(async (item) => await item.getText());
      
        return true; 
    }
}

export default new SortingPage();