package stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class dealstepwithMapDefinition {
	//maps with parametiraztion data driven testing
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

	@Then("^enter username and password and click on login button$")
	public void enter_username_and_password_click_login_button(DataTable logindetails) throws InterruptedException{
		for(Map<String,String> data:logindetails.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@type='submit'and @value='Login']")).click();
		}
	}

	@Then("^user is able to go home page$")
	public void user_is_able_to_go_home_page() throws InterruptedException{
		    String title1=driver.getTitle();
		    System.out.println(title1);
		    Assert.assertEquals("CRMPRO", title1);
		    Thread.sleep(2000);
	}
	
	@Then("^user is move to deals page$")
	public void user_is_move_to_deals_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
	    driver.findElement(By.xpath("//a[text()='New Deal']")).click();
	   
	}
	
	@Then("^user enter deals deatils$")
	public void user_enter_deals_deatils(DataTable deals) throws Throwable {
		for(Map<String,String> data:deals.asMaps(String.class, String.class)) {
			driver.findElement(By.id("title")).sendKeys(data.get("title"));
		    driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
		    driver.findElement(By.id("commission")).sendKeys(data.get("commision"));
		    driver.findElement(By.xpath("//*[@id=\"prospectForm\"]/table/tbody/tr[1]/td/input[1]")).click();
		    
		    Actions action=new Actions(driver);
		    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		    driver.findElement(By.xpath("//a[text()='New Deal']")).click();
		   
		}
	}
	
	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}
}
