Feature: Feature of Free CRM contact

Scenario:contact scenario

Given user is already on login page
When title of Free CRM logo
Then enter username and password and click on login button
	| username | password |
	| prasad1986 | test@123 |
	
Then user is able to go home page
Then user is move to deals page
Then user enter deals deatils
 | title | probability | commision |
 | test deal1 | 50 | 10 |
 | test deal2 | 60 | 20 |
 | test deal3 | 70 | 30 |
 
Then close browser

 