import "./style.css";
import { displayTask } from "./taskDisplay";
import { categoryCheck } from "./categoryCheck";

const userTitle = document.getElementById("userTitle");
const userDescrip = document.getElementById("userDescrip");
const userDue = document.getElementById("userDue");
const userPriority = document.getElementById("userPriority");
const userNotes = document.getElementById("userNotes");
const add = document.getElementById("plus");
const userForm = document.getElementById("userForm");
const submit = document.getElementById("submitButton");
const whichCategory = categoryCheck();

add.addEventListener("click", () => {
  userForm.style.display = "block";
  whichCategory.dateMin();
});
submit.addEventListener("click", () => {
  userForm.style.display = "none";
  whichCategory.sortDiv();
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
