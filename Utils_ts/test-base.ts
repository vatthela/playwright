import {test} from '@playwright/test'

interface TestDataForOrder{
  email : string
  password : string
  productName: string
}
const testDataForOrder:TestDataForOrder = {
  email : "tunglam@gmail.com",
  password : "Moihoc!1",
  productName: "ZARA COAT 3"
}

const customTest = test.extend<{ testDataForOrder: TestDataForOrder }>({
  testDataForOrder
})

export {customTest}