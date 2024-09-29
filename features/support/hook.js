const { After, Before, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test')
const { BasePage } = require("../../pageobjects/BasePage");


Before(async function () {
  this.browsers = await playwright.chromium.launch({ headless: false })
  const context = await this.browsers.newContext()
  this.page = await context.newPage()
  this.basePage = new BasePage(this.page)
});

After(async function () {
  this.browsers.close()
})


BeforeStep(async function () {

})


AfterStep(async function ({ result }) {
  if (result.status == Status.FAILED) {
    await this.page.screenshot({path: 'screenshotFaild.jpg'})
  }
})