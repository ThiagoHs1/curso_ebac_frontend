/// <reference types="cypress" /> ///

describe ('Testes para Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
      });
    
      it('Deve adicionar um novo contato', () => {
        // Implemente os comandos Cypress para adicionar um novo contato
        cy.get('input[type="text"]').type('Contato teste Thiago');
        cy.get('input[type="email"]').type('thiagoteste@gmail.com');
        cy.get('input[type="tel"]').type('11999999999');
        cy.get('.adicionar').click();

        cy.get('ul').should('have.length', 4);
        cy.screenshot('adicionar-contato');
      });
    
      it('Deve alterar um contato existente', () => {
        // Implemente os comandos Cypress para alterar um contato existente
        cy.get('.edit').first().click();
        cy.get('input[type="text"]').clear().type('Contato Editado');
        cy.get('input[type="email"]').clear().type('thiagotesteeditado@gmail.com');
        cy.get('input[type="tel"]').clear().type('0000');
        cy.get('.alterar').click();

        cy.get('li').first().should('have.text', "Contato Editado");
        cy.screenshot('Editando o primeiro contato');
      });
    
      it('Deve remover um contato', () => {
        // Implemente os comandos Cypress para remover um contato
        cy.get('.delete').first().click();
        
        cy.get('ul').should('have.length', 3);
        cy.screenshot('contato deletado');
      });
    });