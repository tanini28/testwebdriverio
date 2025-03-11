import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting products', () => {
    const sortingOptions = [
        { option: 'Price (low to high)', verify: async (prices) => {
            const sortedPrices = [...prices].sort((a, b) => a - b);
            await expect(prices).toEqual(sortedPrices);
        }},
        { option: 'Name (A to Z)', verify: async (names) => {
            const sortedNames = [...names].sort();
            await expect(names).toEqual(sortedNames);
        }},
        { option: 'Name (Z to A)', verify: async (names) => {
            const sortedNames = [...names].sort().reverse();
            await expect(names).toEqual(sortedNames);
        }},
        { option: 'Price (high to low)', verify: async (prices) => {
            const sortedPrices = [...prices].sort((a, b) => b - a);
            await expect(prices).toEqual(sortedPrices);
        }}
    ];

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    for (const { option, verify } of sortingOptions) {
        it(`should sort products by ${option}`, async () => {
            await InventoryPage.sortBy(option);
            
            if (option.includes('Price')) {
                const prices = await InventoryPage.getItemPrices();
                await verify(prices);
            } else {
                const names = await InventoryPage.getItemNames();
                await verify(names);
            }
        });
    }
});