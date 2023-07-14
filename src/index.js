import { createTodo } from "./createTask";

const rightDiv = document.getElementById("right");
const add = document.getElementById("plus");
const userForm = document.getElementById("userForm");
const submit = document.getElementById("submitButton");
const userTitle = document.getElementById("userTitle");
const userDescrip = document.getElementById("userDescrip");
const userDue = document.getElementById("userDue");
const userPriority = document.getElementById("userPriority");
const userNotes = document.getElementById("userNotes");

add.addEventListener("click", () => {
  userForm.style.display = "block";
});
submit.addEventListener("click", () => {
  userForm.style.display = "none";
  setDefault();
});

function setDefault() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = userDue.defaultValue;
  userPriority.value = userPriority.defaultValue;
  userNotes.value = userNotes.defaultValue;
}

const editButtons = document.querySelectorAll(".edit");
const deleteButtons = document.querySelectorAll(".delete");
editButtons.forEach((div) => {
  div.addEventListener("click", () => {
    userTitle.value = titleInput;
    userDescrip.value = descripInput;
    userDue.value = dueInput;
    userPriority.value = priorityInput;
    userNotes.value = notesInput;
    userForm.style.display = "block";
  });
});
deleteButtons.forEach((div) => {
  div.addEventListener("click", () => {
    rightDiv.removeChild(taskDiv);
    setDefault();
  });
});
// finish organzing
