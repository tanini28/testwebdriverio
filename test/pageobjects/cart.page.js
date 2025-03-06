import Page from './page.js';

class CartPage extends Page {
    get cartItem() { return $('.cart_item'); }
    get checkoutButton() { return $('#checkout'); }
    get errorMessage() { return $('.error-message'); }

    async open() {
        await super.open('cart.html');
    }

    async proceedToCheckout() {
        await this.checkoutButton.waitForDisplayed({ timeout: 5000 });
        await this.checkoutButton.click();
    }
    
    async isCartItemDisplayed() {
        return await this.cartItem.isDisplayed();
    }
    
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessage.getText();
    }
}

export default new CartPage();