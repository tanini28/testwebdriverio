
import Page from './page.js';

class InventoryPage extends Page {
    
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get cartBadge() { return $('#shopping_cart_container > a'); }
    get burgerMenuButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get shoppingCartLink() { return $('.shopping_cart_link'); }

  
    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.shoppingCartLink.click();
    }
    async logout() {
        await this.burgerMenuButton.click();
        await this.logoutLink.click();
    }
    get sortDropdown() { return $('.product_sort_container'); }
    get inventoryItems() { return $$('.inventory_item_name'); }
    get inventoryPrices() { return $$('.inventory_item_price'); }
    open() {
        return super.open('inventory.html');
    }
    
    async sortBy(option) {
        await this.sortDropdown.selectByVisibleText(option);
    }

    async getItemNames() {
        const items = await this.inventoryItems;
        return Promise.all(items.map(async item => await item.getText()));
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
}
export default new InventoryPage();