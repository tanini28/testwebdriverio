import Page from './page.js';

class cartPage extends Page {
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
        try {

            await this.cartItem.waitForDisplayed({ timeout: 2000, reverse: true });
            return false;
        } catch (error) {

            if (error.name === 'TimeoutError') {
                return true;
            }
            throw error;
        }
    }
    
    async getErrorMessage() {
        try {
            await this.errorMessage.waitForDisplayed({ timeout: 5000 });
            return await this.errorMessage.getText();
        } catch (error) {
            return '';
        }
    }
}

export default new CartPage();