package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {

	WebDriver driver;
	
	@Given("^Open Chrome and start application$")
	public void Open_Chrome_and_start_application() throws Throwable {
	    // Express the Regexp above with the code you wish you had

		System.setProperty("webdriver.chrome.driver", "C:\\MB&A\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");
		
	}

	//@When("^I enter valid username and valid password$")

	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void I_enter_valid_username_and_valid_password(String uname,String pwd) throws Throwable {
	    // Express the Regexp above with the code you wish you had

		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("pass")).sendKeys(pwd);
		
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    // Express the Regexp above with the code you wish you had

		driver.findElement(By.id("loginbutton")).click();
		
	}

	@Then("^application should be closed$")
	public void application_should_be_closed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.quit();
	}
	
}
