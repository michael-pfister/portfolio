describe('hosting test', () => {
  it('should be able to visit localhost', () => {
    cy.visit('http://localhost:3000/');
  });
});

describe('mobile navigation menu test', () => {
  it('links are clickable', () => {
    cy.get('[data-cy="mobile navigation"]').find('[data-cy="navigation point list"]').children().each(($el) => {
        cy.get('[aria-label="open mobile navigation"]').click();
        cy.wrap($el).find('a').click();
      });
  })
});

describe('github fetch test', ()=>{
  it('checks if github repositories are displayed', ()=>{
    cy.get('[data-cy="github repository"]').should('have.length', 5);
  });
});

describe('twitter fetch test', ()=>{
  it('checks if twitter tweets are displayed', ()=>{
    cy.get('[data-cy="twitter tweet"]').should('have.length', 3);
  });
})

describe('contact form test', ()=>{
  it('checks if the contact form redirects to the correct page', ()=>{
    cy.get('[data-cy="contact form name"]').type('Cypress');
    cy.get('[data-cy="contact form email"]').type('bot.cypress@gmail.com');
    cy.get('[data-cy="contact form message"]').type('This is a test message');
    cy.get('[data-cy="contact form submit button"]').click();

    cy.url().should('include', 'https://formsubmit.co/');
  });
});

export {};