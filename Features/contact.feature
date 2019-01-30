Feature: Feature of Free CRM contact

#Scenario:login scenario
#without example keyword

#Given user is already on login page
#When title of Free CRM logo
#Then enter "prasad1986" and "test@123" and click on login button
#Then user is able to go home page
#Then close browser

#with Example keyword
Scenario Outline:contact scenario

Given user is already on login page
When title of Free CRM logo
Then enter "<username>" and "<password>" and click on login button
Then user is able to go home page
Then user is move to contact page
Then user enter "<firstname>" and "<lastname>" and "<department>"
Then close browser

Examples:
	| username   | password | firstname | lastname | department |
  | prasad1986 | test@123 |	ameer			|	khan		 | Manager    |
	| prasad1986 | test@123    | padman    | joe      | VP         |

 