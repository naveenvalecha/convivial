// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('Handlebars is not defined')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

// Login to Convivial as admin.
beforeEach("Login", () => {
  // Login Url.
  cy.visit(Cypress.env('loginUrl'))
  cy.get('input[id="edit-name"]').type(Cypress.config().adminUser)
  cy.get('input[id="edit-pass"]').type(Cypress.config().adminPassword)
  cy.get('input[id="edit-submit"]').click()
})
