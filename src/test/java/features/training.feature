
Feature: Login feature
  I want to use this template for my feature file


  
  Scenario: Login Error Message - 1

    Given Launch Salesforce Application
    When Enter User Name
    And Clear Password field
    Then Click on Log in button
    And Error message displayed
    
    
  Scenario: Login To SalesForce -2

    Given Launch Salesforce Application
    When Enter User Name
    And Enter Password
    Then Click on Log in button
    And Home page displayed
    
      Scenario: Test the remember username check box 

    Given Launch Salesforce Application
    When Enter User Name
    And Enter Password
    And check remember Me checkbox
    Then Click on Log in button
    And Log out of SFDC
    And Check for Username field
    
    

    
  

  
