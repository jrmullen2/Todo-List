//A class that produces a task and its basic info
export function createTodo() {
  let titleInput = "";
  let descripInput;
  let dueInput;
  let priorityInput;
  let notesInput;
  class Task {
    constructor(title, descrip, due, priority, notes) {
      this.title = title;
      this.descrip = descrip;
      this.due = due;
      this.priority = priority;
      this.notes = notes;
    }
    set title(value) {
      this.title = value;
    }
    set descrip(value) {
      this.descrip = value;
    }
    set due(value) {
      this.due = value;
    }
    set priority(value) {
      this.priority = value;
    }
    set notes(value) {
      this.notes = value;
    }
    get title() {
      return this.title;
    }
    get descrip() {
      return this.descrip;
    }
    get due() {
      return this.due;
    }
    get priority() {
      return this.priority;
    }
    get notes() {
      return this.notes;
    }
  }
  function obtainInfo() {
    titleInput = userTitle.value;
    descripInput = userDescrip.value;
    dueInput = userDue.value;
    priorityInput = userNotes.value;
    notesInput = userNotes.value;
  }
  obtainInfo();
  const newTask = new Task(
    titleInput,
    descripInput,
    dueInput,
    priorityInput,
    notesInput
  );
  return newTask;
}
//implement into index
