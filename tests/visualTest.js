import {test, expect} from '@playwright/test'

test ('Screenshot', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect (page.locator('#displayed-text')).toBeVisible()
    await page.locator('#displayed-text').screenshot({path: 'elementScreenShot.jpg'})
    await page.locator('#hide-textbox').click()
    await page.screenshot({path: 'pageScreenShot.jpg'})
    await expect (page.locator('#displayed-text')).toBeHidden()
})

test.only ('Visual Test', async({page})=>{
    await page.goto('https://www.google.com/')
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})