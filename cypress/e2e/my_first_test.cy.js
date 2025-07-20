describe('My First Test', () => {
  it('Visits the base URL', () => {
    cy.visit('/');
    cy.contains('Hello World');
  });
});