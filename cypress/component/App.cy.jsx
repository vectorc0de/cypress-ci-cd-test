import React from 'react';
import App from '../../src/App';

describe('App Component', () => {
  it('renders the hello world message', () => {
    cy.mount(<App />);  // Monta el componente
    
    // Verifica que el elemento existe y muestra el texto correcto
    cy.get('[data-testid="hello-world"]')
      .should('be.visible')
      .and('have.text', 'Hello World!');
  });
});