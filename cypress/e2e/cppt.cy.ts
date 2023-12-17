describe('',()=>{
  beforeEach(()=>{
    cy.visit('/passageiros/en/buy-tickets');
    cy.clock().tick(1000);
  });
  it('visits',()=>{
    cy.get('.menu-main .btn-group a[class$="btn-nav"]').eq(1).click();
    cy.clock().tick(500);
    cy.url().should('eq',`${Cypress.config('baseUrl')}/passageiros/en/buy-tickets`);
  });
});
