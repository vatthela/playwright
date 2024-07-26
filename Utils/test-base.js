import test from '@playwright/test'


const testDataForOder = {
    email : "tunglam@gmail.com",
    password : "Moihoc!1",
    productName: "ZARA COAT 3"
}

const customtest = test.extend({
    testDataForOder
})

export {customtest}