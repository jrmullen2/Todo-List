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
const rightContainer = document.getElementById("rightContainer");
const allTask = document.createElement("div");
const todayTask = document.createElement("div");
const upcomingTask = document.createElement("div");
const allDiv = document.getElementById("allDiv");
const todayDiv = document.getElementById("todayDiv");
const upcomingDiv = document.getElementById("upcomingDiv");
let whichCategory = categoryCheck();

allTask.id = "allTask";
todayTask.id = "todayTask";
upcomingTask.id = "upcomingTask";

add.addEventListener("click", () => {
  userForm.style.display = "block";
  whichCategory.dateMin();
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

allDiv.addEventListener("click", () => {
  if (rightContainer.firstChild !== allTask) {
    rightContainer.removeChild(rightContainer.firstChild);
    rightContainer.appendChild(allTask);
  }
});
todayDiv.addEventListener("click", () => {
  if (rightContainer.firstChild !== todayTask) {
    rightContainer.removeChild(rightContainer.firstChild);
    rightContainer.appendChild(todayTask);
  }
});
upcomingDiv.addEventListener("click", () => {
  if (rightContainer.firstChild !== upcomingTask) {
    rightContainer.removeChild(rightContainer.firstChild);
    rightContainer.appendChild(upcomingTask);
  }
});
