Feature: Login feature
  I want to use this template for my feature file


  
  Scenario: Login Error Message - 1

    Given Launch Salesforce Application
    When Enter User Name
    And Clear Password field
    Then Click on Log in button
    And Error message displayed