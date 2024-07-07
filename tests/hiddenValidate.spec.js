import {test, expect} from '@playwright/test'

test('Popup Validate', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.goto('https://google.com')
    await page.goBack()
    await expect (page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect (page.locator('#displayed-text')).toBeHidden()

    await page.locator('#confirmbtn').click()
    await page.pause()
    page.on('dialog',dialog => dialog.accept());
    await page.locator("#mousehover").hover();
    

})