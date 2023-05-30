import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ReqresAPI } from '@pages/ReqresAPI';

const reqresAPI = new ReqresAPI();

When('The user sends a GET request to the Reqres API endpoint with ID {string}', (id) => {
  reqresAPI.getUserById(id).as('response');
});

Then('The response contains the last name {string}', (expectedLastName) => {
  cy.get('@response').its('body.data.last_name').should('eq', expectedLastName);
});

When('The user sends a POST request to the Reqres API endpoint with name {string} and job {string}', (name, job) => {
  const payload = {
    name: name,
    job: job
  };
  reqresAPI.createUser(payload).as('response');
});

Then('The system verifies the response status code is {int}', (statusCode) => {
  cy.get('@response').its('status').should('eq', statusCode);
});

Then('The response contains the field {string}', (field) => {
  cy.get('@response').its('body').should('have.property', field);
});
