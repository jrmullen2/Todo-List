import { createTodo } from "./createTask";
import edit from "./images/edit-box-icon.png";
import trash from "./images/trash-bin-icon.png";
export function displayProject(count) {
  //Display when user wants to add new tasks to a project;
  const projects = document.getElementById("projects");
  const projectsDiv = document.getElementById("projectsDiv");
  const projectName = document.createElement("div");
  const projectDisplay = document.createElement("div");
  projectDisplay.style.display = "block";
  const addTaskButton = document.createElement("button");
  const userTitle = document.getElementById("userTitle");
  const userDescrip = document.getElementById("userDescrip");
  const userDue = document.getElementById("userDue");
  const userPriority = document.getElementById("userPriority");
  const userNotes = document.getElementById("userNotes");
  const submit1 = document.getElementById("submitButton1");
  const submit2 = document.getElementById("submitButton2");
  const confirm = document.getElementById("confirm");
  const userForm = document.getElementById("userForm");
  const taskDiv3 = document.createElement("div");
  const checkDiv3 = document.createElement("input");
  const titleDiv3 = document.createElement("div");
  const detailsDiv3 = document.createElement("div");
  const detailsHolder3 = document.createElement("div");
  const detailsPriority3 = document.createElement("div");
  const detailsDescrip3 = document.createElement("p");
  const detailsNotes3 = document.createElement("p");
  const dateDiv3 = document.createElement("div");
  const editDiv3 = document.createElement("div");
  const editImage3 = new Image();
  const deleteDiv3 = document.createElement("div");
  const deleteImage3 = new Image();
  let currentTask2 = createTodo().newTask;

  addTaskButton.textContent = "Add Task";
  projectName.classList.add("projectName");
  projectName.textContent = projectInput.value;
  projectDisplay.classList.add("projectDisplay" + count);
  checkDiv3.type = "checkbox";
  titleDiv3.textContent = currentTask2.title;
  detailsDiv3.textContent = "Details";
  detailsPriority3.textContent = "Priority: " + currentTask2.priority;
  detailsDescrip3.textContent = "Description: " + currentTask2.descrip;
  detailsNotes3.textContent = "Notes: " + currentTask2.notes;
  dateDiv3.textContent = currentTask2.due;
  editImage3.src = edit;
  editImage3.alt = "Edit";
  deleteImage3.src = trash;
  deleteImage3.alt = "Delete";
  taskDiv3.classList.add("taskDiv3");
  checkDiv3.id = "checkDiv3";
  titleDiv3.id = "titleDiv3";
  detailsHolder3.id = "dHolder3";
  detailsDiv3.id = "detailsDiv3";
  detailsPriority3.id = "detailsPriority3";
  detailsNotes3.id = "detailsNotes3";
  dateDiv3.id = "dateDiv3";
  editImage3.classList.add("taskImg");
  editDiv3.classList.add("edit");
  deleteDiv3.classList.add("delete");
  deleteImage3.classList.add("taskImg");

  detailsDiv3.addEventListener("click", () => {
    if (detailsHolder3.style.display !== "block") {
      detailsHolder3.style.display = "block";
    } else {
      detailsHolder3.style.display = "none";
    }
  });
  checkDiv3.addEventListener("click", () => {
    titleDiv3.style.textDecoration = "line-through";
    taskDiv3.style.color = "darkgrey";
    editImage3.style.opacity = 0.5;
    deleteImage3.style.opacity = 0.5;
  });
  editDiv3.addEventListener("click", () => {
    userTitle.value = titleInput;
    userDescrip.value = descripInput;
    userDue.value = dueInput;
    userPriority.value = priorityInput;
    userNotes.value = notesInput;
    submit1.style.display = "none";
    submit2.style.display = "none";
    userForm.style.display = "flex";
    confirm.style.display = "block";
  });
  deleteDiv3.addEventListener("click", () => {
    rightContainer.removeChild(taskDiv);
  });
  confirm.addEventListener("click", () => {
    //resetting form to original state after confirming changes
    userForm.style.display = "none";
    confirm.style.display = "none";
    submit1.style.display = "block";
    submit2.style.display = "block";
    currentTask2._title = userTitle.value;
    currentTask2._descrip = userDescrip.value;
    currentTask2._due = userDue.value;
    currentTask2._priority = userPriority.value;
    currentTask2._notes = userNotes.value;
    titleDiv3.textContent = currentTask2.title;
    detailsDiv3.textContent = "Details";
    detailsPriority3.textContent = "Priority: " + currentTask2.priority;
    detailsDescrip3.textContent = "Description: " + currentTask2.descrip;
    detailsNotes3.textContent = "Notes: " + currentTask2.notes;
    dateDiv3.textContent = currentTask2.due;
    setDefault();
  });
  projectName.addEventListener("click", () => {
    projectDisplay.style.display = "block";
  });
  addTaskButton.addEventListener("click", () => {
    submit1.style.display = "none";
    submit2.style.display = "block";
    userForm.style.display = "block";
  });

  detailsHolder3.appendChild(detailsPriority3);
  detailsHolder3.appendChild(detailsDescrip3);
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
  projectDisplay.appendChild(detailsDiv3);
  projectDisplay.appendChild(addTaskButton);
  projectsDiv.appendChild(projectName);
  projects.appendChild(projectDisplay);

  return taskDiv3;
}
