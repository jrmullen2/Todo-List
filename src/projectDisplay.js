import { createTodo } from "./createTask";
import { categoryCheck } from "./categoryCheck";
import edit from "./images/edit-box-icon.png";
import trash from "./images/trash-bin-icon.png";
export function displayProject(count, number) {
  //Display when user wants to add new tasks to a project;
  const projects = document.getElementById("projects");
  const innerContainer3 = document.createElement("div");
  const projectDisplay = document.createElement("div");
  const addTaskButton = document.getElementById("addTaskButton");
  const userTitle = document.querySelector(".userTitle");
  const userDescrip = document.querySelector(".userDescrip");
  const userDue = document.querySelector(".userDue");
  const userPriority = document.querySelector(".userPriority");
  const userNotes = document.querySelector(".userNotes");
  const submit1 = document.getElementById("submitButton1");
  const submit2 = document.getElementById("submitButton2");
  const confirm1 = document.getElementById("confirm1");
  const confirm2 = document.getElementById("confirm2");
  const userForm = document.getElementById("userForm");
  const taskDiv3 = document.createElement("div");
  const checkDiv3 = document.createElement("input");
  const titleDiv3 = document.createElement("div");
  const detailsDiv3 = document.createElement("div");
  const detailsTitle3 = document.createElement("div");
  const detailsHolder3 = document.createElement("div");
  const detailsPriority3 = document.createElement("div");
  const detailsDescrip3 = document.createElement("p");
  const detailsNotes3 = document.createElement("p");
  const dateDiv3 = document.createElement("div");
  const editDiv3 = document.createElement("div");
  const editImage3 = new Image();
  const deleteDiv3 = document.createElement("div");
  const deleteImage3 = new Image();
  const whichCategory = categoryCheck();
  //Variables that will allow us to access dHolder items in storage.js
  const titleCaption3 = document.createElement("div");
  const priorityCaption3 = document.createElement("div");
  const descriptionCaption3 = document.createElement("div");
  const notesCaption3 = document.createElement("div");
  const storedIDHolder2 = document.getElementById("storedIDHolder2");
  const currentTask2 = createTodo().newTask;

  projectDisplay.style.display = "flex";
  projectDisplay.style.justifyContent = "center";
  projectDisplay.style.width = "100%";
  checkDiv3.type = "checkbox";
  checkDiv3.name = "checkDiv3";
  titleDiv3.textContent = currentTask2.title;
  detailsDiv3.textContent = "Details";
  detailsDiv3.textContent = "Details";
  titleCaption3.textContent = "Title:";
  priorityCaption3.textContent = "Priority:";
  descriptionCaption3.textContent = "Description:";
  notesCaption3.textContent = "Notes:";
  detailsTitle3.textContent = currentTask2.title;
  detailsPriority3.textContent = currentTask2.priority;
  detailsDescrip3.textContent = currentTask2.descrip;
  detailsNotes3.textContent = currentTask2.notes;
  dateDiv3.textContent = currentTask2.due;
  editImage3.src = edit;
  editImage3.alt = "Edit";
  deleteImage3.src = trash;
  deleteImage3.alt = "Delete";

  innerContainer3.classList.add("innerContainer");
  projectDisplay.classList.add("p" + count);
  taskDiv3.classList.add("proj");
  taskDiv3.classList.add("taskDiv");
  taskDiv3.id = "tThree" + number.toString();
  checkDiv3.classList.add("proj");
  checkDiv3.classList.add("checkDiv");
  titleDiv3.classList.add("titleDiv");
  detailsHolder3.classList.add("proj");
  detailsHolder3.classList.add("dHolder");
  detailsDiv3.classList.add("proj");
  detailsDiv3.classList.add("detailsDiv");
  detailsTitle3.classList.add("detailsTitle");
  detailsPriority3.classList.add("detailsPriority");
  detailsNotes3.classList.add("detailsNotes");
  dateDiv3.classList.add("proj");
  dateDiv3.classList.add("dateDiv");
  editImage3.classList.add("taskImg");
  editDiv3.classList.add("proj");
  editDiv3.classList.add("edit");
  deleteDiv3.classList.add("proj");
  deleteDiv3.classList.add("delete");
  deleteImage3.classList.add("taskImg");

  detailsDiv3.addEventListener("click", () => {
    if (detailsHolder3.style.display !== "grid") {
      detailsHolder3.style.display = "grid";
    } else {
      detailsHolder3.style.display = "none";
    }
  });
  checkDiv3.addEventListener("click", () => {
    if (checkDiv3.checked) {
      titleDiv3.style.textDecoration = "line-through";
      taskDiv3.style.color = "darkgrey";
      editImage3.style.opacity = 0.5;
      deleteImage3.style.opacity = 0.5;
    } else {
      titleDiv3.style.textDecoration = "none";
      taskDiv3.style.color = "black";
      editImage3.style.opacity = 1;
      deleteImage3.style.opacity = 1;
    }
  });
  editDiv3.addEventListener("click", () => {
    storedIDHolder2.textContent = taskDiv3.id;
    userTitle.value = currentTask2._title;
    userDescrip.value = currentTask2._descrip;
    userDue.value = currentTask2._due;
    userPriority.value = currentTask2._priority;
    userNotes.value = currentTask2._notes;
    submit1.style.display = "none";
    submit2.style.display = "none";
    userForm.style.display = "flex";
    confirm1.style.display = "block";
    confirm2.style.display = "none";
  });
  deleteDiv3.addEventListener("click", () => {
    projects.removeChild(innerContainer3);
  });

  detailsHolder3.appendChild(titleCaption3);
  detailsHolder3.appendChild(detailsTitle3);
  detailsHolder3.appendChild(priorityCaption3);
  detailsHolder3.appendChild(detailsPriority3);
  detailsHolder3.appendChild(descriptionCaption3);
  detailsHolder3.appendChild(detailsDescrip3);
  detailsHolder3.appendChild(notesCaption3);
  detailsHolder3.appendChild(detailsNotes3);
  editDiv3.appendChild(editImage3);
  deleteDiv3.appendChild(deleteImage3);
  taskDiv3.appendChild(checkDiv3);
  taskDiv3.appendChild(titleDiv3);
  taskDiv3.appendChild(detailsDiv3);
  taskDiv3.appendChild(dateDiv3);
  taskDiv3.appendChild(editDiv3);
  taskDiv3.appendChild(deleteDiv3);
  projectDisplay.appendChild(taskDiv3);
  innerContainer3.appendChild(projectDisplay);
  innerContainer3.appendChild(detailsHolder3);
  projects.appendChild(innerContainer3);
  projects.insertBefore(innerContainer3, addTaskButton);
}
//hgue issue with confirm button erases
//get confirm2 button display working correctly
//Delete setDefault functions from taskDisplay and projectDisplay
//Add another confirm button, and storageHolder divs in index.html.
//Add storageHolder divs into index.js, taskDisplay.js, and projectDisplay.js to allow access of storedID1 and storedID2 between them.
//Move and modify confirm event listeners from taskDisplay.js and projectDisplay.js to index.js. Provide
