package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class stepDefinition {
	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Prasad\\selenium_projects\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.freecrm.com/index.html");
	}
	
	@When("^title of Free CRM logo$")
	public void title_of_Free_CRM_logo(){
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}

	@Then("^enter \"(.*)\" and \"(.*)\" and click on login button$")
	public void enter_username_and_password_click_login_button(String username,String password) throws InterruptedException{
	   driver.findElement(By.name("username")).sendKeys(username);
	   driver.findElement(By.name("password")).sendKeys(password);
	   Thread.sleep(3000);
	   driver.findElement(By.xpath("//input[@type='submit'and @value='Login']")).click();
	}

	@Then("^user is able to go home page$")
	public void user_is_able_to_go_home_page(){
		    String title1=driver.getTitle();
		    System.out.println(title1);
		    Assert.assertEquals("CRMPRO", title1);
	}
	
	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}

}

