package com.training.step;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;


public class Reuse {
	static WebDriver driver;
	

	
	public static void InitializeDriver() {
		System.setProperty("webdriver.gecko.driver", "C:\\Program Files\\Seleniumdrivers\\geckodriver.exe");
		driver = new FirefoxDriver();
	}


	public static void Launch(String url) {
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		System.out.println(url);
		System.out.println("Browser launched, SFDC login page is displayed");
		
	}

	public static void enterText(WebElement obj, String objName, String textValue) {
		if(obj == null)
		{
			return;
		}
		if(obj.isDisplayed()) {
			obj.sendKeys(textValue);
			System.out.println("Pass: " + textValue + " textValue  entered in "+ objName );
			

		}else
		{
			System.out.println("Fail: " + objName + " could not be found");
		}
	}

	

	public static void clickButton(WebElement obj, String objName)
	{
		if(obj == null)
		{
			return;
		}

		if(obj.isDisplayed()) {

			obj.click();

			System.out.println("Pass: clicked on " +objName  );
			

		}else
		{
			System.out.println("Fail: " + objName + " could not be found ");
			
		}
	}
	public static void selectCheckBox(WebElement obj, String objName)
	{
		if(obj == null)
		{
			return;
		}

		if(obj.isDisplayed()) {
			if(!obj.isSelected())
			{
				obj.click();
				System.out.println("Pass: checkbox " +objName + " is selected " );
				
			}else
			{
				System.out.println("Fail: " + objName + " could not be found ");
			}
		}


	}

	public static void clickLink(WebElement obj, String objName)
	{
		if(obj == null)
		{
			return;
		}

		if(obj.isDisplayed()) {

			obj.click();

			System.out.println("Pass: " +objName + " is selected" );
			

		}else
		{
			System.out.println("Fail: " + objName + " could not be found ");
		}
	}
	public static void dropdown(WebElement obj, String objName, int index) 
	{
		if(obj == null)
		{
			return;
		}
		if(obj.isDisplayed()) {
			Select select =new Select(obj);
			select.selectByIndex(index);;

			System.out.println("Pass: Dropdown" +objName + " is selected" );
			
		}else
		{
			System.out.println("Fail: " + objName + " could not be found ");
		}

	}
	public static void mouseHover(WebElement obj, String objName)
	{
		if(obj.isDisplayed()) {
			Actions action = new Actions(driver);
			action.moveToElement(obj).build().perform();
			System.out.println("PASS: MouseHovered on "+objName);
			
		}else
		{
			System.out.println("FAIL: "+objName + " could not be found ");
		}
	}

	public static WebElement findElement(By location, String objName)
	{
		WebElement obj = null;
		try
		{
			obj=driver.findElement(location);
			System.out.println("Pass: "+ objName + " found on the page.");
			
		}catch(NoSuchElementException errMessage) {
			System.out.println("Fail: " + objName + " could not be found on the page.");
		}
		return obj;
	}

}
