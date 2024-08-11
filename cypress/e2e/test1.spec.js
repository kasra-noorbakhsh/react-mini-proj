import Url from '../../src/url'

describe('My First Test', () => {
  it('Visits the app and checks for a link', () => {
    cy.visit(Url.home); 
    cy.contains('a', 'مشاهده سهام ها').click(); 
    cy.url().should('include', Url.stockList); 
    cy.get('input[value="ثبت"]').click(); 
  });
});
