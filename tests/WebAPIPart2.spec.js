import {test, expect , request} from '@playwright/test'

//Login
//Test: Cart, Order, Order detail, Order History
const email = 'tunglam@gmail.com'
const password = 'Moihoc!1'
let webContext
test.beforeAll('API Part 2' ,async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill(email)
    await page.locator("#userPassword").fill(password)
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle')
    //Save storageState
    await context.storageState({path: 'state.json'})
    // Declare token into storageState
    webContext = await browser.newContext({storageState:'state.json'})
})

test ('Page Client App Login' , async () =>{   

    const page = await webContext.newPage()    
    
    await page.goto("https://rahulshettyacademy.com/client/")
    const products = page.locator('.card-body')
    await page.locator('.card-body').nth(0).waitFor()
    const titles = await products.allTextContents()
    console.log(titles)

    //Zara Coat 3
    const productName = 'ZARA COAT 3'
    for (let i = 0; i < await products.count(); i++) {
        if (await products.nth(i).locator('b').textContent() == productName) {
            await products.nth(i).locator('text= Add To Cart').click()
            break
        } 
    }
    await page.locator('[routerlink*="cart"]').click()
    await page.locator("div li").first().waitFor()
    await expect (page.locator(`h3:has-text('${productName}')`)).toBeVisible()
    await page.locator('text=Checkout').click()
    await page.locator('[placeholder="Select Country"]').pressSequentially('vi')   
    const dropdown = page.locator('.ta-results')
    await dropdown.waitFor()
    const countDropdown = dropdown.locator('button')
    for (let i = 0; i < await countDropdown.count(); i++) {
        const text = await countDropdown.nth(i).textContent()
        if (text == ' Vietnam') {
            await countDropdown.nth(i).click()
            break
        }

    }
    await expect(page.locator('.user__name [type="text"]').first()).toContainText("tunglam")
    await page.locator('.action__submit').click()
    await expect (page.locator('.hero-primary')).toContainText("Thankyou for the order")
    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent()
    console.log(orderId)
    await page.locator('button[routerlink="/dashboard/myorders"]').click()
    await page.locator('tbody').waitFor()
    const rows = page.locator('tbody tr')
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator('th').textContent()
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator('.btn-primary').first().click()
        }
    } 
    const orderIdDetails = await page.locator('.col-text').textContent()
    expect (orderId.includes(orderIdDetails)).toBeTruthy()
    //await page.pause()

});


test ('Test case Injected StorageState' , async () =>{   
    const page = await webContext.newPage()    
    await page.goto("https://rahulshettyacademy.com/client/")
    const products = page.locator('.card-body')
    await page.locator('.card-body').nth(0).waitFor()
    const titles = await products.allTextContents()
    console.log(titles)
})