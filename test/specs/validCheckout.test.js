import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';
import { faker } from '@faker-js/faker';

describe('Valid Checkout', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });
    
    it('should complete checkout successfully', async () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode();
        
        await inventoryPage.addItemToCart();
        await expect(inventoryPage.cartBadge).toHaveText('1');

        await inventoryPage.openCart();
        await expect(browser).toHaveUrlContaining('cart.html');

        await cartPage.proceedToCheckout();
        await expect(browser).toHaveUrlContaining('checkout-step-one.html');

        await checkoutPage.fillCheckoutForm(firstName, lastName, postalCode);
        await checkoutPage.completeCheckout();

        await expect(browser).toHaveUrlContaining('checkout-complete.html');
        const headerText = await checkoutPage.getCompleteHeaderText();
        await expect(headerText).toBe('Thank you for your order!');

        await checkoutPage.returnToInventory();
        await expect(browser).toHaveUrlContaining('inventory.html');
    });
});