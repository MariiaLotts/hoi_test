Feature: Registration on US Landing page with email manual

LP: sso-u-s3

Scenario:  Use valid values and complete registration flow

Given: I am on the Landing 
When I input valid values (username,password,BDate,zipcode,email)
And I can move to the next step
Then I am on verification page, registration completed

