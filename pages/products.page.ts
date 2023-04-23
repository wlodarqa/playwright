import { Page } from '@playwright/test';
export class ProductsPage {
  constructor(private page: Page) {}

  inventoryContainer = this.page.locator('.inventory_container');
  backpackAdd = this.page.locator('#add-to-cart-sauce-labs-backpack');
  tshirtAdd = this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
  backpackRemove = this.page.locator('#remove-sauce-labs-backpack');
  shoppingCard = this.page.locator('#shopping_cart_container');
  shoppingCardValue = this.page.locator('.shopping_cart_badge');
  price = this.page.locator('.inventory_item_price');
}
