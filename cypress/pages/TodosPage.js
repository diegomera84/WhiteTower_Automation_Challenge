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
    toDoList : () => cy.get('ng-view').children().eq(0).children().eq(1).children().eq(2).children(),
    completeElements : () => cy.get('[href="#/active"]')
  }

  /**
   * Inserts elements in the todo list.
   *
   * @param {number} numberOfElements The elements number.
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
   */
  modifyText(optionNumber, newText) {
    const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
    toDoOption.dblclick().type('{selectall}{backspace}').type(newText+'{enter}');
  }

  /**
   * Mark a element as complet.
   *
   * @param {number} optionNumber The todo option number.
   */
 completeToDoElement(optionNumber) {
  const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
  toDoOption.children().eq(0).children().eq(0).click();
  }

  /**
   * See the complete elements.
   */
  showCompleteElements() {
  const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
  toDoOption.children().eq(0).children().eq(0).click();
  }

  /**
   * Prints the listed elements in console.
   */
  printElements() {
    const lsit =  this.elements.toDoList(); 
    lsit.invoke('text')
    .then((text1) => {
      console.log(text1);
    });
    }
}

module.exports = TodosPage;