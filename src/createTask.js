//A class that produces a task and its basic info
export function createTodo() {
  const userTitle = document.getElementById("userTitle");
  const userDescrip = document.getElementById("userDescrip");
  const userDue = document.getElementById("userDue");
  const userPriority = document.getElementById("userPriority");
  const userNotes = document.getElementById("userNotes");
  let titleInput = "";
  let descripInput;
  let dueInput;
  let priorityInput;
  let notesInput;

  obtainInfo();

  class Task {
    constructor(title, descrip, due, priority, notes) {
      this._title = title;
      this._descrip = descrip;
      this._due = due;
      this._priority = priority;
      this._notes = notes;
    }
    set title(value) {
      this._title = value;
    }
    set descrip(value) {
      this._descrip = value;
    }
    set due(value) {
      this._due = value;
    }
    set priority(value) {
      this._priority = value;
    }
    set notes(value) {
      this._notes = value;
    }
    get title() {
      return this._title;
    }
    get descrip() {
      return this._descrip;
    }
    get due() {
      return this._due;
    }
    get priority() {
      return this._priority;
    }
    get notes() {
      return this._notes;
    }
  }
  function obtainInfo() {
    titleInput = userTitle.value;
    descripInput = userDescrip.value;
    dueInput = userDue.value;
    priorityInput = userPriority.value;
    notesInput = userNotes.value;
  }
  const newTask = new Task(
    titleInput,
    descripInput,
    dueInput,
    priorityInput,
    notesInput
  );
  return {
    newTask,
    titleInput,
    descripInput,
    dueInput,
    priorityInput,
    notesInput,
  };
}
