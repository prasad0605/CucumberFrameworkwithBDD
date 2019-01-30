$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Feature of Free CRM Login",
  "description": "",
  "id": "feature-of-free-crm-login",
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
  "name": "login scenario",
  "description": "",
  "id": "feature-of-free-crm-login;login-scenario",
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
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "feature-of-free-crm-login;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "feature-of-free-crm-login;login-scenario;;1"
    },
    {
      "cells": [
        "prasad1986",
        "test@123"
      ],
      "line": 23,
      "id": "feature-of-free-crm-login;login-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "peter"
      ],
      "line": 24,
      "id": "feature-of-free-crm-login;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "login scenario",
  "description": "",
  "id": "feature-of-free-crm-login;login-scenario;;2",
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
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 35470286356,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.title_of_Free_CRM_logo()"
});
formatter.result({
  "duration": 9658598,
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
  "duration": 9062374703,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_is_able_to_go_home_page()"
});
formatter.result({
  "duration": 7352891,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.close_browser()"
});
formatter.result({
  "duration": 635130491,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "login scenario",
  "description": "",
  "id": "feature-of-free-crm-login;login-scenario;;3",
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
  "name": "enter \"tom\" and \"peter\" and click on login button",
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
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 35158773521,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.title_of_Free_CRM_logo()"
});
formatter.result({
  "duration": 5775361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 7
    },
    {
      "val": "peter",
      "offset": 17
    }
  ],
  "location": "stepDefinition.enter_username_and_password_click_login_button(String,String)"
});
formatter.result({
  "duration": 4097933112,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_is_able_to_go_home_page()"
});
formatter.result({
  "duration": 4825886,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.stepDefinition.user_is_able_to_go_home_page(stepDefinition.java:40)\r\n\tat ✽.Then user is able to go home page(login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});