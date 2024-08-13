import { expect, type Locator, type Page } from "@playwright/test";
export class CartPage
{
    page: Page;
    cartProducts: Locator
    productsText: Locator;
    cart: Locator;
    orders: Locator;
    checkout: Locator;

constructor(page: Page)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}

async verifyProductIsDisplayed(productName: Page)
{
   
    await this.cartProducts.waitFor();
    const bool = await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();

}

async checkOut()
{
    await this.checkout.click();
}

 getProductLocator(productName: Page)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}

}
module.exports = {CartPage};