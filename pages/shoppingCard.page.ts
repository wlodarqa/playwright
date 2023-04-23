import { Page } from '@playwright/test';

export class ShoppingCard {
  constructor(private page: Page) {}

  cardList = this.page.locator('#cart_contents_container');
}
