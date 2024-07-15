import {test, expect } from '@playwright/test'



test('Test API', async ({page}) => {
    page.locator ('.h').click()
    expect (page.locator('.3')).toBeVisible()
})