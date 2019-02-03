$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prasad/eclipse-workspace/FreeCRMCucumberwithBDD/Features/Tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FuncionalTest"
    }
  ]
});
formatter.scenario({
  "line": 40,
  "name": "close browser",
  "description": "",
  "id": "free-crm-application-testing;close-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "verify application close",
  "keyword": "Given "
});
formatter.match({
  "location": "TagStepdefinition.verify_application_close()"
});
formatter.result({
  "duration": 94618765,
  "status": "passed"
});
});