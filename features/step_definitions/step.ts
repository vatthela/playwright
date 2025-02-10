import { When, Then, Given,  } from "@cucumber/cucumber";
import { BasePage } from "../../pageobjects_ts/BasePage";
import { Browser, chromium } from 'playwright'

Given ('Login to Ecommmerce web with {username} and {password}', async function (username,password){
    let browser: Browser;
    browser = await chromium.launch()
             const context = await browser.newContext(); // Môi trường trình duyệt
         const page = await context.newPage(); // Mở new Page
    const basePage = new BasePage(page)
    const loginPage = basePage.getLoginPage()
    await loginPage.goto()
    //await loginPage.ValidLogin(data.email,data.password)
})