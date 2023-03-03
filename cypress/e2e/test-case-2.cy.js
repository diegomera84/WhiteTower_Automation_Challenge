const TodosPage = require('../pages/TodosPage');

let todoActions 

describe('Test case 2', () => {
  beforeEach(() => {
    cy.visit('/examples/angularjs');
    cy.viewport('iphone-5')
    todoActions = new  TodosPage();
  })
    it('modify toDo element', () => {
      const textValidator = 'ToDo 4';
      todoActions.insertToDo(3);
      todoActions.modifyText(2, textValidator);
      todoActions.getToDoElement(2).should('have.text', textValidator);
      const toDoList = todoActions.elements.toDoList();
      toDoList.should('not.contain','ToDo 2');
     })
  })