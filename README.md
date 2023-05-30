# cypress-cucumber-API-Test
Integrated project with Cypress 12 and cucumber for API testing. POM pattern is applied and Allure is used for reporting.

#  Project explanation

## Feature: Basic Testing to latlong.net
This feature performs basic tests on the latlong.net service. It verifies that the GET requests to the latlong service and the satellite service respond successfully with a status code of 200. It also allows submitting comments via a POST request to latlong.net and verifies that the response is successful with a status code of 200.

## Feature: Testing API with Reqres
This feature tests the Reqres API. It verifies that GET requests to the API endpoint with different IDs return a successful response with a status code of 200, and the response contains the expected last name. Additionally, it allows creating new users using POST requests to the API endpoint and verifies that the response is successful with a status code of 201, and the response contains the "id" field.

## LatLongAPI
The LatLongAPI class provides methods to interact with the LatLong API.

baseUrl is the base URL for the LatLong API.

getHomePage() sends a GET request to the LatLong API's homepage and returns the response.

getSatellitePage() sends a GET request to the LatLong API's satellite page and returns the response.

submitComment(commentname, commenttext) sends a POST request to submit a comment on latlong.net. It takes the commentname and commenttext as parameters and returns the response.

## ReqresAPI
The ReqresAPI class provides methods to interact with the Reqres API.

BASE_URL is the base URL for the Reqres API.

getUserById(id) sends a GET request to the Reqres API to retrieve user data based on the provided id and returns the response.

createUser(payload) sends a POST request to the Reqres API to create a new user. It takes the payload as a parameter and returns the response.

## Cucumber Step Definitions
The code also includes step definitions for the Cucumber scenarios defined in the feature files. These step definitions use the methods provided by the LatLongAPI and ReqresAPI classes to interact with the APIs and make assertions on the responses.

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/cucumber/json-formatter
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter

## 🚀 Install the project

Install project dependencies with: npm i

## Run the project:

1. Standard Execution: npm run cypress:execution
2. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
