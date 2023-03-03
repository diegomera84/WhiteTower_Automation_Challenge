const TodosPage = require('../pages/TodosPage');

let todoActions 

describe('Test case 1', () => {
  beforeEach(() => {
    cy.visit('/examples/angularjs')
    todoActions = new  TodosPage();
  })
    it('add toDo elements', () => {
      const textValidator = 'ToDo 3';
      todoActions.insertToDo(3);
      todoActions.getToDoElement(3).should('have.text', textValidator);
     })
  })