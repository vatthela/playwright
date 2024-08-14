import { expect } from "@playwright/test"

export class APIUtils{
    constructor ({apiConText}){
        this.apiConText = apiConText
    }

    async getToken (){
        const loginResponse = await this.apiConText.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data:{userEmail:"tunglam@gmail.com",userPassword:"Moihoc!1"}
            }
        )
        // Check status code 200
        expect (await loginResponse.ok()).toBeTruthy()
        const loginResponseJson = await loginResponse.json()
        var token = await loginResponseJson.token
        console.log(token) 
        return token
    }

    async CreateOrder (token){
        //Precondition - create order

        const orderResponse = await this.apiConText.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
                data: {orders:[{country:"Vietnam",productOrderedId:"6581ca399fd99c85e8ee7f45"}]},
                headers: {
                    'Authorization': token,
                    'Content-Type':'application/json'
                }
            }
        )
        const orderResponseJson = await orderResponse.json()
        console.log(orderResponseJson)
        var orderId = await orderResponseJson.orders[0]
        return orderId
    }
}