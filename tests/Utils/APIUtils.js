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
        expect (loginResponse.ok()).toBeTruthy()
        const loginResponseJson = await loginResponse.json()
        token = loginResponseJson.token
        console.log(token) 
        return token
    }

    async CreateOrder (){
        //Precondition - create order
        const orderResponse = await apiConText.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
                data: {orders:[{country:"Vietnam",productOrderedId:"6581ca399fd99c85e8ee7f45"}]},
                headers: {
                    'Authorization': this.token,
                    'Content-Type':'application/json'
                }
            }
        )
        const orderResponseJson = await orderResponse.json()
        console.log(orderResponseJson)
        orderId = orderResponseJson.orders[0]
        return orderId
    }
}