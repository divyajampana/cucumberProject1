package com.training.step;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.*;

public class Steps extends Reuse{
	@Given("^Launch Salesforce Application$")
	public void launch_Salesforce_Application() throws Throwable {
		InitializeDriver();
		Launch("https://login.salesforce.com/");
	}

	@When("^Enter User Name$")
	public void enter_User_Name() throws Throwable {
		WebElement Uname =findElement(By.xpath("//input[@name='username']"), "User Name");
		enterText(Uname, "User Name", "info.satishraju@gmail.com");
	}

	@When("^Clear Password field$")
	public void clear_Password_field() throws Throwable {
		WebElement Pwd =findElement(By.xpath("//input[@id='password']"), "Password");
		Pwd.clear();
		System.out.println("Password field is empty");
	}

	@Then("^Click on Log in button$")
	public void click_on_Log_in_buttons() throws Throwable {
		WebElement login =findElement(By.xpath("//*[@id='Login']"), "Login button");
		clickButton(login, "Login button");
	}

	@Then("^Error message displayed$")
	public void error_message_displayed() throws Throwable {
		WebElement errmsg =findElement(By.id("error"), "Error message");
		System.out.println(errmsg.getText());
	}

	
	@When("^Enter Password$")
	public void enter_Password() throws Throwable {
		WebElement Pwd =findElement(By.xpath("//input[@id='password']"), "Password");
		enterText(Pwd, "Password", "Divya@123");
	   
	}

	

	@Then("^Home page displayed$")
	public void home_page_displayed() throws Throwable {
		Thread.sleep(2000);
		System.out.println(driver.getTitle()+ "  is displayed");
	}
	
	@When("^check remember Me checkbox$")
	public void check_remember_Me_checkbox() throws Throwable {
		WebElement run = findElement(By.xpath("//input[@name='rememberUn']"), "RememberMe");
		selectCheckBox(run, "RememberMe");
	}

	@Then("^Log out of SFDC$")
	public void log_out_of_SFDC() throws Throwable {
		WebElement Usermenu = findElement(By.xpath("//span[@tabindex='0']"), "User Menu");
		clickButton(Usermenu, "User Menu");
		WebElement logout = findElement(By.xpath("//a[@title='Logout']"), "Logout");
		clickButton(logout, "Logout");
		Thread.sleep(2000);
		
	}

	@Then("^Check for Username field$")
	public void check_for_Username_field() throws Throwable {
		System.out.println(driver.getTitle() + " page is displayed");
	}

}
