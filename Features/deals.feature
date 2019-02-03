Feature: Feature of Free CRM contact

Scenario:contact scenario

Given user is already on login page
When title of Free CRM logo
Then enter username and password and click on login button
	| prasad1986 | test@123 |
Then user is able to go home page
Then user is move to deals page
Then user enter deals deatils
 | deal1 | 50 | 10 |
Then close browser

 