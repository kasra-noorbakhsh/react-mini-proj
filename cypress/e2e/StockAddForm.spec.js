import Url from '../../src/url'
import API from '../../src/api'

describe('StockAddForm', () => {
  beforeEach(() => {
    cy.visit(Url.addStock)
  });

  it('should render the form correctly', () => {
    cy.get('input[placeholder="نماد..."]').should('exist');
    cy.get('input[placeholder="نام شرکت..."]').should('exist');
    cy.get('input[placeholder="قیمت خرید..."]').should('exist');
    cy.get('input[placeholder="آخرین قیمت خرید..."]').should('exist');
    cy.get('input[placeholder="صنعت..."]').should('exist');
    cy.get('input[placeholder="ارزش بنیادی..."]').should('exist');

    cy.get('input[type="submit"]').should('exist').and('have.value', 'ثبت');
  });

  it('should show validation errors for empty required fields', () => {
    cy.get('input[type="submit"]').click();

    // Check for validation error messages
    cy.contains('فیلد نماد اجباری است').should('be.visible');
    cy.contains('فیلد نام شرکت اجباری است').should('be.visible');
    cy.contains(' قیمت باید عدد باشد').should('be.visible');
    cy.contains(' قیمت باید عدد باشد').should('be.visible');
    cy.contains('فیلد حوزه صنعتی اجباری است').should('be.visible');
    cy.contains(' ارزش بنیادی باید عدد باشد').should('be.visible');
  });

  it('should show specific validation messages for incorrect inputs', () => {
    cy.get('input[placeholder="نماد..."]').type('AB');
    cy.get('input[placeholder="قیمت خرید..."]').type('-100');
    cy.get('input[placeholder="آخرین قیمت خرید..."]').type('text');
    cy.get('input[type="submit"]').click();

    cy.contains('حداقل طول نماد رعایت نشده است').should('be.visible');
    cy.contains('قیمت باید مثبت باشد').should('be.visible');
    cy.contains('قیمت باید عدد باشد').should('be.visible');
  });

  it('should successfully submit the form with valid data', () => {
    cy.get('input[placeholder="نماد..."]').type('ABCD');
    cy.get('input[placeholder="نام شرکت..."]').type('Some Company');
    cy.get('input[placeholder="قیمت خرید..."]').type('100');
    cy.get('input[placeholder="آخرین قیمت خرید..."]').type('110');
    cy.get('input[placeholder="صنعت..."]').type('Technology');
    cy.get('input[placeholder="ارزش بنیادی..."]').type('500');

    // Mock API response
    cy.intercept('POST', `**/${API.postStock}`, {
      statusCode: 200,
      body: { success: true },
    }).as('addStock');

    cy.get('input[type="submit"]').click();

    // Check if the success toast message appears
    cy.contains('سهام شما با موفقیت اضافه شد').should('be.visible');

    // Verify the API request payload
    cy.wait('@addStock').its('request.body').should('deep.equal', {
      symbol: 'ABCD',
      companyName: 'Some Company',
      purchase: 100,
      lastDiv: 110,
      industry: 'Technology',
      marketCap: 500,
    });
  });
});
