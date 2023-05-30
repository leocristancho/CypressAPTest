Feature: Testing API with Reqres

  Scenario Outline: Validate last name for different user IDs
    When The user sends a GET request to the Reqres API endpoint with ID "<id>"
    Then The system verifies the response status code is 200
    And The response contains the last name "<expectedLastName>"

    Examples:
      | id | expectedLastName |
      | 2  | Weaver           |
      | 3  | Wong             |
      | 4  | Holt             |

  Scenario Outline: Create a user using POST method
    When The user sends a POST request to the Reqres API endpoint with name "<name>" and job "<job>"
    Then The system verifies the response status code is 201
    And The response contains the field "id"

    Examples:
      | name      | job     |
      | Camilo    | leader  |
      | Alfonso   | analyst |
      | Hernaesto | leader  |
      | Alfonso   | QA Lead |




