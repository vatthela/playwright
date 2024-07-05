import {test , expect} from '@playwright/test';

test.only ('Special Locator', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByLabel('Check me out if you Love IceCreams!').check()
    await page.getByLabel('Gender').selectOption('Female')
    await page.getByLabel('Employed').check()
    await page.getByPlaceholder('Password').fill('Moihoc!1')
    await page.getByRole("button", {name:'Submit'}).click()
    await page.getByText(' The Form has been submitted successfully!.').isVisible()
    await page.pause()
})