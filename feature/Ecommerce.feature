Feature: Ecommmerce
    Scenario: Place the Order
        Given Login to Ecommmerce web with "username" and "password"
        When Add "product" to Cart
        Then Verify "product" is displayed in the Cart
        When Enter valid details and place the Order
        Then Verify order in ther OrderHistory