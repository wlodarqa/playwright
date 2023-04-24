import { Page } from '@playwright/test';

export class ShoppingCard {
  constructor(private page: Page) {}

  cardList = this.page.locator('#cart_contents_container');
  checkoutButton = this.page.getByTestId('checkout');
  firstName = this.page.getByTestId('firstName');
  lastName = this.page.getByTestId('lastName');
  postalCode = this.page.getByTestId('postalCode');
  continueButton = this.page.getByTestId('continue');
  checkoutSummary = this.page.locator('#checkout_summary_container');
  finishButton = this.page.getByTestId('finish');
  summaryInfo = this.page.locator('.summary_info');
  thanksOrderTitle = this.page.locator('.complete-header');
  thanksOrderText = this.page.locator('.complete-text');
  backToProducts = this.page.getByTestId('back-to-products');
}
