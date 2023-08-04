import "./style.css";
import { displayTask } from "./taskDisplay";
import { categoryCheck } from "./categoryCheck";
import { displayProject } from "./projectDisplay";
import { useStorage } from "./storage";

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
const confirm1 = document.getElementById("confirm1");
const confirm2 = document.getElementById("confirm2");
let count;
let projectID = 0;
let currentProjectClass;
let whichCategory = categoryCheck();
let storedID1;
let storedID2;
let storedID3;
const storedIDHolder1 = document.getElementById("storedIDHolder1");
const storedIDHolder2 = document.getElementById("storedIDHolder2");
const storedIDHolder3 = document.getElementById("storedIDHolder3");
let editIDNumber1 = 0;
let editIDNumber2 = 0;
let pageRefreshed = false;

if (!localStorage.getItem("projectID")) {
  localStorage.setItem("projectID", projectID);
}
if (localStorage.getItem("allTask") || localStorage.getItem("projectID") != 0) {
  useStorage(false, true);
  pageRefreshed = true;
  projectID = localStorage.getItem("projectID");
}
addTaskButton.textContent = "Add Task";

//Adding tasks for today, upcoming, and all divs
addTask.addEventListener("click", () => {
  setDefault();
  submit1.style.display = "block";
  submit2.style.display = "none";
  confirm1.style.display = "none";
  confirm2.style.display = "none";
  userForm.style.display = "flex";
  whichCategory.dateMin();
});
//Adding tasks for project div
addTaskButton.addEventListener("click", () => {
  setDefault();
  submit1.style.display = "none";
  submit2.style.display = "block";
  confirm1.style.display = "none";
  confirm2.style.display = "none";
  userForm.style.display = "flex";
  whichCategory.dateMin();
});
submit1.addEventListener("click", () => {
  userForm.style.display = "none";
  //When task is added "No tasks yet" goes away
  displayTask(editIDNumber1);
  editIDNumber1 += 1;

  if (userDue.value == categoryCheck().currentDate) {
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
  displayProject(count, editIDNumber2);
  editIDNumber2 += 1;
  setDefault();
  pTitle.style.marginBottom = "2.5%";
  localStorage.setItem("p" + currentProjectClass, projects.innerHTML);
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
  projectInput.style.display = "none";
  addPName.style.display = "none";
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
  projectInput.style.display = "none";
  addPName.style.display = "none";
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
  projectInput.style.display = "none";
  addPName.style.display = "none";
  projectsDivNames.style.display = "none";
  userForm.style.display = "none";
  setDefault();
});
projectsDivTitle.addEventListener("click", () => {
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
  if (document.querySelector(".projectName")) {
    document.querySelectorAll(".projectName").forEach((div) => {
      div.style.backgroundColor = "white";
      div.style.color = "black";
      div.parentElement.childNodes[1].style.display = "none";
    });
  }
  setDefault();
});
confirm1.addEventListener("click", () => {
  //resetting form to original state after confirming changes
  userForm.style.display = "none";
  confirm1.style.display = "none";
  submit1.style.display = "block";
  submit2.style.display = "block";
  storedID1 = storedIDHolder1.textContent;
  storedID3 = storedIDHolder3.textContent;
  localStorage.setItem("storedID1", storedID1);
  document.getElementById(storedID1).childNodes[1].textContent =
    userTitle.value;
  document.getElementById(
    storedID1
  ).parentElement.childNodes[1].childNodes[1].textContent = userTitle.value;
  document.getElementById(
    storedID1
  ).parentElement.childNodes[1].childNodes[5].textContent = userDescrip.value;
  document.getElementById(storedID1).childNodes[3].textContent = userDue.value;
  document.getElementById(
    storedID1
  ).parentElement.childNodes[1].childNodes[3].textContent = userPriority.value;
  document.getElementById(
    storedID1
  ).parentElement.childNodes[1].childNodes[7].textContent = userNotes.value;
  document.getElementById(storedID3).childNodes[1].textContent =
    userTitle.value;
  document.getElementById(
    storedID3
  ).parentElement.childNodes[1].childNodes[1].textContent = userTitle.value;
  document.getElementById(
    storedID3
  ).parentElement.childNodes[1].childNodes[5].textContent = userDescrip.value;
  document.getElementById(storedID3).childNodes[3].textContent = userDue.value;
  document.getElementById(
    storedID3
  ).parentElement.childNodes[1].childNodes[3].textContent = userPriority.value;
  document.getElementById(
    storedID3
  ).parentElement.childNodes[1].childNodes[7].textContent = userNotes.value;
  localStorage.setItem("allTask", allTask.innerHTML);
  localStorage.setItem("todayTask", todayTask.innerHTML);
  localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
});
confirm2.addEventListener("click", () => {
  userForm.style.display = "none";
  confirm2.style.display = "none";
  submit1.style.display = "block";
  submit2.style.display = "block";
  storedID2 = storedIDHolder2.textContent;
  localStorage.setItem("storedID2", storedID2);
  document.getElementById(storedID2).childNodes[1].textContent =
    userTitle.value;
  document.getElementById(
    storedID2
  ).parentElement.parentElement.childNodes[1].childNodes[1].textContent =
    userTitle.value;

  document.getElementById(
    storedID2
  ).parentElement.parentElement.childNodes[1].childNodes[5].textContent =
    userDescrip.value;
  document.getElementById(storedID2).childNodes[3].textContent = userDue.value;
  document.getElementById(
    storedID2
  ).parentElement.parentElement.childNodes[1].childNodes[3].textContent =
    userPriority.value;
  document.getElementById(
    storedID2
  ).parentElement.parentElement.childNodes[1].childNodes[7].textContent =
    userNotes.value;
  localStorage.setItem("p" + currentProjectClass, projects.innerHTML);
});

//Click "New Project" button and display input and submit button
addProject.addEventListener("click", () => {
  projectInput.style.display = "block";
  addPName.style.display = "block";
});
addPName.addEventListener("click", () => {
  const pNameHolders = document.createElement("div");
  const nameDeleteButton = document.createElement("button");
  const projectName = document.createElement("div");
  nameDeleteButton.textContent = "X";
  nameDeleteButton.classList.add("nameDeleteButton");
  projectName.classList.add("projectName");
  projectName.id = projectID.toString();
  projectID = parseInt(projectID) + 1;
  localStorage.setItem("projectID", projectID);
  projectName.textContent = projectInput.value + "bro";
  localStorage.setItem(projectName.id, projectName.textContent);
  pNameHolders.appendChild(projectName);
  pNameHolders.appendChild(nameDeleteButton);
  pNameHolders.classList.add("pNameHolders");
  projectsDivNames.appendChild(pNameHolders);
  if (pageRefreshed === true) {
    useStorage(false, false);
    projectsDivNames.removeChild(pNameHolders);
  }
  //opens newly added project name automatically
  let projectNames = document.querySelectorAll(".projectName");
  let nameDeleteButtons = document.querySelectorAll(".nameDeleteButton");
  projectName.style.backgroundColor = "coral";
  projectName.style.color = "white";
  nameDeleteButtons.forEach((div) => {
    div.style.display = "none";
  });
  nameDeleteButton.style.display = "block";
  currentProjectClass = projectName.id;
  allTask.style.display = "none";
  todayTask.style.display = "none";
  upcomingTask.style.display = "none";
  projects.style.display = "flex";
  pTitle.textContent = projectName.textContent;
  addTaskButton.style.display = "block";
  localStorage.setItem("p" + currentProjectClass, projects.innerHTML);
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
  //switch to no display on user input elements
  projectInput.value = projectInput.defaultValue;
  projectInput.style.display = "none";
  addPName.style.display = "none";
  nameDeleteButton.addEventListener("click", () => {
    const divsToBeRemoved = document.querySelectorAll(
      ".innerContainer" + ".i" + projectName.id
    );
    divsToBeRemoved.forEach((div) => {
      projects.removeChild(div);
    });
    projectsDivNames.removeChild(pNameHolders);
    localStorage.removeItem("p" + projectName.id);
    localStorage.removeItem(projectName.id);
    pTitle.style.display = "none";
    addTaskButton.style.display = "none";
  });
  //When a project name is clicked it displays the tasks associated with it
  projectName.addEventListener("click", () => {
    allTask.style.display = "none";
    todayTask.style.display = "none";
    upcomingTask.style.display = "none";
    projects.style.display = "flex";

    projectNames = document.querySelectorAll(".projectName");
    nameDeleteButtons = document.querySelectorAll(".nameDeleteButton");
    nameDeleteButtons.forEach((div) => {
      div.style.display = "none";
    });
    nameDeleteButton.style.display = "block";
    currentProjectClass = projectName.id;
    //ensures that pTitle and addTaskButton will display if user deletes a project name
    pTitle.textContent = "";
    pTitle.textContent = projectName.textContent;
    pTitle.style.display = "block";
    addTaskButton.style.display = "block";
    //resets any selected divs
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
  });
});

function setDefault() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = whichCategory.currentDate;
  userPriority.value = "High";
  userNotes.value = userNotes.defaultValue;
}
//Link taskDiv1 and taskDiv2 and their functionalities
//fix date edits for upcoming today
