import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
  loginInput = this.page.getByTestId('username');
  passwordInput = this.page.getByTestId('password');
  loginButton = this.page.getByTestId('login-button');
  errorMsg = this.page.getByTestId('error');

  async login(login: string, password: string): Promise<void> {
    await this.loginInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
