describe('Product page', () => {
  beforeEach(() => {
    cy.visit('/en/US/product');
  });

  it('should contain all products', () => {
    // @fixme Replace this with actual implementation, and add more
    cy.get('[data-testid="product-card"]').should('have.length', 4);
  });

  it('header should hide on scroll', () => {
    cy.get('body')
      .scrollIntoView()
      .get('[data-testid="product-card"]')
      .should('be.hidden');
  });
});
