$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/satishraju/eclipse-workspace/cucumber2/src/test/java/features/training.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "I want to use this template for my feature file",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Login Error Message - 1",
  "description": "",
  "id": "login-feature;login-error-message---1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Launch Salesforce Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter User Name",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Clear Password field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Error message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.launch_Salesforce_Application()"
});
formatter.result({
  "duration": 245139156,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.collect.ImmutableList.asImmutableList([Ljava/lang/Object;I)Lcom/google/common/collect/ImmutableList;\r\n\tat com.google.common.collect.ImmutableList$Builder.build(ImmutableList.java:866)\r\n\tat org.openqa.selenium.os.WindowsUtils.getPathsInProgramFiles(WindowsUtils.java:85)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.locateFirefoxBinariesFromPlatform(FirefoxBinary.java:403)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:109)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat com.training.step.Reuse.InitializeDriver(Reuse.java:21)\r\n\tat com.training.step.Steps.launch_Salesforce_Application(Steps.java:11)\r\n\tat ✽.Given Launch Salesforce Application(C:/Users/satishraju/eclipse-workspace/cucumber2/src/test/java/features/training.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.enter_User_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clear_Password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_Log_in_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Login To SalesForce -2",
  "description": "",
  "id": "login-feature;login-to-salesforce--2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Launch Salesforce Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter User Name",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Home page displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.launch_Salesforce_Application()"
});
formatter.result({
  "duration": 894914,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.collect.ImmutableList.asImmutableList([Ljava/lang/Object;I)Lcom/google/common/collect/ImmutableList;\r\n\tat com.google.common.collect.ImmutableList$Builder.build(ImmutableList.java:866)\r\n\tat org.openqa.selenium.os.WindowsUtils.getPathsInProgramFiles(WindowsUtils.java:85)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.locateFirefoxBinariesFromPlatform(FirefoxBinary.java:403)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:109)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat com.training.step.Reuse.InitializeDriver(Reuse.java:21)\r\n\tat com.training.step.Steps.launch_Salesforce_Application(Steps.java:11)\r\n\tat ✽.Given Launch Salesforce Application(C:/Users/satishraju/eclipse-workspace/cucumber2/src/test/java/features/training.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.enter_User_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.enter_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_Log_in_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.home_page_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Test the remember username check box",
  "description": "",
  "id": "login-feature;test-the-remember-username-check-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "Launch Salesforce Application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Enter User Name",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "check remember Me checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on Log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Log out of SFDC",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check for Username field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.launch_Salesforce_Application()"
});
formatter.result({
  "duration": 956102,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.collect.ImmutableList.asImmutableList([Ljava/lang/Object;I)Lcom/google/common/collect/ImmutableList;\r\n\tat com.google.common.collect.ImmutableList$Builder.build(ImmutableList.java:866)\r\n\tat org.openqa.selenium.os.WindowsUtils.getPathsInProgramFiles(WindowsUtils.java:85)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.locateFirefoxBinariesFromPlatform(FirefoxBinary.java:403)\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:109)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat com.training.step.Reuse.InitializeDriver(Reuse.java:21)\r\n\tat com.training.step.Steps.launch_Salesforce_Application(Steps.java:11)\r\n\tat ✽.Given Launch Salesforce Application(C:/Users/satishraju/eclipse-workspace/cucumber2/src/test/java/features/training.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.enter_User_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.enter_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.check_remember_Me_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_Log_in_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.log_out_of_SFDC()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.check_for_Username_field()"
});
formatter.result({
  "status": "skipped"
});
});