//loads any previous tasks orprojects and gives them functionality
export function useStorage() {
  const checkboxes = document.querySelectorAll(".checkDiv");
  const details = document.querySelectorAll(".detailsDiv");
  const edits = document.querySelectorAll(".edit");
  const deletes = document.querySelectorAll(".delete");
  allTask.innerHTML = localStorage.getItem("allTask");
  todayTask.innerHTML = localStorage.getItem("todayTask");
  upcomingTask.innerHTML = localStorage.getItem("upcomingTask");

  checkboxes.forEach((div) => {
    div.addEventListener("click", () => {
      if (checkDiv3.checked) {
        titleDiv3.style.textDecoration = "line-through";
        taskDiv3.style.color = "darkgrey";
        editImage3.style.opacity = 0.5;
        deleteImage3.style.opacity = 0.5;
      } else {
        titleDiv3.style.textDecoration = "line-through";
        taskDiv3.style.color = "darkgrey";
        editImage3.style.opacity = 1;
        deleteImage3.style.opacity = 1;
      }
    });
  });
  details.forEach((div) => {
    div.addEventListener("click", () => {
      if (detailsHolder3.style.display !== "flex") {
        detailsHolder3.style.display = "flex";
      } else {
        detailsHolder3.style.display = "none";
      }
    });
  });
  edits.forEach((div) => {
    div.addEventListener("click", () => {
      userTitle.value = currentTask._title;
      userDescrip.value = currentTask._descrip;
      userDue.value = currentTask._due;
      userPriority.value = currentTask._priority;
      userNotes.value = currentTask._notes;
      submit1.style.display = "none";
      submit2.style.display = "none";
      userForm.style.display = "flex";
      confirm.style.display = "block";
    });
  });
  deletes.forEach((div) => {
    div.addEventListener("click", () => {
      taskDiv3.parentElement.removeChild(taskDiv3);
    });
  });
}
//need to polish up the functionality for these and werite commits
