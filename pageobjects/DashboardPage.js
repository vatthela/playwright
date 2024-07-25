class DashboardPage
{
    constructor(page)
    {
        this.productsLocation = page.locator('.card-body')
        this.cart = page.locator('[routerlink*="cart"]')
    }

    async searchProduct(productName){

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