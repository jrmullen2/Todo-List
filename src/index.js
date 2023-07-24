import "./style.css";
import { displayTask } from "./taskDisplay";
import { categoryCheck } from "./categoryCheck";
import { displayProject } from "./projectDisplay";

const allDiv = document.getElementById("allDiv");
const todayDiv = document.getElementById("todayDiv");
const upcomingDiv = document.getElementById("upcomingDiv");
const projectsDiv = document.getElementById("projectsDiv");
const allTask = document.getElementById("allTask");
const todayTask = document.getElementById("todayTask");
const upcomingTask = document.getElementById("upcomingTask");
const projects = document.getElementById("projects");
const projectInput = document.getElementById("projectInput");
const addProject = document.getElementById("addProject");
const addPName = document.getElementById("addPName");
const userTitle = document.getElementById("userTitle");
const userDescrip = document.getElementById("userDescrip");
const userDue = document.getElementById("userDue");
const userPriority = document.getElementById("userPriority");
const userNotes = document.getElementById("userNotes");
const addTask = document.getElementById("addTask");
const userForm = document.getElementById("userForm");
const submit1 = document.getElementById("submitButton1");
const submit2 = document.getElementById("submitButton2");
const addTaskButton = document.getElementById("addTaskButton");
let count;
let projectID = 0;
let whichCategory = categoryCheck();

addTaskButton.textContent = "Add Task";

//Adding tasks for today, upcoming, and all divs
addTask.addEventListener("click", () => {
  userForm.style.display = "block";
  whichCategory.dateMin();
});
//Adding tasks for project div
addTaskButton.addEventListener("click", () => {
  submit1.style.display = "none";
  submit2.style.display = "block";
  userForm.style.display = "block";
});
submit1.addEventListener("click", () => {
  userForm.style.display = "none";
  displayTask();
  setDefault();
});
submit2.addEventListener("click", () => {
  userForm.style.display = "none";
  displayProject(count);
  setDefault();
});

allDiv.addEventListener("click", () => {
  upcomingTask.style.display = "none";
  todayTask.style.display = "none";
  projects.style.display = "none";
  allTask.style.display = "block";
  addTask.style.display = "block";
  addProject.style.display = "none";
});
todayDiv.addEventListener("click", () => {
  allTask.style.display = "none";
  upcomingTask.style.display = "none";
  projects.style.display = "none";
  todayTask.style.display = "block";
  addTask.style.display = "block";
  addProject.style.display = "none";
});
upcomingDiv.addEventListener("click", () => {
  allTask.style.display = "none";
  todayTask.style.display = "none";
  projects.style.display = "none";
  upcomingTask.style.display = "block";
  addTask.style.display = "block";
  addProject.style.display = "none";
});
projectsDiv.addEventListener("click", () => {
  allTask.style.display = "none";
  todayTask.style.display = "none";
  upcomingTask.style.display = "none";
  projects.style.display = "flex";
  addTask.style.display = "none";
  addProject.style.display = "block";
});
addProject.addEventListener("click", () => {
  projectInput.style.display = "block";
  addPName.style.display = "block";
});
addPName.addEventListener("click", () => {
  const projectName = document.createElement("div");
  projectName.classList.add("projectName");
  projectName.id = projectID.toString();
  projectID += 1;
  projectName.textContent = projectInput.value;
  projectsDiv.appendChild(projectName);
  //switch to no display on user input elements
  projectInput.value = projectInput.defaultValue;
  projectInput.style.display = "none";
  addPName.style.display = "none";

  projectName.addEventListener("click", () => {
    count = projectName.id;
    const projectNames = document.querySelectorAll(".projectName");
    projectNames.forEach((div) => {
      if (div.style.backgroundColor === "lavender") {
        const removeDisplays = document.querySelectorAll(".p" + div.id);
        removeDisplays.forEach((div) => {
          div.style.display = "none";
        });
      }
      div.style.backgroundColor = "white";
    });
    projectName.style.backgroundColor = "lavender";
    const bewlongingDivs = document.querySelectorAll(".p" + projectName.id);
    bewlongingDivs.forEach((div) => {
      div.style.display = "block";
    });
    addTaskButton.style.display = "block";
  });
});

function setDefault() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = userDue.defaultValue;
  userPriority.value = userPriority.defaultValue;
  userNotes.value = userNotes.defaultValue;
}
