const TodosPage = require('../pages/TodosPage');

let todoActions 

describe('Test case 1', () => {
  beforeEach(() => {
    cy.visit('/examples/angularjs')
    todoActions = new  TodosPage();
  })
    it('add toDo elements', () => {
      todoActions.insertToDo(3);
      todoActions.completeToDoElement(3); 
      todoActions.elements.completeElements().click();
      todoActions.printElements();
     })
  })