$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prasad/eclipse-workspace/FreeCRMCucumberwithBDD/Features/contact.feature");
formatter.feature({
  "line": 1,
  "name": "Feature of Free CRM contact",
  "description": "",
  "id": "feature-of-free-crm-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario:login scenario"
    },
    {
      "line": 4,
      "value": "#without example keyword"
    },
    {
      "line": 6,
      "value": "#Given user is already on login page"
    },
    {
      "line": 7,
      "value": "#When title of Free CRM logo"
    },
    {
      "line": 8,
      "value": "#Then enter \"prasad1986\" and \"test@123\" and click on login button"
    },
    {
      "line": 9,
      "value": "#Then user is able to go home page"
    },
    {
      "line": 10,
      "value": "#Then close browser"
    },
    {
      "line": 12,
      "value": "#with Example keyword"
    }
  ],
  "line": 13,
  "name": "contact scenario",
  "description": "",
  "id": "feature-of-free-crm-contact;contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of Free CRM logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is able to go home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is move to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enter \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "feature-of-free-crm-contact;contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "department"
      ],
      "line": 24,
      "id": "feature-of-free-crm-contact;contact-scenario;;1"
    },
    {
      "cells": [
        "prasad1986",
        "test@123",
        "ameer",
        "khan",
        "Manager"
      ],
      "line": 25,
      "id": "feature-of-free-crm-contact;contact-scenario;;2"
    },
    {
      "cells": [
        "prasad1986",
        "test@123",
        "padman",
        "joe",
        "VP"
      ],
      "line": 26,
      "id": "feature-of-free-crm-contact;contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "contact scenario",
  "description": "",
  "id": "feature-of-free-crm-contact;contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of Free CRM logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter \"prasad1986\" and \"test@123\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is able to go home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is move to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enter \"ameer\" and \"khan\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 37193489406,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.title_of_Free_CRM_logo()"
});
formatter.result({
  "duration": 7148091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prasad1986",
      "offset": 7
    },
    {
      "val": "test@123",
      "offset": 24
    }
  ],
  "location": "stepDefinition.enter_username_and_password_click_login_button(String,String)"
});
formatter.result({
  "duration": 7793510341,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_is_able_to_go_home_page()"
});
formatter.result({
  "duration": 2006790829,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_is_move_to_contact_page()"
});
formatter.result({
  "duration": 1439161298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ameer",
      "offset": 12
    },
    {
      "val": "khan",
      "offset": 24
    },
    {
      "val": "Manager",
      "offset": 35
    }
  ],
  "location": "stepDefinition.entercontact_details(String,String,String)"
});
formatter.result({
  "duration": 1781345787,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.close_browser()"
});
formatter.result({
  "duration": 608829044,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "contact scenario",
  "description": "",
  "id": "feature-of-free-crm-contact;contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of Free CRM logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "enter \"prasad1986\" and \"test@123\" and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is able to go home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is move to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enter \"padman\" and \"joe\" and \"VP\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 35960273909,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.title_of_Free_CRM_logo()"
});
formatter.result({
  "duration": 5995522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prasad1986",
      "offset": 7
    },
    {
      "val": "test@123",
      "offset": 24
    }
  ],
  "location": "stepDefinition.enter_username_and_password_click_login_button(String,String)"
});
formatter.result({
  "duration": 7328339436,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_is_able_to_go_home_page()"
});
formatter.result({
  "duration": 2006940446,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_is_move_to_contact_page()"
});
formatter.result({
  "duration": 1352610518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "padman",
      "offset": 12
    },
    {
      "val": "joe",
      "offset": 25
    },
    {
      "val": "VP",
      "offset": 35
    }
  ],
  "location": "stepDefinition.entercontact_details(String,String,String)"
});
formatter.result({
  "duration": 1789128758,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.close_browser()"
});
formatter.result({
  "duration": 589749075,
  "status": "passed"
});
});