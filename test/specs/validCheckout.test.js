import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';
import { faker } from '@faker-js/faker';

describe('Valid Checkout', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });
    
    it('should complete checkout successfully', async () => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode();
        
        await InventoryPage.addItemToCart();
        await expect(InventoryPage.cartBadge).toHaveText('1');

        await InventoryPage.openCart();
        await expect(browser).toHaveUrlContaining('cart.html');

        await CartPage.proceedToCheckout();
        await expect(browser).toHaveUrlContaining('checkout-step-one.html');

        await CheckoutPage.fillCheckoutForm(firstName, lastName, postalCode);
        await CheckoutPage.completeCheckout();

        await expect(browser).toHaveUrlContaining('checkout-complete.html');
        const headerText = await CheckoutPage.getCompleteHeaderText();
        await expect(headerText).toBe('Thank you for your order!');

        await CheckoutPage.returnToInventory();
        await expect(browser).toHaveUrlContaining('inventory.html');
    });
});