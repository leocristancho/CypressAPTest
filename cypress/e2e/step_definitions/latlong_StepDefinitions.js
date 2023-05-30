import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LatLongAPI } from '@pages/LatLongAPI';

When('The user sends a GET request to the latlong service', () => {
  LatLongAPI.getHomePage().as('response');
});

When('The user sends a GET request to the satellite service', () => {
  LatLongAPI.getSatellitePage().as('response');
});

Then('The system responses with status 200', () => {
  cy.get('@response').its('status').should('eq', 200);
});

When(
  "The user sends a POST request to submit a comment on latlong.net",
  (dataTable) => {
    const { commentname, commenttext } = dataTable.hashes()[0];
    LatLongAPI.submitComment(commentname, commenttext).as("response");
  }
);
