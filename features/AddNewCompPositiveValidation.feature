Feature: User should be able to add new computer to the database

  @add
  Scenario: User should be able to add new computer : positive scenario
    Given user is on homepage
    When User clicks on Add new computer button
    Then Add a computer page should be displayed
    And user clicks on Cancel button
    Then Homepage should be displayed
    And note the total number of computers
    When User clicks on Add new computer button
    Then Add a computer page should be displayed
    And user enters "NIA123" as Computer name
    And enters "2017-01-04" as Introduced date
    And enters "2017-12-01" as Discontinued date
    And selects "Samsung Electronics" as company
    And clicks on Create this computer button
    Then user should be redirected to homepage
    And gets a confirmation message "Done! Computer NIA123 has been created"
    And the total number of computers should be increased by 1
