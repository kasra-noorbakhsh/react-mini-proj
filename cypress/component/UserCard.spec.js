import { mount } from 'cypress/react';
import UserCard from '../../src/Components/UserCard/UserCard';

const sampleUserData = {
  name: "kasra",
  id: 10
};

describe('UserCard Component', () => {
  it('displays the correct user data', () => {
    mount(<UserCard userData={sampleUserData} />);
    
    cy.get('[data-cy-root]').within(() => {
      cy.get('[data-testid="userName"]').should('have.text', 'نام کاربری: kasra');
    });
  });
});
