import {test, expect} from '@playwright/test'

test.only('Popup Validate', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.goto('https://google.com')
    await page.goBack()
    await expect (page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect (page.locator('#displayed-text')).toBeHidden()
    await page.locator('#confirmbtn').click()
    page.on('dialog',dialog => dialog.accept());
    await page.locator("#mousehover").hover();
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByRole('link', {name: 'All Access plan'}).click()
    //await framePage.locator("li a[href='lifetime-access']:visible").click()
    //await framePage.locator("li a[href*='lifetime-access']:visible").click()
    await framePage.locator(".text h2").waitFor()
    const textCheck = await framePage.locator(".text h2").textContent()
    console.log(textCheck.split(" ")[1])
  
})