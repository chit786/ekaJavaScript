  Feature: As a user I should be able to edit any computer details from the computer list
    
    @edit
    Scenario: Verify Edit computer Validation for Computer Database website
      Given user is on homepage of computer database page
      Then user note first computer details in the list
      And clicks on the name of first computer in the list
      And Computer Edit page should be opened
      And Edit page should display Save this computer and Cancel buttons
      And Delete this computer button should exist
      And user clicks Cancel button
      Then user sees homepage
      And clicks on the name of first computer in the list
      And Computer Edit page should be opened
      And append "NIA123" at the end of the name of the computer
      And change introduced date to "0001-01-01"
      And change discontinued date to "0001-01-01"
      And change company to "Apple Inc."
      And click Save this computer button
      Then user navigates to homepage
      And user sees edit confirmation message

