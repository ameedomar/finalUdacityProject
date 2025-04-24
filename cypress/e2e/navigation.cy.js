describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); // Change if your server runs elsewhere
  });

  it('navigates to Card Set page', () => {
    cy.contains('Card Set').click();
    cy.url().should('include', '/card-set'); // adjust based on your actual route
    cy.contains('Card Sets'); // content that confirms the page loaded
  });

  it('navigates to About page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About'); // confirm page
  });

  it('navigates to Home page', () => {
    cy.contains('Home').click();
    cy.url().should('eq', 'http://localhost:1234/'); // or whatever home URL is
    cy.contains('Welcome'); // or some home-specific content
  });
});
