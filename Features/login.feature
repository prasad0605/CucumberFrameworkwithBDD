Feature: Feature of Free CRM Login

#Scenario:login scenario
#without example keyword

#Given user is already on login page
#When title of Free CRM logo
#Then enter "prasad1986" and "test@123" and click on login button
#Then user is able to go home page
#Then close browser

#with Example keyword
Scenario Outline:login scenario

Given user is already on login page
When title of Free CRM logo
Then enter "<username>" and "<password>" and click on login button
Then user is able to go home page
Then close browser

Examples:
	| username   | password |
	| prasad1986 | test@123 |
	| tom        | peter    |

 