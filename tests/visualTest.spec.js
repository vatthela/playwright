import {test, expect} from '@playwright/test'

test.describe.configure({mode:'serial'})
test ('Screenshot', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect (page.locator('#displayed-text')).toBeVisible()
    await page.locator('#displayed-text').screenshot({path: 'elementScreenShot.jpg'})
    await page.locator('#hide-textbox').click()
    await page.screenshot({path: 'pageScreenShot.jpg'})
    await expect (page.locator('#displayed-text')).toBeHidden()
})

test ('Visual Test', async({page})=>{
    await page.goto('https://www.google.com')
    await page.screenshot({path:'landing.png'})
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

test ('test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/upload-download-test/')
    const textSearch = 'Mango'
    const textLocation = page.getByText(textSearch)
    const desiredRow = page.getByRole('row').filter({has: textLocation})
    console.log(desiredRow)
})
