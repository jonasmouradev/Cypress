// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from // failing the test
  return false;
});

Cypress.Commands.add("api_createInCheck", (payload) => {
  cy.request({
    method: "POST",
    url: "https://competence.backend.stage.incicle.com/api/v1/in-check/evaluations",
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      CompanyId: `${COMPANY_ID}`,
    },
    body: payload,
  }).then((response) => {
    expect(response.status).to.eq(201);
  });
});
