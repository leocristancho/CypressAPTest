Feature: Basic Testing to latlong.net

  Scenario: Validate that the get latlong service is responding successfully
    When The user sends a GET request to the latlong service
    Then The system responses with status 200

  Scenario: Validate that the get satellite service is responding successfully
    When The user sends a GET request to the satellite service
    Then The system responses with status 200

 Scenario Outline: Submit a comment on latlong.net
    When The user sends a POST request to submit a comment on latlong.net
      | commentname | commenttext |
      | <name>      | <text>      |
    Then The system responses with status 200

    Examples:
      | name                 | text               |
      | Leonidas Colombiano  | This is my comment |
      | Andrew Torres        | Great website!     |