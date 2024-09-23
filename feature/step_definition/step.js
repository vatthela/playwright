import { When, Then, Given,  } from "@cucumber/cucumber";
import { BasePage } from "../../pageobjects/BasePage";

Given ('Login to Ecommmerce web with {username} and {password}', async function (username,password){
    const basePage = new BasePage(page)
    const loginPage = basePage.getLoginPage()
    await loginPage.goto()
    await loginPage.ValidLogin(data.email,data.password)
})