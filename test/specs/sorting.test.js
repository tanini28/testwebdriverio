import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting products', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should sort products by price low to high', async () => {
        await InventoryPage.sortBy('Price (low to high)');
        const prices = await InventoryPage.getItemPrices();
        const sortedPrices = [...prices].sort((a, b) => a - b);
        await expect(prices).toEqual(sortedPrices);
    });

    it('should sort products by name A to Z', async () => {
        await InventoryPage.sortBy('Name (A to Z)');
        const names = await InventoryPage.getItemNames();
        const sortedNames = [...names].sort();
        await expect(names).toEqual(sortedNames);
    });

    it('should sort products by name Z to A', async () => {
        await InventoryPage.sortBy('Name (Z to A)');
        const names = await InventoryPage.getItemNames();
        const sortedNames = [...names].sort().reverse();
        await expect(names).toEqual(sortedNames);
    });
    
    it('should sort products by price high to low', async () => {
        await InventoryPage.sortBy('Price (high to low)');
        const prices = await InventoryPage.getItemPrices();
        const sortedPrices = [...prices].sort((a, b) => b - a);
        await expect(prices).toEqual(sortedPrices);
    });
});