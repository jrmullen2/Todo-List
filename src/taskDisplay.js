import { createTodo } from "./createTask";
import edit from "./images/edit-box-icon.png";
import trash from "./images/trash-bin-icon.png";
import { categoryCheck } from "./categoryCheck";
export function displayTask(number) {
  const allTask = document.getElementById("allTask");
  const todayTask = document.getElementById("todayTask");
  const upcomingTask = document.getElementById("upcomingTask");
  const innerContainer1 = document.createElement("div");
  const innerContainer2 = document.createElement("div");
  const userTitle = document.querySelector(".userTitle");
  const userDescrip = document.querySelector(".userDescrip");
  const userDue = document.querySelector(".userDue");
  const userPriority = document.querySelector(".userPriority");
  const userNotes = document.querySelector(".userNotes");
  const submit1 = document.getElementById("submitButton1");
  const submit2 = document.getElementById("submitButton2");
  const userForm = document.getElementById("userForm");
  const confirm1 = document.getElementById("confirm1");
  const confirm2 = document.getElementById("confirm2");
  const taskDiv1 = document.createElement("div");
  const checkDiv1 = document.createElement("input");
  const titleDiv1 = document.createElement("div");
  const detailsDiv1 = document.createElement("div");
  const detailsHolder1 = document.createElement("div");
  const detailsTitle1 = document.createElement("div");
  const detailsPriority1 = document.createElement("div");
  const detailsDescrip1 = document.createElement("p");
  const detailsNotes1 = document.createElement("p");
  const dateDiv1 = document.createElement("div");
  const editDiv1 = document.createElement("div");
  const editImage1 = new Image();
  const deleteDiv1 = document.createElement("div");
  const deleteImage1 = new Image();
  const currentTask = createTodo().newTask;
  //Cloning taskDiv1 and its contents so allDiv can display the same tasks as upcomingDiv and todayDiv
  const taskDiv2 = document.createElement("div");
  const checkDiv2 = document.createElement("input");
  const titleDiv2 = document.createElement("div");
  const detailsDiv2 = document.createElement("div");
  const detailsHolder2 = document.createElement("div");
  const detailsTitle2 = document.createElement("div");
  const detailsPriority2 = document.createElement("div");
  const detailsDescrip2 = document.createElement("p");
  const detailsNotes2 = document.createElement("p");
  const dateDiv2 = document.createElement("div");
  const editDiv2 = document.createElement("div");
  const editImage2 = new Image();
  const deleteDiv2 = document.createElement("div");
  const deleteImage2 = new Image();
  const whichCategory = categoryCheck();
  //Variables that will allow us to access dHolder items in storage.js
  const titleCaption1 = document.createElement("div");
  const priorityCaption1 = document.createElement("div");
  const descriptionCaption1 = document.createElement("div");
  const notesCaption1 = document.createElement("div");
  const titleCaption2 = document.createElement("div");
  const priorityCaption2 = document.createElement("div");
  const descriptionCaption2 = document.createElement("div");
  const notesCaption2 = document.createElement("div");
  const storedIDHolder1 = document.getElementById("storedIDHolder1");
  const storedIDHolder3 = document.getElementById("storedIDHolder3");

  //setting up inital taskDiv and its contents
  checkDiv1.type = "checkbox";
  checkDiv1.name = "checkDiv1";
  titleDiv1.textContent = currentTask.title;
  detailsDiv1.textContent = "Details";
  titleCaption1.textContent = "Title:";
  priorityCaption1.textContent = "Priority:";
  descriptionCaption1.textContent = "Description:";
  notesCaption1.textContent = "Notes:";
  detailsTitle1.textContent = currentTask.title;
  detailsPriority1.textContent = currentTask.priority;
  detailsDescrip1.textContent = currentTask.descrip;
  detailsNotes1.textContent = currentTask.notes;
  dateDiv1.textContent = currentTask.due;
  editImage1.src = edit;
  editImage1.alt = "Edit";
  deleteImage1.src = trash;
  deleteImage1.alt = "Delete";
  checkDiv2.type = "checkbox";
  checkDiv2.name = "checkDiv2";
  titleDiv2.textContent = currentTask.title;
  detailsDiv2.textContent = "Details";
  titleCaption2.textContent = "Title:";
  priorityCaption2.textContent = "Priority:";
  descriptionCaption2.textContent = "Description:";
  notesCaption2.textContent = "Notes:";
  detailsTitle2.textContent = currentTask.title;
  detailsPriority2.textContent = currentTask.priority;
  detailsDescrip2.textContent = currentTask.descrip;
  detailsNotes2.textContent = currentTask.notes;
  dateDiv2.textContent = currentTask.due;
  editImage2.src = edit;
  editImage2.alt = "Edit";
  deleteImage2.src = trash;
  deleteImage2.alt = "Delete";

  allTask.id = "allTask";
  todayTask.id = "todayTask";
  upcomingTask.id = "upcomingTask";
  innerContainer1.classList.add("innerContainer");
  innerContainer2.classList.add("innerContainer");
  taskDiv1.classList.add("taskDiv");
  taskDiv1.id = "tOne" + number.toString();
  checkDiv1.classList.add("checkDiv");
  titleDiv1.classList.add("titleDiv");
  detailsHolder1.classList.add("dHolder");
  detailsDiv1.classList.add("detailsDiv");
  detailsTitle1.classList.add("detailsTitle");
  detailsPriority1.classList.add("detailsPriority");
  detailsNotes1.classList.add("detailsNotes");
  dateDiv1.classList.add("dateDiv");
  editImage1.classList.add("taskImg");
  editDiv1.classList.add("atu");
  editDiv1.classList.add("edit");
  deleteDiv1.classList.add("delete");
  deleteImage1.classList.add("taskImg");
  taskDiv2.classList.add("taskDiv");
  taskDiv2.id = "tTwo" + number.toString();
  checkDiv2.classList.add("checkDiv");
  titleDiv2.classList.add("titleDiv");
  detailsHolder2.classList.add("dHolder");
  detailsDiv2.classList.add("detailsDiv");
  detailsTitle2.classList.add("detailsTitle");
  detailsPriority2.classList.add("detailsPriority");
  detailsNotes2.classList.add("detailsNotes");
  dateDiv2.classList.add("dateDiv");
  editImage2.classList.add("taskImg");
  editDiv2.classList.add("atu");
  editDiv2.classList.add("edit");
  deleteDiv2.classList.add("delete");
  deleteImage2.classList.add("taskImg");

  detailsDiv1.addEventListener("click", () => {
    if (detailsHolder1.style.display !== "grid") {
      detailsHolder1.style.display = "grid";
    } else {
      detailsHolder1.style.display = "none";
    }
  });
  detailsDiv2.addEventListener("click", () => {
    if (detailsHolder2.style.display !== "grid") {
      detailsHolder2.style.display = "grid";
    } else {
      detailsHolder2.style.display = "none";
    }
  });
  checkDiv1.addEventListener("click", () => {
    if (checkDiv1.checked) {
      titleDiv1.style.textDecoration = "line-through";
      taskDiv1.style.color = "darkgrey";
      editImage1.style.opacity = 0.5;
      deleteImage1.style.opacity = 0.5;
      titleDiv2.style.textDecoration = "line-through";
      taskDiv2.style.color = "darkgrey";
      editImage2.style.opacity = 0.5;
      deleteImage2.style.opacity = 0.5;
    } else {
      titleDiv1.style.textDecoration = "line-through";
      taskDiv1.style.color = "darkgrey";
      editImage1.style.opacity = 1;
      deleteImage1.style.opacity = 1;
      titleDiv2.style.textDecoration = "none";
      taskDiv2.style.color = "black";
      editImage2.style.opacity = 1;
      deleteImage2.style.opacity = 1;
    }
  });
  checkDiv2.addEventListener("click", () => {
    if (checkDiv2.checked) {
      titleDiv1.style.textDecoration = "line-through";
      taskDiv1.style.color = "darkgrey";
      editImage1.style.opacity = 0.5;
      deleteImage1.style.opacity = 0.5;
      titleDiv2.style.textDecoration = "line-through";
      taskDiv2.style.color = "darkgrey";
      editImage2.style.opacity = 0.5;
      deleteImage2.style.opacity = 0.5;
    } else {
      titleDiv1.style.textDecoration = "line-through";
      taskDiv1.style.color = "darkgrey";
      editImage1.style.opacity = 1;
      deleteImage1.style.opacity = 1;
      titleDiv2.style.textDecoration = "none";
      taskDiv2.style.color = "black";
      editImage2.style.opacity = 1;
      deleteImage2.style.opacity = 1;
    }
  });
  editDiv1.addEventListener("click", () => {
    storedIDHolder1.textContent = taskDiv1.id;
    storedIDHolder3.textContent = taskDiv2.id;
    console.log(storedIDHolder1);
    userTitle.value = currentTask._title;
    userDescrip.value = currentTask._descrip;
    userDue.value = currentTask._due;
    userPriority.value = currentTask._priority;
    userNotes.value = currentTask._notes;
    submit1.style.display = "none";
    submit2.style.display = "none";
    userForm.style.display = "flex";
    confirm1.style.display = "block";
    confirm2.style.display = "none";
  });
  editDiv2.addEventListener("click", () => {
    storedIDHolder1.textContent = taskDiv2.id;
    storedIDHolder3.textContent = taskDiv1.id;
    console.log(storedIDHolder1.textContent);
    userTitle.value = currentTask._title;
    userDescrip.value = currentTask._descrip;
    userDue.value = currentTask._due;
    userPriority.value = currentTask._priority;
    userNotes.value = currentTask._notes;
    submit1.style.display = "none";
    submit2.style.display = "none";
    userForm.style.display = "flex";
    confirm1.style.display = "block";
    confirm2.style.display = "none";
  });
  deleteDiv1.addEventListener("click", () => {
    const mainContainer = taskDiv1.parentElement.parentElement.id;
    taskDiv1.parentElement.parentElement.removeChild(taskDiv1.parentElement);
    if (
      document.getElementById(mainContainer).lastElementChild.id === "nTask2"
    ) {
      document.getElementById("nTask2").style.display = "block";
    } else if (
      document.getElementById(mainContainer).lastElementChild.id === "nTask3"
    ) {
      document.getElementById("nTask3").style.display = "block";
    }
    if (
      document.getElementById(mainContainer).lastElementChild.id === "nTask1"
    ) {
      document.getElementById("nTask1").style.display = "block";
    }
    allTask.removeChild(innerContainer2);
    if (allTask.lastElementChild.id === "nTask1") {
      document.getElementById("nTask1").style.display = "block";
    }
    localStorage.setItem("allTask", allTask.innerHTML);
    localStorage.setItem("todayTask", todayTask.innerHTML);
    localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
  });
  deleteDiv2.addEventListener("click", () => {
    const mainContainer = taskDiv1.parentElement.parentElement.id;
    taskDiv1.parentElement.parentElement.removeChild(taskDiv1.parentElement);
    if (
      document.getElementById(mainContainer).lastElementChild.id === "nTask2"
    ) {
      document.getElementById("nTask2").style.display = "block";
    } else if (
      document.getElementById(mainContainer).lastElementChild.id === "nTask3"
    ) {
      document.getElementById("nTask3").style.display = "block";
    }
    if (
      document.getElementById(mainContainer).lastElementChild.id === "nTask1"
    ) {
      document.getElementById("nTask1").style.display = "block";
    }
    allTask.removeChild(innerContainer2);
    if (allTask.lastElementChild.id === "nTask1") {
      document.getElementById("nTask1").style.display = "block";
    }
    localStorage.setItem("allTask", allTask.innerHTML);
    localStorage.setItem("todayTask", todayTask.innerHTML);
    localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
  });

  detailsHolder1.appendChild(titleCaption1);
  detailsHolder1.appendChild(detailsTitle1);
  detailsHolder1.appendChild(priorityCaption1);
  detailsHolder1.appendChild(detailsPriority1);
  detailsHolder1.appendChild(descriptionCaption1);
  detailsHolder1.appendChild(detailsDescrip1);
  detailsHolder1.appendChild(notesCaption1);
  detailsHolder1.appendChild(detailsNotes1);
  editDiv1.appendChild(editImage1);
  deleteDiv1.appendChild(deleteImage1);
  taskDiv1.appendChild(checkDiv1);
  taskDiv1.appendChild(titleDiv1);
  taskDiv1.appendChild(detailsDiv1);
  taskDiv1.appendChild(dateDiv1);
  taskDiv1.appendChild(editDiv1);
  taskDiv1.appendChild(deleteDiv1);
  detailsHolder2.appendChild(titleCaption2);
  detailsHolder2.appendChild(detailsTitle2);
  detailsHolder2.appendChild(priorityCaption2);
  detailsHolder2.appendChild(detailsPriority2);
  detailsHolder2.appendChild(descriptionCaption2);
  detailsHolder2.appendChild(detailsDescrip2);
  detailsHolder2.appendChild(notesCaption2);
  detailsHolder2.appendChild(detailsNotes2);
  editDiv2.appendChild(editImage2);
  deleteDiv2.appendChild(deleteImage2);
  taskDiv2.appendChild(checkDiv2);
  taskDiv2.appendChild(titleDiv2);
  taskDiv2.appendChild(detailsDiv2);
  taskDiv2.appendChild(dateDiv2);
  taskDiv2.appendChild(editDiv2);
  taskDiv2.appendChild(deleteDiv2);
  innerContainer2.appendChild(taskDiv2);
  innerContainer2.appendChild(detailsHolder2);
  allTask.append(innerContainer2);

  if (whichCategory.sortDiv() === "today") {
    taskDiv1.classList.add("today");
    innerContainer1.appendChild(taskDiv1);
    innerContainer1.appendChild(detailsHolder1);
    todayTask.appendChild(innerContainer1);
  } else if (whichCategory.sortDiv() === "upcoming") {
    taskDiv1.classList.add("upcoming");
    innerContainer1.appendChild(taskDiv1);
    innerContainer1.appendChild(detailsHolder1);
    upcomingTask.appendChild(innerContainer1);
  }
}
