import "./style.css";
import { displayTask } from "./taskDisplay";
import { categoryCheck } from "./categoryCheck";
import { displayProject } from "./projectDisplay";

const allDiv = document.getElementById("allDiv");
const todayDiv = document.getElementById("todayDiv");
const upcomingDiv = document.getElementById("upcomingDiv");
const projectsDiv = document.getElementById("projectsDiv");
const projectsDivTitle = document.getElementById("projectsDivTitle");
const pTitle = document.getElementById("pTitle");
const projectNames = document.querySelectorAll(".projectName");
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
  submit1.style.display = "block";
  submit2.style.display = "none";
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
  todayDiv.style.backgroundColor = "white";
  todayDiv.style.color = "black";
  upcomingDiv.style.backgroundColor = "white";
  upcomingDiv.style.color = "black";
  projectsDivTitle.style.backgroundColor = "white";
  projectsDivTitle.style.color = "black";
  allDiv.style.backgroundColor = "cornflowerblue";
  allDiv.style.color = "white";
  upcomingTask.style.display = "none";
  todayTask.style.display = "none";
  projects.style.display = "none";
  allTask.style.display = "block";
  addTask.style.display = "block";
  addProject.style.display = "none";
});
todayDiv.addEventListener("click", () => {
  allDiv.style.backgroundColor = "white";
  allDiv.style.color = "black";
  upcomingDiv.style.backgroundColor = "white";
  upcomingDiv.style.color = "black";
  projectsDivTitle.style.backgroundColor = "white";
  projectsDivTitle.style.color = "black";
  todayDiv.style.backgroundColor = "cornflowerblue";
  todayDiv.style.color = "white";
  allTask.style.display = "none";
  upcomingTask.style.display = "none";
  projects.style.display = "none";
  todayTask.style.display = "block";
  addTask.style.display = "block";
  addProject.style.display = "none";
});
upcomingDiv.addEventListener("click", () => {
  allDiv.style.backgroundColor = "white";
  allDiv.style.color = "black";
  todayDiv.style.backgroundColor = "white";
  todayDiv.style.color = "black";
  projectsDivTitle.style.backgroundColor = "white";
  projectsDivTitle.style.color = "black";
  upcomingDiv.style.backgroundColor = "cornflowerblue";
  upcomingDiv.style.color = "white";
  allTask.style.display = "none";
  todayTask.style.display = "none";
  projects.style.display = "none";
  upcomingTask.style.display = "block";
  addTask.style.display = "block";
  addProject.style.display = "none";
});
projectsDiv.addEventListener("click", () => {
  allDiv.style.backgroundColor = "white";
  allDiv.style.color = "black";
  todayDiv.style.backgroundColor = "white";
  todayDiv.style.color = "black";
  upcomingDiv.style.backgroundColor = "white";
  upcomingDiv.style.color = "black";
  projectsDivTitle.style.backgroundColor = "cornflowerblue";
  projectsDivTitle.style.color = "white";
  allTask.style.display = "none";
  todayTask.style.display = "none";
  upcomingTask.style.display = "none";
  projects.style.display = "flex";
  addTask.style.display = "none";
  addProject.style.display = "block";
});
projectsDivTitle.addEventListener("click", () => {
  pTitle.textContent = "Projects";
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

  //When a project name is clicked it displays the tasks associated with it
  projectName.addEventListener("click", () => {
    pTitle.textContent = projectName.textContent;
    count = projectName.id;
    projectNames.forEach((div) => {
      if (div.style.backgroundColor === "lavender") {
        const removeDisplays = document.querySelectorAll(".p" + div.id);
        removeDisplays.forEach((div) => {
          div.style.display = "none";
        });
      }
      div.style.backgroundColor = "white";
    });
    //Shows user what project is currently selected
    projectName.style.backgroundColor = "lavender";
    const belongingDivs = document.querySelectorAll(".p" + projectName.id);
    belongingDivs.forEach((div) => {
      div.style.display = "block";
    });
    addTaskButton.style.display = "block";
  });
});

function setDefault() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = userDue.defaultValue;
  userPriority.value = "high";
  userNotes.value = userNotes.defaultValue;
}
//When projects is clicked we need to show all projects (kinda like all) along with a title. When a new project is created it should automatically open the new project. We need to put a message like no tasks for this project yet. We need to style nav divs
