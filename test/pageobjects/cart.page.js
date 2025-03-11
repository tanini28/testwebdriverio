import Page from './page.js';

class cartPage extends Page {
    get cartItem() { return $('.cart_item'); }
    get checkoutButton() { return $('#checkout'); }
    get errorMessage() { return $('.error-message'); }

    async open() {
        await super.open('cart.html');
    }

    async proceedToCheckout() {
        await this.waitForElementClickable(this.checkoutButton);
        await this.checkoutButton.click();
    }
    
    async isCartItemDisplayed() {
        // Более простая и прямая проверка наличия элемента
        return await this.cartItem.isDisplayed().catch(() => false);
    }
    
    async getErrorMessage() {
        await this.waitForElementDisplayed(this.errorMessage);
        return await this.errorMessage.getText();
    }
}

export default new cartPage();