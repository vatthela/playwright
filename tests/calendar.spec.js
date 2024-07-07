import { test, expect} from '@playwright/test'

test('calendar', async ({page}) => {
    const month = 7
    const date = 6
    const year = 2024
    const expectedList = [month,date,year]; 
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let i = 0; i <inputs.length; i++)
    {
        const value =inputs[i].getAttribute("value");
        expect(value).toEqual(expectedList[i]);
    }
})