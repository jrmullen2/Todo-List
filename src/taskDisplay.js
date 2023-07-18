import { createTodo } from "./createTask";
import edit from "./images/edit-box-icon.png";
import trash from "./images/trash-bin-icon.png";
export function displayTask() {
  const userTitle = document.getElementById("userTitle");
  const userDescrip = document.getElementById("userDescrip");
  const userDue = document.getElementById("userDue");
  const userPriority = document.getElementById("userPriority");
  const userNotes = document.getElementById("userNotes");
  const submit = document.getElementById("submitButton");
  const confirm = document.getElementById("confirm");
  const userForm = document.getElementById("userForm");
  const rightContainer = document.getElementById("rightContainer");
  const taskDiv = document.createElement("div");
  const checkDiv = document.createElement("input");
  const titleDiv = document.createElement("div");
  const detailsDiv = document.createElement("div");
  const detailsHolder = document.createElement("div");
  const detailsPriority = document.createElement("div");
  const detailsDescrip = document.createElement("p");
  const detailsNotes = document.createElement("p");
  const dateDiv = document.createElement("div");
  const editDiv = document.createElement("div");
  const editImage = new Image();
  const deleteDiv = document.createElement("div");
  const deleteImage = new Image();
  let currentTask = createTodo().newTask;
  let titleInput = userTitle.value;
  let descripInput = userDescrip.value;
  let dueInput = userDue.value;
  let priorityInput = userPriority.value;
  let notesInput = userNotes.value;

  //setting up inital taskDiv and its contents
  checkDiv.type = "checkbox";
  titleDiv.textContent = currentTask.title;
  detailsDiv.textContent = "Details";
  detailsPriority.textContent = "Priority: " + currentTask.priority;
  detailsDescrip.textContent = "Description: " + currentTask.descrip;
  detailsNotes.textContent = "Notes: " + currentTask.notes;
  dateDiv.textContent = currentTask.due;
  editImage.src = edit;
  editImage.alt = "Edit";
  deleteImage.src = trash;
  deleteImage.alt = "Delete";

  taskDiv.id = "taskDiv";
  checkDiv.id = "checkDiv";
  titleDiv.id = "titleDiv";
  detailsHolder.id = "dHolder";
  detailsDiv.id = "detailsDiv";
  detailsPriority.id = "detailsPriority";
  detailsNotes.id = "detailsNotes";
  dateDiv.id = "dateDiv";
  editImage.classList.add("taskImg");
  editDiv.classList.add("edit");
  deleteDiv.classList.add("delete");
  deleteImage.classList.add("taskImg");

  detailsDiv.addEventListener("click", () => {
    if (detailsHolder.style.display !== "block") {
      detailsHolder.style.display = "block";
    } else {
      detailsHolder.style.display = "none";
    }
  });
  checkDiv.addEventListener("click", () => {
    titleDiv.style.textDecoration = "line-through";
    taskDiv.style.color = "darkgrey";
    editImage.style.opacity = 0.5;
    deleteImage.style.opacity = 0.5;
  });
  editDiv.addEventListener("click", () => {
    userTitle.value = titleInput;
    userDescrip.value = descripInput;
    userDue.value = dueInput;
    userPriority.value = priorityInput;
    userNotes.value = notesInput;
    submit.style.display = "none";
    userForm.style.display = "flex";
    confirm.style.display = "block";
  });
  deleteDiv.addEventListener("click", () => {
    rightContainer.removeChild(taskDiv);
  });
  confirm.addEventListener("click", () => {
    //resetting form to original state after confirming changes
    userForm.style.display = "none";
    confirm.style.display = "none";
    submit.style.display = "block";
    currentTask._title = userTitle.value;
    currentTask._descrip = userDescrip.value;
    currentTask._due = userDue.value;
    currentTask._priority = userPriority.value;
    currentTask._notes = userNotes.value;
    titleDiv.textContent = currentTask.title;
    detailsDiv.textContent = "Details";
    detailsPriority.textContent = "Priority: " + currentTask.priority;
    detailsDescrip.textContent = "Description: " + currentTask.descrip;
    detailsNotes.textContent = "Notes: " + currentTask.notes;
    dateDiv.textContent = currentTask.due;
    setDefault();
  });

  detailsHolder.appendChild(detailsPriority);
  detailsHolder.appendChild(detailsDescrip);
  detailsHolder.appendChild(detailsNotes);
  editDiv.appendChild(editImage);
  deleteDiv.appendChild(deleteImage);
  taskDiv.appendChild(checkDiv);
  taskDiv.appendChild(titleDiv);
  taskDiv.appendChild(detailsDiv);
  taskDiv.appendChild(dateDiv);
  taskDiv.appendChild(editDiv);
  taskDiv.appendChild(deleteDiv);
  rightContainer.appendChild(taskDiv);
  rightContainer.appendChild(detailsHolder);

  return currentTask;
}
