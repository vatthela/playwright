import { expect, type Locator, type Page } from "@playwright/test";
export class DashboardPage
{
    productsLocation: Locator
    cart: Locator;
    orders: Locator;
    constructor(page:Page)
    {
        this.productsLocation = page.locator('.card-body')
        this.cart = page.locator('[routerlink*="cart"]')
        this.orders = page.locator('button[routerlink="/dashboard/myorders"]')
    }

    async searchProductAndAddToCart(productName:String){

        await this.productsLocation.nth(0).waitFor()
        const titles = await this.productsLocation.allTextContents()
        console.log(titles)
        for (let i = 0; i < await this.productsLocation.count(); i++) {
            if (await this.productsLocation.nth(i).locator('b').textContent() == productName) {
                await this.productsLocation.nth(i).locator('text= Add To Cart').click()
                break
            } 
        }
    }

    async navigateTocart(){
        await this.cart.click()
    }

    async navigateToOrders(){

        await this.orders.click()
    }
}

module.exports = {DashboardPage}