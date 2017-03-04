  Feature: As a user I should be able to see Computer Database Page
  
  @home
  Scenario: User navigates to the website and see Computer Database Home page with desired controls
    Given "Chrome" is launched and user navigates to homepage
    When title of the page is "Computers database"
    Then header of the page should display the "Play sample application — Computer database" link having "black" background color
    And label for total computers found should be displayed
    And computer database list table should be displayed
    And input field to filter the computers by name should be displayed
    And "Filter by name" button of "blue" color should be displayed
    And "Next" and "Previous" buttons in the footer is visible
    And pagination should be present in the footer



