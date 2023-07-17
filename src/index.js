import "./style.css";
import { createTodo } from "./createTask";
import { displayTask } from "./taskDisplay";

const userTitle = document.getElementById("userTitle");
const userDescrip = document.getElementById("userDescrip");
const userDue = document.getElementById("userDue");
const userPriority = document.getElementById("userPriority");
const userNotes = document.getElementById("userNotes");
const add = document.getElementById("plus");
const userForm = document.getElementById("userForm");
const submit = document.getElementById("submitButton");
const editButtons = document.querySelectorAll(".edit");
const deleteButtons = document.querySelectorAll(".delete");

add.addEventListener("click", () => {
  userForm.style.display = "block";
});
submit.addEventListener("click", () => {
  userForm.style.display = "none";
  displayTask();
  setDefault();
});

function setDefault() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = userDue.defaultValue;
  userPriority.value = userPriority.defaultValue;
  userNotes.value = userNotes.defaultValue;
}

editButtons.forEach((div) => {
  div.addEventListener("click", () => {
    userTitle.value = createTodo().titleInput;
    userDescrip.value = createTodo().descripInput;
    userDue.value = createTodo().dueInput;
    userPriority.value = createTodo().priorityInput;
    userNotes.value = createTodo().notesInput;
    userForm.style.display = "flex";
  });
});
deleteButtons.forEach((div) => {
  div.addEventListener("click", () => {
    rightDiv.removeChild(taskDiv);
    setDefault();
  });
});

// finish organzing
