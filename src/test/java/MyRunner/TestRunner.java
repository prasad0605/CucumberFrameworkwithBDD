package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",//path of Feature file
glue= {"stepDefinition"},//path of the StepDefinition file
format= {"pretty","html:test-output","json:test-output/cucumber.json","junit:test-output/cucumber.xml"},//different type of reports
dryRun=false,//to check mapping between feature file and step definition file
monochrome=true, //to display output in console in proper readable format
strict=true)//it will check if any step is not defined inside step definition file
public class TestRunner {

}
