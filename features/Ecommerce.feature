Feature: Ecommmerce
    @Regresstion
    Scenario: Place the Order
        Given Login to Ecommmerce web with "<username>" and "<password>"
        When Add "<product>" to Cart
        Then Verify "<product 2>" is displayed in the Cart
        When Enter valid details and place the Order
        Then Verify order in ther OrderHistory
        Examples:
            | username | password | product |
            | tunglam@gmail.com  | Moihoc!1  | ZARA COAT 3  |