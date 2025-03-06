import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting products', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should sort products by different criteria', async () => {
        const sortOptions = [
            {
                option: 'Price (low to high)',
                verify: async () => {
                    const prices = await InventoryPage.getItemPrices();
                    const sortedPrices = [...prices].sort((a, b) => a - b);
                    await expect(prices).toEqual(sortedPrices);
                }
            },
            {
                option: 'Name (A to Z)',
                verify: async () => {
                    const names = await InventoryPage.getItemNames();
                    const sortedNames = [...names].sort();
                    await expect(names).toEqual(sortedNames);
                }
            },
            {
                option: 'Name (Z to A)',
                verify: async () => {
                    const names = await InventoryPage.getItemNames();
                    const sortedNames = [...names].sort().reverse();
                    await expect(names).toEqual(sortedNames);
                }
            },
            {
                option: 'Price (high to low)',
                verify: async () => {
                    const prices = await InventoryPage.getItemPrices();
                    const sortedPrices = [...prices].sort((a, b) => b - a);
                    await expect(prices).toEqual(sortedPrices);
                }
            }
        ];

        for (const { option, verify } of sortOptions) {
            await InventoryPage.sortBy(option);
            await verify();
        }
    });
});