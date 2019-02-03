//package stepDefinition;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.java.en.*;
//import junit.framework.Assert;
//
//public class stepDefinition {
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
//	@Then("^enter \"(.*)\" and \"(.*)\" and click on login button$")
//	public void enter_username_and_password_click_login_button(String username,String password) throws InterruptedException{
//	   driver.findElement(By.name("username")).sendKeys(username);
//	   driver.findElement(By.name("password")).sendKeys(password);
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
//
//	@Then("^user is move to contact page$")
//	public void user_is_move_to_contact_page() throws Throwable {
//		driver.switchTo().frame("mainpanel");
//	    Actions action=new Actions(driver);
//	    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//	    driver.findElement(By.xpath("//a[text()='New Contact']")).click();
//	}
//	
//	
//	@Then("^user enter \"(.*)\" and \"(.*)\" and \"(.*)\"$")
//	public void entercontact_details(String firstname,String lastname,String department) throws InterruptedException{
//	    driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(firstname);
//	    driver.findElement(By.xpath("//input[@name='surname']")).sendKeys(lastname);
//	    driver.findElement(By.xpath("//input[@name='department']")).sendKeys(department);
//	    driver.findElement(By.xpath("//input[@type='submit']")).click();
//	}
//
//	
//	@Then("^close browser$")
//	public void close_browser() {
//		driver.quit();
//	}
//
//}
//
