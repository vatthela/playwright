const {test, expect} = require("@playwright/test");


test ('Page Client App Login' , async ({page}) =>
    {
        await page.goto("https://rahulshettyacademy.com/client/")
        await page.locator("#userEmail").fill('anshika@gmail.com')
        await page.locator("#userPassword").fill("Iamking@000")
        await page.locator("[value='Login']").click()
        await page.waitForLoadState('networkidle')
        await page.locator('.card-body').nth(0).waitFor()
        const titles = await page.locator('.card-body').allTextContents()
        console.log(titles)
    }); 