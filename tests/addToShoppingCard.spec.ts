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
  const thanksOrderTitle = 'Thank you for your order!';
  const thanksOrderText =
    'Your order has been dispatched, and will arrive just as fast as the pony can get there!';

  test('Add items to shopping card and buy it', async ({ page }) => {
    await expect(productsPage.inventoryContainer).toBeVisible();
    await productsPage.backpackAdd.click();
    await expect(productsPage.shoppingCardValue).toHaveText('1');
    await productsPage.tshirtAdd.click();
    await expect(productsPage.shoppingCardValue).toHaveText('2');
    await productsPage.shoppingCard.click();
    await expect(shoppingCard.cardList).toBeVisible();
    await shoppingCard.checkoutButton.click();
    await shoppingCard.firstName.fill('Tester');
    await shoppingCard.lastName.fill('Playwright');
    await shoppingCard.postalCode.fill('12345');
    await shoppingCard.continueButton.click();
    await expect(shoppingCard.summaryInfo).toBeVisible();
    await shoppingCard.finishButton.click();
    await expect(shoppingCard.thanksOrderTitle).toHaveText(thanksOrderTitle);
    await expect(shoppingCard.thanksOrderText).toHaveText(thanksOrderText);
    await shoppingCard.backToProducts.click();
    await expect(productsPage.inventoryList).toBeVisible();
  });
});
