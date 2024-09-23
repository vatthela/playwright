//import { When, Then, Given  } from "@cucumber/cucumber";
const { When, Then, Given} = require ('@cucumber/cucumber')
const { BasePage } = require  ("../../pageobjects/BasePage");

const {playwright} = require ('@playwright/test')

Given ('Login to Ecommmerce web with {username} and {password}', async function (username,password){
    const browsers = await playwright.chromnim.launch()
    const context = await browsers.newContext()
    const page = await context.newPage()
    this.basePage = new BasePage(page)
    const loginPage = basePage.getLoginPage()
    await loginPage.goto()
    await loginPage.ValidLogin(data.email,data.password)
})

When ('Add {product} to Cart', async function (product) {
    this.dashboardPage = this.basePage.getDashboardPage()
    await dashboardPage.searchProduct(data.productName)
    await dashboardPage.navigateTocart()
} )

Then ('Verify {product}  is displayed in the Cart', async function (product) {
    const cartPage = this.basePage.getCartPage()
    await cartPage.verifyProductIsDisplayed(data.productName)
    await cartPage.checkOut()
})

When ('Enter valid details and place the Order', async function () {
    const ordersReviewPage = this.basePage.getOrdersReviewPage()
    await ordersReviewPage.searchCountryAndSelect('vi','Vietnam')
    await ordersReviewPage.VerifyEmailId('tunglam')
    const orderId = await ordersReviewPage.submitAndGetOrderId()
    console.log(orderId)
})
(
Then ('Verify order in ther OrderHistory'), async function () {
    await this.dashboardPage.navigateToOrders()
    const ordersHistoryPage = this.basePage.getOrdersHistoryPage()
    await ordersHistoryPage.searchOrderAndSelect(orderId)
    const orderIdDetails = await ordersHistoryPage.getOrderId()
    expect (orderId.includes(orderIdDetails)).toBeTruthy()
})