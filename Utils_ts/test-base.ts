import {test} from '@playwright/test'


interface testDataForOder{
  email : string
  password : string
  productName: string
}
const testDataForOder:TestDataForOrder = {
    email : "tunglam@gmail.com",
    password : "Moihoc!1",
    productName: "ZARA COAT 3"
}

const customTest = test.extend({
    testDataForOder
})

export {customTest}

