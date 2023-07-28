import "./style.css";
import { displayTask } from "./taskDisplay";
import { categoryCheck } from "./categoryCheck";
import { displayProject } from "./projectDisplay";

const allDiv = document.getElementById("allDiv");
const nTask1 = document.getElementById("nTask1");
const todayDiv = document.getElementById("todayDiv");
const nTask2 = document.getElementById("nTask2");
const upcomingDiv = document.getElementById("upcomingDiv");
const nTask3 = document.getElementById("nTask3");
const projectsDiv = document.getElementById("projectsDiv");
const projectsDivTitle = document.getElementById("projectsDivTitle");
const projectsDivNames = document.getElementById("projectsDivNames");
const pTitle = document.getElementById("pTitle");
const allTask = document.getElementById("allTask");
const todayTask = document.getElementById("todayTask");
const upcomingTask = document.getElementById("upcomingTask");
const projects = document.getElementById("projects");
const projectInput = document.getElementById("projectInput");
const addProject = document.getElementById("addProject");
const addPName = document.getElementById("addPName");
const userTitle = document.querySelector(".userTitle");
const userDescrip = document.querySelector(".userDescrip");
const userDue = document.querySelector(".userDue");
const userPriority = document.querySelector(".userPriority");
const userNotes = document.querySelector(".userNotes");
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
  userForm.style.display = "flex";
  whichCategory.dateMin();
});
//Adding tasks for project div
addTaskButton.addEventListener("click", () => {
  submit1.style.display = "none";
  submit2.style.display = "block";
  userForm.style.display = "flex";
});
submit1.addEventListener("click", () => {
  userForm.style.display = "none";
  //When task is added "No tasks yet" goes away
  const todayOrUpcoming = displayTask();
  if (todayOrUpcoming === "today") {
    nTask2.style.display = "none";
  } else {
    nTask3.style.display = "none";
  }
  nTask1.style.display = "none";
  setDefault();
  localStorage.setItem("allTask", allTask.innerHTML);
  localStorage.setItem("todayTask", todayTask.innerHTML);
  localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
});
submit2.addEventListener("click", () => {
  userForm.style.display = "none";
  displayProject(count);
  setDefault();
  pTitle.style.marginBottom = "2.5%";
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
  allTask.style.display = "flex";
  addTask.style.display = "block";
  addProject.style.display = "none";
  projectsDivNames.style.display = "none";
  userForm.style.display = "none";
  setDefault();
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
  todayTask.style.display = "flex";
  addTask.style.display = "block";
  addProject.style.display = "none";
  projectsDivNames.style.display = "none";
  userForm.style.display = "none";
  setDefault();
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
  upcomingTask.style.display = "flex";
  addTask.style.display = "block";
  addProject.style.display = "none";
  projectsDivNames.style.display = "none";
  userForm.style.display = "none";
  setDefault();
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
  addTask.style.display = "none";
  addProject.style.display = "block";
  projectsDivNames.style.display = "block";
  userForm.style.display = "none";
  setDefault();
});
//input for adding project
addProject.addEventListener("click", () => {
  projectInput.style.display = "block";
  addPName.style.display = "block";
});
//"submit" button for input above
addPName.addEventListener("click", () => {
  const projectName = document.createElement("div");
  projectName.classList.add("projectName");
  projectName.id = projectID.toString();
  projectID += 1;
  projectName.textContent = projectInput.value;
  projectsDivNames.appendChild(projectName);
  //switch to no display on user input elements
  projectInput.value = projectInput.defaultValue;
  projectInput.style.display = "none";
  addPName.style.display = "none";
  //When a project name is clicked it displays the tasks associated with it
  projectName.addEventListener("click", () => {
    const projectNames = document.querySelectorAll(".projectName");
    allTask.style.display = "none";
    todayTask.style.display = "none";
    upcomingTask.style.display = "none";
    projects.style.display = "flex";
    //resets any selected divs
    pTitle.textContent = projectName.textContent;
    count = projectName.id;
    projectNames.forEach((div) => {
      if (div.style.backgroundColor == "coral") {
        const removeDisplays = document.querySelectorAll(".p" + div.id);
        removeDisplays.forEach((div) => {
          div.style.display = "none";
        });
      }
      div.style.backgroundColor = "white";
      div.style.color = "black";
    });
    //Shows user what project is currently selected
    projectName.style.backgroundColor = "coral";
    projectName.style.color = "white";
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
  userDue.value = whichCategory.currentDate;
  userPriority.value = "high";
  userNotes.value = userNotes.defaultValue;
}
// We need to style nav divs. Finish styling project margins make them change percent when a task is added
