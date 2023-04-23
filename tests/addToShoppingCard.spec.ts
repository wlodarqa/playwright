import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { loginData } from '../test-data/login.data';
import { ProductsPage } from '../pages/products.page';
import { ShoppingCard } from '../pages/shoppingCard.page';

test.describe('Add to shopping card tests', () => {
  let productsPage: ProductsPage;
  let shoppingCard: ShoppingCard;
  test.beforeEach(async ({ page }) => {
    const login = loginData.login;
    const password = loginData.password;
    const loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    shoppingCard = new ShoppingCard(page);

    await page.goto('/');
    await loginPage.login(login, password);
  });

  test('Add items to shopping card', async ({ page }) => {
    await expect(productsPage.inventoryContainer).toBeVisible();
    await productsPage.backpackAdd.click();
    await expect(productsPage.shoppingCardValue).toHaveText('1');
    await productsPage.tshirtAdd.click();
    await expect(productsPage.shoppingCardValue).toHaveText('2');
    await productsPage.shoppingCard.click();
    await expect(shoppingCard.cardList).toBeVisible();
  });
});
