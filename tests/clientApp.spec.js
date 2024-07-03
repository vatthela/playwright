const {test, expect} = require("@playwright/test");


test.only ('Page Client App Login' , async ({page}) =>{   
    const products = page.locator('.card-body')
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill('tunglam@gmail.com')
    await page.locator("#userPassword").fill("Moihoc!1")
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle')
    await page.locator('.card-body').nth(0).waitFor()
    const titles = await products.allTextContents()
    console.log(titles)

    //Zara Coat 3
    const productName = 'ZARA COAT 3'
    for (let i = 0; i < await products.count(); i++) {
        if (await products.nth(i).locator('b').textContent() === productName) {
            await products.nth(i).locator('text()=" Add To Cart"').click()
            break
        } 
    }
    await page.locator('[routerlink*="cart"]').click()
    expect (await page.locator('h3:has-text("${productName}")').isVisible())
    page.pause()
});