Feature: ErrorValidation
    @Validation
    Scenario: Place the Order
        Given Login to Ecommmerce2 web with "<username>" and "<password>"
        Then Verify Error message is displayed in the Cart
        Examples:
            | username | password | product |
            | tunglam@gmail.com  | Moihoc!1  | ZARA COAT 3  |