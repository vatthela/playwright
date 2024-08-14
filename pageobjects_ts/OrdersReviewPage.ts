import { expect, type Locator, type Page } from "@playwright/test";


export class OrdersReviewPage
{
    page: Page;
    country: Locator;
    dropdown: Locator;
    emailId: Locator;
    submit: Locator;
    orderConfirmationText: Locator;
    orderId: Locator;

    constructor(page:Page){
        this.page = page;
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submit =  page.locator(".action__submit");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async searchCountryAndSelect(countryCode:any,countryName:String)
    {

        await this.country.type(countryCode,{delay:100});
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for(let i =0;i< optionsCount; ++i)
        {
        let text: any =  await this.dropdown.locator("button").nth(i).textContent();
            if(text.trim() === countryName)
            {
            await this.dropdown.locator("button").nth(i).click();
            break;
            }
        }

    }

async VerifyEmailId(username)
{
    await expect(this.emailId).toContainText(username);
}

async submitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}
}
module.exports = {OrdersReviewPage};
   