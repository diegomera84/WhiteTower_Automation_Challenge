describe('Test case 1', () => {
  beforeEach(() => {
    cy.visit('/examples/angularjs')
  })
    it('add toDo elements', () => {
      cy.get('.input')//.type('toDo 1')
    })
  })