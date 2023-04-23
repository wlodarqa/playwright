import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
  loginInput = this.page.locator('#user-name');
  passwordInput = this.page.locator('#password');
  loginButton = this.page.locator('#login-button');
  inventoryList = this.page.locator('.inventory_list');

  async login(login: string, password: string): Promise<void> {
    await this.loginInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
