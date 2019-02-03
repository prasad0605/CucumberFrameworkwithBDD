package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class HooksTagSepDefinition {
	//global hooks
	@Before()
	public void setup() {
		System.out.println("launch browser");
	}
	
	@After()
	public void teardown() {
		System.out.println("close browser");
	}
	//local hooks
	@Before("@First")
	public void beforeFirst() {
		System.out.println("this is before first only");
	}
	
	@After("@First")
	public void afterFirst() {
		System.out.println("this is after first only");
	}
	
	//local hooks
		@Before("@Second")
		public void beforeSecond() {
			System.out.println("this is before second only");
		}
		
		@After("@Second")
		public void afterSecond() {
			System.out.println("this is after second only");
		}
		
		//local hooks
		@Before("@Third")
		public void beforeThird() {
			System.out.println("this is before third only");
		}
		
		@After("@Third")
		public void afterThird() {
			System.out.println("this is after third only");
		}
	
	@Given("^This is the first step$")
	public void this_is_the_first_step() throws Throwable {
		System.out.println("This is the first step");
	}

	@Given("^This is the Second step$")
	public void this_is_the_Second_step() throws Throwable {
		System.out.println("This is the second step");
	}
	
	@Given("^This is the third step$")
	public void this_is_the_third_step() throws Throwable {
		System.out.println("This is the third step");
	}
	
	

}
