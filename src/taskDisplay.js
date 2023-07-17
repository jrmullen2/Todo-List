import { createTodo } from "./createTask";
import edit from "./images/edit-box-icon.png";
import trash from "./images/trash-bin-icon.png";
export function displayTask() {
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
    detailsHolder.style.display = "block";
  });
  checkDiv.addEventListener("click", () => {
    titleDiv.textContent = titleDiv.textContent.strike();
    taskDiv.style.color = "gainsboro";
    editImage.style.opacity = 0.5;
    deleteImage.style.opacity = 0.5;
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
// finish greying out taskdiv provide funtionality for edit and delete and fix detail
