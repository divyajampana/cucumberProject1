package com.training.runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\satishraju\\eclipse-workspace\\cucumber2\\src\\test\\java\\features\\training.feature", glue="com.training.step",  plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
		 "junit:target/cucumber-reports/Cucumber.xml",
		 "html:target/cucumber-reports"},
		 monochrome = true)
public class Runner1 {

}


