import { createTodo } from "./createTask";
import edit from "./images/edit-box-icon.png";
import trash from "./images/trash-bin-icon.png";
import { categoryCheck } from "./categoryCheck";
export function displayTask() {
  const rightContainer = document.getElementById("rightContainer");
  const allDiv = document.getElementById("allDiv");
  const todayDiv = document.getElementById("todayDiv");
  const upcomingDiv = document.getElementById("upcomingDiv");
  const allTask = document.createElement("div");
  const todayTask = document.createElement("div");
  const upcomingTask = document.createElement("div");
  const userTitle = document.getElementById("userTitle");
  const userDescrip = document.getElementById("userDescrip");
  const userDue = document.getElementById("userDue");
  const userPriority = document.getElementById("userPriority");
  const userNotes = document.getElementById("userNotes");
  const submit = document.getElementById("submitButton");
  const confirm = document.getElementById("confirm");
  const userForm = document.getElementById("userForm");
  const taskDiv1 = document.createElement("div");
  const checkDiv1 = document.createElement("input");
  const titleDiv1 = document.createElement("div");
  const detailsDiv1 = document.createElement("div");
  const detailsHolder1 = document.createElement("div");
  const detailsPriority1 = document.createElement("div");
  const detailsDescrip1 = document.createElement("p");
  const detailsNotes1 = document.createElement("p");
  const detailsNotes2 = document.createElement("p");
  const dateDiv1 = document.createElement("div");
  const editDiv1 = document.createElement("div");
  const editImage1 = new Image();
  const deleteDiv1 = document.createElement("div");
  const deleteImage1 = new Image();
  //Cloning taskDiv1 and its contents so allDiv can display the same tasks as upcomingDiv and todayDiv
  const taskDiv2 = document.createElement("div");
  const checkDiv2 = document.createElement("input");
  const titleDiv2 = document.createElement("div");
  const detailsDiv2 = document.createElement("div");
  const detailsHolder2 = document.createElement("div");
  const detailsPriority2 = document.createElement("div");
  const detailsDescrip2 = document.createElement("p");
  const dateDiv2 = document.createElement("div");
  const editDiv2 = document.createElement("div");
  const editImage2 = new Image();
  const deleteDiv2 = document.createElement("div");
  const deleteImage2 = new Image();
  const whichCategory = categoryCheck();

  let currentTask = createTodo().newTask;
  let titleInput = userTitle.value;
  let descripInput = userDescrip.value;
  let dueInput = userDue.value;
  let priorityInput = userPriority.value;
  let notesInput = userNotes.value;

  //setting up inital taskDiv and its contents
  allTask.textContent = "All";
  checkDiv1.type = "checkbox";
  titleDiv1.textContent = currentTask.title;
  detailsDiv1.textContent = "Details";
  detailsPriority1.textContent = "Priority: " + currentTask.priority;
  detailsDescrip1.textContent = "Description: " + currentTask.descrip;
  detailsNotes1.textContent = "Notes: " + currentTask.notes;
  dateDiv1.textContent = currentTask.due;
  editImage1.src = edit;
  editImage1.alt = "Edit";
  deleteImage1.src = trash;
  deleteImage1.alt = "Delete";
  checkDiv2.type = "checkbox";
  titleDiv2.textContent = currentTask.title;
  detailsDiv2.textContent = "Details";
  detailsPriority2.textContent = "Priority: " + currentTask.priority;
  detailsDescrip2.textContent = "Description: " + currentTask.descrip;
  detailsNotes2.textContent = "Notes: " + currentTask.notes;
  dateDiv2.textContent = currentTask.due;
  editImage2.src = edit;
  editImage2.alt = "Edit";
  deleteImage2.src = trash;
  deleteImage2.alt = "Delete";

  allTask.id = "allTask";
  todayTask.id = "todayTask";
  upcomingTask.id = "upcomingTask";
  taskDiv1.classList.add("taskDiv1");
  checkDiv1.id = "checkDiv";
  titleDiv1.id = "titleDiv";
  detailsHolder1.id = "dHolder1";
  detailsDiv1.id = "detailsDiv1";
  detailsPriority1.id = "detailsPriority1";
  detailsNotes1.id = "detailsNotes1";
  dateDiv1.id = "dateDiv1";
  editImage1.classList.add("taskImg");
  editDiv1.classList.add("edit");
  deleteDiv1.classList.add("delete");
  deleteImage1.classList.add("taskImg");
  taskDiv2.classList.add("taskDiv2");
  checkDiv2.id = "checkDiv2";
  titleDiv2.classList.id = "titleDiv2";
  detailsHolder2.id = "dHolder2";
  detailsDiv2.id = "detailsDiv2";
  detailsPriority2.id = "detailsPriority2";
  detailsNotes2.id = "detailsNotes2";
  dateDiv2.id = "dateDiv2";
  editImage2.classList.add("taskImg");
  editDiv2.classList.add("edit");
  deleteDiv2.classList.add("delete");
  deleteImage2.classList.add("taskImg");

  detailsDiv1.addEventListener("click", () => {
    if (detailsHolder1.style.display !== "block") {
      detailsHolder1.style.display = "block";
    } else {
      detailsHolder1.style.display = "none";
    }
  });
  detailsDiv2.addEventListener("click", () => {
    if (detailsHolder2.style.display !== "block") {
      detailsHolder2.style.display = "block";
    } else {
      detailsHolder2.style.display = "none";
    }
  });
  checkDiv1.addEventListener("click", () => {
    titleDiv1.style.textDecoration = "line-through";
    taskDiv1.style.color = "darkgrey";
    editImage1.style.opacity = 0.5;
    deleteImage1.style.opacity = 0.5;
  });
  checkDiv2.addEventListener("click", () => {
    titleDiv2.style.textDecoration = "line-through";
    taskDiv2.style.color = "darkgrey";
    editImage2.style.opacity = 0.5;
    deleteImage2.style.opacity = 0.5;
  });
  editDiv1.addEventListener("click", () => {
    userTitle.value = titleInput;
    userDescrip.value = descripInput;
    userDue.value = dueInput;
    userPriority.value = priorityInput;
    userNotes.value = notesInput;
    submit.style.display = "none";
    userForm.style.display = "flex";
    confirm.style.display = "block";
  });
  editDiv2.addEventListener("click", () => {
    userTitle.value = titleInput;
    userDescrip.value = descripInput;
    userDue.value = dueInput;
    userPriority.value = priorityInput;
    userNotes.value = notesInput;
    submit.style.display = "none";
    userForm.style.display = "flex";
    confirm.style.display = "block";
  });
  deleteDiv1.addEventListener("click", () => {
    rightContainer.removeChild(taskDiv);
  });
  deleteDiv2.addEventListener("click", () => {
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

  detailsHolder1.appendChild(detailsPriority1);
  detailsHolder1.appendChild(detailsDescrip1);
  detailsHolder1.appendChild(detailsNotes1);
  editDiv1.appendChild(editImage1);
  deleteDiv1.appendChild(deleteImage1);
  taskDiv1.appendChild(checkDiv1);
  taskDiv1.appendChild(titleDiv1);
  taskDiv1.appendChild(detailsDiv1);
  taskDiv1.appendChild(dateDiv1);
  taskDiv1.appendChild(editDiv1);
  taskDiv1.appendChild(deleteDiv1);
  detailsHolder2.appendChild(detailsPriority2);
  detailsHolder2.appendChild(detailsDescrip2);
  detailsHolder2.appendChild(detailsNotes2);
  editDiv2.appendChild(editImage2);
  deleteDiv2.appendChild(deleteImage2);
  taskDiv2.appendChild(checkDiv2);
  taskDiv2.appendChild(titleDiv2);
  taskDiv2.appendChild(detailsDiv2);
  taskDiv2.appendChild(dateDiv2);
  taskDiv2.appendChild(editDiv2);
  taskDiv2.appendChild(deleteDiv2);
  allTask.appendChild(taskDiv2);
  allTask.appendChild(detailsHolder2);

  if (whichCategory.sortDiv() === "today") {
    taskDiv1.classList.add("today");
    todayTask.appendChild(taskDiv1);
    todayTask.appendChild(detailsHolder1);
  } else if (whichCategory.sortDiv() === "upcoming") {
    taskDiv1.classList.add("upcoming");
    upcomingTask.appendChild(taskDiv1);
    upcomingTask.appendChild(detailsHolder1);
  }

  allDiv.addEventListener("click", () => {
    rightContainer.removeChild(rightContainer.lastElementChild);
    rightContainer.appendChild(allTask);
  });
  todayDiv.addEventListener("click", () => {
    rightContainer.removeChild(rightContainer.lastElementChild);
    rightContainer.appendChild(todayTask);
  });
  upcomingDiv.addEventListener("click", () => {
    rightContainer.removeChild(rightContainer.lastElementChild);
    rightContainer.appendChild(upcomingTask);
  });

  return allTask;
}
