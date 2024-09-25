//import { When, Then, Given  } from "@cucumber/cucumber";
const { When, Then, Given} = require ('@cucumber/cucumber')
const { BasePage } = require  ("../../pageobjects/BasePage");
const {expect} = require ('@playwright/test')
const playwright = require ('@playwright/test')

Given ('Login to Ecommmerce web with {string} and {string}', {timeout: 10 * 1000}, async function (email,password){
    this.browsers = await playwright.chromium.launch({headless:false})
    const context = await this.browsers.newContext()
    const page = await context.newPage()
    this.basePage = new BasePage(page)
    const loginPage = this.basePage.getLoginPage()
    await loginPage.goto()
    await loginPage.ValidLogin(email,password)
})

When ('Add {string} to Cart', async function (productName) {
    this.dashboardPage = this.basePage.getDashboardPage()
    await this.dashboardPage.searchProduct(productName)
    await this.dashboardPage.navigateTocart()
} )

Then ('Verify {string} is displayed in the Cart', async function (productName) {
    const cartPage = this.basePage.getCartPage()
    await cartPage.verifyProductIsDisplayed(productName)
    await cartPage.checkOut()
})

When ('Enter valid details and place the Order', async function() {
    const ordersReviewPage = this.basePage.getOrdersReviewPage()
    await ordersReviewPage.searchCountryAndSelect('vi','Vietnam')
    await ordersReviewPage.VerifyEmailId('tunglam')
    this.orderId = await ordersReviewPage.submitAndGetOrderId()
    console.log(this.orderId)
})

Then ('Verify order in ther OrderHistory', async function() {
    await this.dashboardPage.navigateToOrders()
    const ordersHistoryPage = this.basePage.getOrdersHistoryPage()
    await ordersHistoryPage.searchOrderAndSelect(this.orderId)
    const orderIdDetails = await ordersHistoryPage.getOrderId()
    expect (this.orderId.includes(orderIdDetails)).toBeTruthy()
    this.browsers.close()
})