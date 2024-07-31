const {test, expect} = require("@playwright/test");
import { BasePage } from "../../pageobjects/BasePage";


test ('@smoke Page Client App Login For' , async ({page}) =>{   
    const basePage = new BasePage(page)
    const email = 'tunglam@gmail.com'
    const password = 'Moihoc!1'
    const productName = 'ZARA COAT 3'   //Zara Coat 3

    const loginPage = basePage.getLoginPage()
    await loginPage.goto()
    await loginPage.ValidLogin(email,password)

    const dashboardPage = basePage.getDashboardPage()
    await dashboardPage.searchProduct(productName)
    await dashboardPage.navigateTocart()

    const cartPage = basePage.getCartPage()
    await cartPage.verifyProductIsDisplayed(productName)
    await cartPage.checkOut()

    const ordersReviewPage = basePage.getOrdersReviewPage()
    await ordersReviewPage.searchCountryAndSelect('vi','Vietnam')
    // await page.locator('[placeholder="Select Country"]').pressSequentially('vi')   
    // const dropdown = page.locator('.ta-results')
    // await dropdown.waitFor()
    // const countDropdown = dropdown.locator('button')
    // for (let i = 0; i < await countDropdown.count(); i++) {
    //     const text = await countDropdown.nth(i).textContent()
    //     if (text == ' Vietnam') {
    //         await countDropdown.nth(i).click()
    //         break
    //     }

    // }
    await ordersReviewPage.VerifyEmailId('tunglam')
    //await expect(page.locator('.user__name [type="text"]').first()).toContainText("tunglam")
    // await page.locator('.action__submit').click()
    // await expect (page.locator('.hero-primary')).toContainText("Thankyou for the order")
    const orderId = await ordersReviewPage.submitAndGetOrderId()
    console.log(orderId)
    await dashboardPage.navigateToOrders()

    const ordersHistoryPage = basePage.getOrdersHistoryPage()
    await ordersHistoryPage.searchOrderAndSelect(orderId)
    // await page.locator('tbody').waitFor()
    // const rows = page.locator('tbody tr')
    // for (let i = 0; i < await rows.count(); i++) {
    //     const rowOrderId = await rows.nth(i).locator('th').textContent()
    //     if (orderId.includes(rowOrderId)) {
    //         await rows.nth(i).locator('.btn-primary').first().click()
    //     }
    // } 
    
    const orderIdDetails = await ordersHistoryPage.getOrderId()
    expect (orderId.includes(orderIdDetails)).toBeTruthy()
    //await page.pause()

})