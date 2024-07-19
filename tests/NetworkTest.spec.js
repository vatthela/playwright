import {test, expect, request } from '@playwright/test'
import { APIUtils } from './Utils/APIUtils'

let token
let orderId
test.beforeAll('Login', async ({}) => {
    // Login API
    const apiConText = await request.newContext();
    const apiUtils = new APIUtils({apiConText})
    token = await apiUtils.getToken()
    orderId = await apiUtils.CreateOrder(token)

})

//Verify order created is showing in history order
test ('Place the Order' , async ({page}) =>{
    page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    }, token )

    // const email = 'tunglam@gmail.com'
    // const password = 'Moihoc!1'
    const products = page.locator('.card-body')
    await page.goto("https://rahulshettyacademy.com/client/")
    // await page.locator("#userEmail").fill(email)
    // await page.locator("#userPassword").fill(password)
    // await page.locator("[value='Login']").click()
    // await page.waitForLoadState('networkidle')

    
    await page.locator('.card-body').nth(0).waitFor()
    const titles = await products.allTextContents()
    console.log(titles)

    //Zara Coat 3
    await page.locator('button[routerlink="/dashboard/myorders"]').click()
    await page.locator('tbody').waitFor()
    const rows = page.locator('tbody tr')


    await page.pause()

});

