/**
 * Definition of a class to interact with the todos page.
 *
 * @author diegomera84
 * @date   2023-03-03
 */



/**
 * Declaration of class for todos page actions.
 */
class TodosPage {

  elements ={
    toDoInput : () => cy.get('.header').children().eq(1).children(),   
    toDoList : () => cy.get('ng-view').children().eq(0).children().eq(1).children().eq(2).children() 
  }

  /**
   * Inserts elements in the todo list.
   *
   * @param {number} numberOfElements The elements number.
   *
   * @returns {voild}
   */
  insertToDo(numberOfElements) {
    for(let element = 1; element<=numberOfElements; element++){
      let elementText = "ToDo " + (element);
      this.elements.toDoInput().type(elementText + '{enter}');
    }
  }


  /**
   * Gets the label of a todo element.
   *
   * @param {number} optionNumber The todo option number.
   *
   * @returns {object} The todo option label object
   */
  getToDoElement(optionNumber) {
    return this.elements.toDoList().eq(optionNumber-1).children().eq(0).children().eq(1)
  }

  /**
   * Modifys todo element text.
   *
   * @param {number} optionNumber The todo option number.
   *
   * @param {string} newText The new text.
   *
   * @returns {object} The todo option label object
   */
  modifyText(optionNumber, newText) {
    const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
    toDoOption.dblclick().type('{selectall}{backspace}').type(newText+'{enter}');
  }

 
}

module.exports = TodosPage;