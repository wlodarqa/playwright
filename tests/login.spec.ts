import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';

test.describe('Login tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
  });

  const login = loginData.login;
  const password = loginData.password;
  const errorMsg =
    'Epic sadface: Username and password do not match any user in this service';
  const passwordError = 'Epic sadface: Password is required';

  test('Login with correct data', async ({ page }) => {
    await loginPage.loginInput.fill(login);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();
    await expect(productsPage.inventoryList).toBeVisible();
  });

  test('Login with incorrect data', async ({ page }) => {
    await loginPage.loginInput.fill('Wrong Login');
    await loginPage.passwordInput.fill('password');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMsg).toHaveText(errorMsg);
  });

  test('Login without password', async ({ page }) => {
    await loginPage.loginInput.fill(login);
    await loginPage.loginButton.click();
    await expect(loginPage.errorMsg).toHaveText(passwordError);
  });
});
