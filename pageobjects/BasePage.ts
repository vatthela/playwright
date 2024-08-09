import { DashboardPage } from "./DashboardPage";
import { LoginPage } from "./LoginPage";
import { CartPage } from "./CartPage";
import { OrdersHistoryPage } from "./OrdersHistoryPage";
import { OrdersReviewPage } from "./OrdersReviewPage";

class BasePage {
    private loginPage: LoginPage;
    private dashboardPage: DashboardPage;
    private cartPage: CartPage;
    private ordersHistoryPage: OrdersHistoryPage;
    private ordersReviewPage: OrdersReviewPage;

    constructor(page: any) {
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.ordersHistoryPage = new OrdersHistoryPage(page);
        this.ordersReviewPage = new OrdersReviewPage(page);
    }

    getLoginPage(): LoginPage {
        return this.loginPage;
    }

    getDashboardPage(): DashboardPage {
        return this.dashboardPage;
    }

    getCartPage(): CartPage {
        return this.cartPage;
    }

    getOrdersHistoryPage(): OrdersHistoryPage {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage(): OrdersReviewPage {
        return this.ordersReviewPage;
    }
}

export { BasePage };
