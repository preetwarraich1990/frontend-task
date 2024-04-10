describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/en/US');
  });

  it('should rendered header avatar', () => {
    // @fixme Replace this with actual implementation, and add more
    cy.get('[data-testid="usericon"]').should('have.length', 1);
  });
});
