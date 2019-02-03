$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prasad/eclipse-workspace/FreeCRMCucumberwithBDD/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Feature of Free CRM contact",
  "description": "",
  "id": "feature-of-free-crm-contact",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "contact scenario",
  "description": "",
  "id": "feature-of-free-crm-contact;contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Free CRM logo",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter username and password and click on login button",
  "rows": [
    {
      "cells": [
        "prasad1986",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is able to go home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is move to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter deals deatils",
  "rows": [
    {
      "cells": [
        "deal1",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "dealsdefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 40817560126,
  "status": "passed"
});
formatter.match({
  "location": "dealsdefinition.title_of_Free_CRM_logo()"
});
formatter.result({
  "duration": 24900843,
  "status": "passed"
});
formatter.match({
  "location": "dealsdefinition.enter_username_and_password_click_login_button(DataTable)"
});
formatter.result({
  "duration": 7772966051,
  "status": "passed"
});
formatter.match({
  "location": "dealsdefinition.user_is_able_to_go_home_page()"
});
formatter.result({
  "duration": 2015373089,
  "status": "passed"
});
formatter.match({
  "location": "dealsdefinition.user_is_move_to_deals_page()"
});
formatter.result({
  "duration": 1667645345,
  "status": "passed"
});
formatter.match({
  "location": "dealsdefinition.user_enter_deals_deatils(DataTable)"
});
formatter.result({
  "duration": 214897839,
  "status": "passed"
});
formatter.match({
  "location": "dealsdefinition.close_browser()"
});
formatter.result({
  "duration": 646940629,
  "status": "passed"
});
});