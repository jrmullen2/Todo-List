import "./style.css";
import { displayTask } from "./taskDisplay";
import { categoryCheck } from "./categoryCheck";

const allDiv = document.getElementById("allDiv");
const todayDiv = document.getElementById("todayDiv");
const upcomingDiv = document.getElementById("upcomingDiv");
const allTask = document.getElementById("allTask");
const todayTask = document.getElementById("todayTask");
const upcomingTask = document.getElementById("upcomingTask");
const userTitle = document.getElementById("userTitle");
const userDescrip = document.getElementById("userDescrip");
const userDue = document.getElementById("userDue");
const userPriority = document.getElementById("userPriority");
const userNotes = document.getElementById("userNotes");
const add = document.getElementById("plus");
const userForm = document.getElementById("userForm");
const submit = document.getElementById("submitButton");

let whichCategory = categoryCheck();

add.addEventListener("click", () => {
  userForm.style.display = "block";
  whichCategory.dateMin();
});
submit.addEventListener("click", () => {
  userForm.style.display = "none";
  displayTask();
  setDefault();
});
allDiv.addEventListener("click", () => {
  upcomingTask.style.display = "none";
  todayTask.style.display = "none";
  allTask.style.display = "block";
});
todayDiv.addEventListener("click", () => {
  allTask.style.display = "none";
  upcomingTask.style.display = "none";
  todayTask.style.display = "block";
});
upcomingDiv.addEventListener("click", () => {
  allTask.style.display = "none";
  todayTask.style.display = "none";
  upcomingTask.style.display = "block";
});

function setDefault() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = userDue.defaultValue;
  userPriority.value = userPriority.defaultValue;
  userNotes.value = userNotes.defaultValue;
}
