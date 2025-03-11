import Page from './page.js';

class checkoutPage extends Page {
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get backHomeButton() { return $('#back-to-products'); }
    get completeHeader() { return $('.complete-header'); }

    async open() {
        await super.open('checkout-step-one.html');
    }

    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstNameField.waitForDisplayed({ timeout: 5000 });
        await this.firstNameField.setValue(firstName);

        await this.lastNameField.waitForDisplayed({ timeout: 5000 });
        await this.lastNameField.setValue(lastName);

        await this.postalCodeField.waitForDisplayed({ timeout: 5000 });
        await this.postalCodeField.setValue(postalCode);
    }

    async clickContinue() {
        await this.continueButton.waitForDisplayed({ timeout: 5000 });
        await this.continueButton.click();
    }
    
    async clickFinish() {
        await this.finishButton.waitForDisplayed({ timeout: 5000 });
        await this.finishButton.click();
    }

    async completeCheckout() {
        await this.clickContinue();
        await this.clickFinish();
    }

    async getCompleteHeaderText() {
        await this.completeHeader.waitForDisplayed({ timeout: 5000 });
        return await this.completeHeader.getText();
    }

    async returnToInventory() {
        await this.backHomeButton.waitForDisplayed({ timeout: 5000 });
        await this.backHomeButton.click();
    }
}

export default new checkoutPage();