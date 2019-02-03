@FuncionalTest
Feature:Free CRM Application testing
@SmokeTest @RegressionTest
Scenario:valid login 
Given login with valid username and password
@SmokeTest
Scenario:Invalid login 
Given login with Invalid username and password
@RegressionTest
Scenario:create contact
Given enter contact details
@SmokeTest @RegressionTest
Scenario:create tasks
Given enter tasks details
@SmokeTest
Scenario:create case
Given enter case details
@SmokeTest
Scenario:create call
Given enter call details
@RegressionTest
Scenario:search contact
Given verify contact details
@RegressionTest
Scenario:search task 
Given verify task details
@SmokeTest @RegressionTest
Scenario:search call 
Given verify call details
@SmokeTest @RegressionTest
Scenario:search docs 
Given verify docs details
@End2End
Scenario:search leftpanel 
Given verify leftpanel details
@End2End
Scenario:search quickform 
Given verify quickform details

Scenario:close browser
Given verify application close


