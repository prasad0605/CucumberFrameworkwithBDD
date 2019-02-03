//package stepDefinition;
//
//import java.util.List;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.*;
//
//public class dealsdefinition {
//
//	WebDriver driver;
//	@Given("^user is already on login page$")
//	public void user_is_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Prasad\\selenium_projects\\chromedriver_win32\\chromedriver.exe");
//		driver=new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.get("https://www.freecrm.com/index.html");
//	}
//	
//	@When("^title of Free CRM logo$")
//	public void title_of_Free_CRM_logo(){
//	    String title=driver.getTitle();
//	    System.out.println(title);
//	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
//	}
//
//	@Then("^enter username and password and click on login button$")
//	public void enter_username_and_password_click_login_button(DataTable logindetails) throws InterruptedException{
//		List<List<String>> l=logindetails.raw();
//	   driver.findElement(By.name("username")).sendKeys(l.get(0).get(0));
//	   driver.findElement(By.name("password")).sendKeys(l.get(0).get(1));
//	   Thread.sleep(3000);
//	   driver.findElement(By.xpath("//input[@type='submit'and @value='Login']")).click();
//	}
//
//	@Then("^user is able to go home page$")
//	public void user_is_able_to_go_home_page() throws InterruptedException{
//		    String title1=driver.getTitle();
//		    System.out.println(title1);
//		    Assert.assertEquals("CRMPRO", title1);
//		    Thread.sleep(2000);
//	}
//	
//	@Then("^user is move to deals page$")
//	public void user_is_move_to_deals_page() throws Throwable {
//		driver.switchTo().frame("mainpanel");
//		Actions action=new Actions(driver);
//	    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//	    driver.findElement(By.xpath("//a[text()='New Deal']")).click();
//	   
//	}
//	
//	@Then("^user enter deals deatils$")
//	public void user_enter_deals_deatils(DataTable deals) throws Throwable {
//		List<List<String>> d=deals.raw();
//	    driver.findElement(By.id("title")).sendKeys(d.get(0).get(0));
//	    driver.findElement(By.id("probability")).sendKeys(d.get(0).get(1));
//	    driver.findElement(By.id("commission")).sendKeys(d.get(0).get(2));
//	}
//	
//	@Then("^close browser$")
//	public void close_browser() {
//		driver.quit();
//	}
//}
