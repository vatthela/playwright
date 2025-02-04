const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {OrdersHistoryPage} = require('./OrdersHistoryPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {CartPage} = require('./CartPage');

// import { DashboardPage } from "./DashboardPage"
// import { LoginPage } from "./LoginPage"
// import { CartPage } from "./CartPage"
// import { OrdersHistoryPage } from "./OrdersHistoryPage"
// import { OrdersReviewPage } from "./OrdersReviewPage"

class BasePage{

    constructor(page){
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
        this.carPage = new CartPage(page)
        this.ordersHistoryPage = new OrdersHistoryPage(page)
        this.ordersReviewPage = new OrdersReviewPage(page)
    }

    getLoginPage(){
        return this.loginPage
    }

    getDashboardPage(){
        return this.dashboardPage
    }

    getCartPage(){
        return this.carPage
    }

    getOrdersHistoryPage(){
        return this.ordersHistoryPage
    }

    getOrdersReviewPage(){
        return this.ordersReviewPage
    }


}

module.exports = {BasePage}