$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prasad/eclipse-workspace/FreeCRMCucumberwithBDD/Features/dealsmap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "prasad1986",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is able to go home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is move to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter deals deatils",
  "rows": [
    {
      "cells": [
        "title",
        "probability",
        "commision"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal1",
        "50",
        "10"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal2",
        "60",
        "20"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal3",
        "70",
        "30"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "dealstepwithMapDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 36852220829,
  "status": "passed"
});
formatter.match({
  "location": "dealstepwithMapDefinition.title_of_Free_CRM_logo()"
});
formatter.result({
  "duration": 6606508,
  "status": "passed"
});
formatter.match({
  "location": "dealstepwithMapDefinition.enter_username_and_password_click_login_button(DataTable)"
});
formatter.result({
  "duration": 7003462259,
  "status": "passed"
});
formatter.match({
  "location": "dealstepwithMapDefinition.user_is_able_to_go_home_page()"
});
formatter.result({
  "duration": 2016282742,
  "status": "passed"
});
formatter.match({
  "location": "dealstepwithMapDefinition.user_is_move_to_deals_page()"
});
formatter.result({
  "duration": 1618186700,
  "status": "passed"
});
formatter.match({
  "location": "dealstepwithMapDefinition.user_enter_deals_deatils(DataTable)"
});
formatter.result({
  "duration": 8483164297,
  "status": "passed"
});
formatter.match({
  "location": "dealstepwithMapDefinition.close_browser()"
});
formatter.result({
  "duration": 621843519,
  "status": "passed"
});
});