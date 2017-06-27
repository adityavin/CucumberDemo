$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    },
    {
      "line": 20,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 21,
      "value": "#\tI want to use this template for my feature file"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#@tag1"
    },
    {
      "line": 24,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 25,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 26,
      "value": "#\tAnd some other precondition"
    },
    {
      "line": 27,
      "value": "#When I complete action"
    },
    {
      "line": 28,
      "value": "#\tAnd some other action"
    },
    {
      "line": 29,
      "value": "#\tAnd yet another action"
    },
    {
      "line": 30,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 31,
      "value": "#\tAnd check more outcomes"
    },
    {
      "line": 32,
      "value": "#"
    },
    {
      "line": 33,
      "value": "#@tag2"
    },
    {
      "line": 34,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 35,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 36,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 37,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 38,
      "value": "#"
    },
    {
      "line": 39,
      "value": "#Examples:"
    },
    {
      "line": 40,
      "value": "#    | name  |value | status |"
    },
    {
      "line": 41,
      "value": "#    | name1 |  5   | success|"
    },
    {
      "line": 42,
      "value": "#    | name2 |  7   | Fail   |"
    }
  ],
  "line": 43,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I enter valid \"\u003cuname\u003e\" and valid \"\u003cpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "uname",
        "pwd"
      ],
      "line": 52,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "adit1",
        "adity1"
      ],
      "line": 53,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "adit2",
        "adity2"
      ],
      "line": 54,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I enter valid \"adit1\" and valid \"adity1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 9238483352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adit1",
      "offset": 15
    },
    {
      "val": "adity1",
      "offset": 33
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 1041938153,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1466910772,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 1014534168,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I enter valid \"adit2\" and valid \"adity2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 5400002751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adit2",
      "offset": 15
    },
    {
      "val": "adity2",
      "offset": 33
    }
  ],
  "location": "SmokeTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 873901686,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1176773963,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 839269758,
  "status": "passed"
});
});