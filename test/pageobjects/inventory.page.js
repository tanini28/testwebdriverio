import page from './page.js';

class inventoryPage extends page {
    get addToCartBackpackButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get burgerMenuButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get shoppingCartLink() { return $('.shopping_cart_link'); }
    get sortDropdown() { return $('.product_sort_container'); }
    get inventoryItems() { return $$('.inventory_item_name'); }
    get inventoryPrices() { return $$('.inventory_item_price'); }
    get inventoryList() { return $('.inventory_list'); }

    async open() {
        return super.open('inventory.html');
    }
    
    async addItemToCart() {
        await this.addToCartBackpackButton.waitForDisplayed({ timeout: 5000 });
        await this.addToCartBackpackButton.click();
    }

    async openCart() {
        await this.shoppingCartLink.waitForDisplayed({ timeout: 5000 });
        await this.shoppingCartLink.click();
    }
    
    async logout() {
        await this.burgerMenuButton.waitForDisplayed({ timeout: 5000 });
        await this.burgerMenuButton.click();
        await this.logoutLink.waitForDisplayed({ timeout: 5000 });
        await this.logoutLink.click();
    }
    
    async sortBy(option) {
        await this.sortDropdown.waitForDisplayed({ timeout: 5000 });
        await this.sortDropdown.selectByVisibleText(option);

        await browser.pause(500);
    }

    async getItemNames() {
        const items = await this.inventoryItems;
        const nameTexts = [];
        
        for (const item of items) {
            const text = await item.getText();
            nameTexts.push(text);
        }
        
        return nameTexts;
    }

    async getItemPrices() {
        const prices = await this.inventoryPrices;
        const priceValues = [];

        for (const price of prices) {
            const priceText = await price.getText();
            if (priceText) {
                const numericPrice = parseFloat(priceText.replace('$', ''));
                priceValues.push(numericPrice);
            }
        }

        return priceValues;
    }
    
    async isInventoryDisplayed() {
        await this.inventoryList.waitForDisplayed({ timeout: 5000 });
        return await this.inventoryList.isDisplayed();
    }
}

export default new inventoryPage();