describe('Form Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); // Make sure your app is running
  });

  it('Create Set Form - happy path', () => {
    cy.contains('Create Set').click();
    cy.get('#setName').type('Spanish Vocabulary');
    cy.get('#setDescription').type('Basic Spanish terms');
    cy.get('form').submit();
    cy.contains('Set created successfully'); // or check if it's listed
  });

  it('Create Set Form - unhappy path', () => {
    cy.contains('Create Set').click();
    cy.get('form').submit();
    cy.contains('Please enter a set name'); // or whatever your validation says
  });

  it('Add Card Form - happy path', () => {
    cy.contains('Add Card').click();
    cy.get('#term').type('Hola');
    cy.get('#definition').type('Hello');
    cy.get('form').submit();
    cy.contains('Card added'); // or confirmation
  });

  it('Add Card Form - unhappy path', () => {
    cy.contains('Add Card').click();
    cy.get('form').submit();
    cy.contains('Please fill in all fields'); // or your validation message
  });
});
