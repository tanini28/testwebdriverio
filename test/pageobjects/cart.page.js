import Page from './page.js';

class CartPage {
    get cartItem() { return $('.cart_item'); } 
    get checkoutButton() { return $('#checkout'); }

    async proceedToCheckout() {
        await this.checkoutButton.waitForDisplayed({ timeout: 5000 });
        await this.checkoutButton.click();
    }
}

export default new CartPage();