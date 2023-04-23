import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
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
    await expect(loginPage.inventoryList).toBeVisible();
  });

  test('Login with incorrect data', async ({ page }) => {
    await loginPage.loginInput.fill('Wrong Login');
    await loginPage.passwordInput.fill('password');
    await loginPage.loginButton.click();
    await expect(page.getByText(errorMsg)).toBeVisible();
  });

  test('Login without password', async ({ page }) => {
    await loginPage.loginInput.fill(login);
    await loginPage.loginButton.click();
    await expect(page.getByText(passwordError)).toBeVisible();
  });
});
