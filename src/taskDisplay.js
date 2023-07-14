function displayTask() {
  const taskDiv = document.createElement("div");
  const checkDiv = document.createElement("input");
  const titleDiv = document.createElement("div");
  const detailsDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const editDiv = document.createElement("div");
  const editImage = document.createAttribute("img");
  const deleteDiv = document.createElement("div");
  const deleteImage = document.createAttribute("img");
  checkDiv.type = "checkbox";
  titleDiv.textContent = createTodo().title;
  detailsDiv.textContent = details;
  dateDiv.textContent = createTodo().due;
  editImage.src = "";
  editImage.alt = "Edit";
  editDiv.classList.add("edit");
  deleteImage.src = "";
  deleteImage.alt = "Delete";
  deleteDiv.classList.add("delete");
  editDiv.appendChild(editImage);
  deleteDiv.appendChild(deleteImage);
  taskDiv.appendChild(checkDiv);
  taskDiv.appendChild(titleDiv);
  taskDiv.appendChild(detailsDiv);
  taskDiv.appendChild(dateDiv);
  taskDiv.appendChild(editDiv);
  taskDiv.appendChild(deleteDiv);
  rightDiv.appendChild(taskDiv);
}
//implement into index
