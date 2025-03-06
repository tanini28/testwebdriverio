import Page from './page';

class CheckoutPage {
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get backHomeButton() { return $('#back-to-products'); }

    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstNameField.waitForDisplayed({ timeout: 5000 });
        await this.firstNameField.setValue(firstName);

        await this.lastNameField.waitForDisplayed({ timeout: 5000 });
        await this.lastNameField.setValue(lastName);

        await this.postalCodeField.waitForDisplayed({ timeout: 5000 });
        await this.postalCodeField.setValue(postalCode);
    }

    async completeCheckout() {
        await this.continueButton.waitForDisplayed({ timeout: 5000 });
        await this.continueButton.click();

        await this.finishButton.waitForDisplayed({ timeout: 5000 });
        await this.finishButton.click();
    }

    async returnToInventory() {
        await this.backHomeButton.waitForDisplayed({ timeout: 5000 });
        await this.backHomeButton.click();
    }
}

export default new CheckoutPage();