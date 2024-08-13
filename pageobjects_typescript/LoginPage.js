class LoginPage {

    constructor (page) {
        this.email = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.login = page.locator("[value='Login']")
        this.page = page
    }


    async goto() {
        await this.page.goto("https://rahulshettyacademy.com/client/")
    }

    async ValidLogin (email, password){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.login.click()
        await this.page.waitForLoadState('networkidle')

    }
}
module.exports = {LoginPage}