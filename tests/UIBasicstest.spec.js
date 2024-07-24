const {test, expect} = require("@playwright/test");
const { isContext } = require("vm");

test ('Browser Context Playwright test' , async ({page, context}) =>
    {         
        // const context = await browser.newContext(); // Môi trường trình duyệt
        // const page = await context.newPage(); // Mở new Page

        const username = page.locator("//input[@id='username']")
        const signIn = page.locator('#signInBtn')
        const cardTitle = page.locator('.card-body')
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // Thao tác trên page
        await username.fill("rahulshettya", { timeout: 1000})
        await page.locator("#password").fill("learning", { timeout: 1000})
        await signIn.click()
        console.log(await page.locator("[style*='block']").textContent())
        await expect (page.locator("[style*='block']")).toContainText("Incorrect")
        await username.fill("")
        await username.fill("rahulshettyacademy")
        await signIn.click()
        
        console.log(await cardTitle.nth(0).textContent())   //Get 1 element, have auto-waiting

        //console.log(await cardTitle.textContent())
        const allTitle = await cardTitle.allTextContents() //Get All element, no auto-waiting
        console.log(allTitle)
        // await expect(allTitle)


    });

test ('UI Control' , async ({page}) =>
    {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); // Thao tác trên page
        const username = page.locator("//input[@id='username']")
        const signIn = page.locator('#signInBtn')
        const term = page.locator('#terms')
        const documentlink = page.locator('[href*=documents-request]')  // *= is contanin documents-request
        const dropdown = page.locator('select.form-control')
        await dropdown.selectOption('consult')
        await page.locator('.radiotextsty').last().click()
        await page.locator('#okayBtn').click()
        console.log(await page.locator('.radiotextsty').last().isChecked()) //Return true or false
        await expect(page.locator('.radiotextsty').last()).toBeChecked()    //Test checkbox, check checked

        await term.check()
        await expect(term).toBeChecked()
        await term.uncheck()
        expect(await term.isChecked()).toBeFalsy()  //ischecked return boolean and tofalsy check
        await expect(documentlink).toHaveAttribute("class","blinkingText")
        

    });

test('Child Windows Handle', async ({browser}) =>
    {
        const context = await browser.newContext(); // Môi trường trình duyệt
        const page = await context.newPage(); // Mở new Page
        const username = page.locator("//input[@id='username']")
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")    
        const documentlink = page.locator('[href*=documents-request]')

        // await documentlink.click()   //cách 1
        // const newPage = await context.waitForEvent('page') //listen for any new page

        const [newPage] = await Promise.all([   //cách 2
            context.waitForEvent('page'),
            documentlink.click()  //Open new page
        ])

        let text = await newPage.locator('.red').innerText()
        const arrayText = text.split('@')
        const domain = arrayText[1].split(' ')[0]
        const email = arrayText[0].split(' ')[4] + '@' +domain
        console.log(domain)
        console.log(email)
        await username.fill(domain)
        console.log(await username.textContent())

       // const page2 = page.waitForEvent('page') //listen for any new page

    })


            // const context = await browser.newContext()
        // const page = await context.newPage()

        


test('QC', async ({page}) => 
    {

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        
    }

)


test('test 2', async ({browser}) => 
    {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        
    }
)