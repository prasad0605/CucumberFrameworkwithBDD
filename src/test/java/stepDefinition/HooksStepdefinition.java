//package stepDefinition;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//
//public class HooksStepdefinition {
//	
//	@Before()
//	public void setup() {
//		System.out.println("launch browser");
//	}
//	
//	@After()
//	public void teardown() {
//		System.out.println("close browser");
//	}
//	
//	@Given("^user is already on home page$")
//	public void user_is_already_on_home_page() throws Throwable {
//		System.out.println("user is already on home page");
//	}
//
//	@Then("^user is able to click on deals link$")
//	public void user_is_able_to_click_on_deals_link() throws Throwable {
//		System.out.println("user is able to click on deals link");
//	}
//
//	@Then("^user is able to navigate deals page$")
//	public void user_is_able_to_navigate_deals_page() throws Throwable {
//		System.out.println("user is able to navigate deals page");
//	}
//
//}
