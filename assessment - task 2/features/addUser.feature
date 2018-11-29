Feature: Adding a user
  As an concerning stakeholder, I want to make sure I am able to add an user to our user list

#  Scenario: Access Add user popup modal
#    Given I navigate to the following "webtables"
#    Then the page title must be "Protractor practice website - WebTables"
#    And the user must see table row headers "First Name Last Name User Name Customer Role E-mail Cell Phone Locked"
#    When the user click on Add User button
#    Then the user must see "Add User" popup modal

    Scenario: Verify user can complete add user form
      Given I navigate to the following "webtables"
      And the user click on Add User button
#      And the user enters First Name "Jerowine"
#      And the user enters Last Name "Mckay"
#      And the user enters Username "jsmckay"
#      And the user enters Password "Password01"
#      And the user selects Customer "Company AAA"
#      And the user must see the value "Company AAA" is selected
      And the user selects Role "Sales Team"
#      And the user enters email address "jerowine@hotmail.com"
#      And the user enters Cell Phone 27715558888
#      When the user click on Save button
#      Then the user must see "Jerowine##Mckay##mckjerowine##Password01##Company BBB##Customer##jerowine@hotmail.com##27715558888##unchecked##Edit##x" added successfully
