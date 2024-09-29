//import { When, Then, Given  } from "@cucumber/cucumber";
const { When, Then, Given} = require ('@cucumber/cucumber')
const {expect} = require ('@playwright/test')
const playwright = require ('@playwright/test')

Given ('Login to Ecommmerce web with {string} and {string}', {timeout: 10 * 1000}, async function (email,password){
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

})



Given ('Login to Ecommmerce2 web with {string} and {string}', {timeout: 10 * 1000}, async function (email,password){
    const userName = this.page.locator("//input[@id='username']")
    const signIn = this.page.locator('#signInBtn')
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // Thao tác trên page
    await userName.fill(email, { timeout: 1000})
    await this.page.locator("#password").fill(password, { timeout: 1000})
    await signIn.click()

})

Then('Verify Error message is displayed in the Cart', async function () {
    console.log(await this.page.locator("[style*='block']").textContent())
    await expect (this.page.locator("[style*='block']")).toContainText("Incorrect")
  })