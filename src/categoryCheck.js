//Checks the date of each task and gives it a class of today or upcoming and a class of all
export function categoryCheck() {
  const date = new Date();
  const taskDiv = document.getElementById("taskDiv");
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = day + "-" + month + "-" + year;
  function dateMin() {
    const userDue = document.getElementById("userDue");
    userDue.setAttribute("min", currentDate);
  }
  function sortDiv() {
    if (userDue.value === currentDate) {
      taskDiv.classList.add("today");
      allTask.appendChild(taskDiv);
      allTask.appendChild(detailsHolder);
      todayTask.appendChild(taskDiv);
      todayTask.appendChild(detailsHolder);
    } else if (userDue.value !== currentDate) {
      taskDiv.classList.add("upcoming");
      allTask.appendChild(taskDiv);
      allTask.appendChild(detailsHolder);
      upcomingTask.appendChild(taskDiv);
      upcomingTask.appendChild(detailsHolder);
    }
  }
  //Moves old tasks out of upcoming and today
  function moveOld() {
    const todayTask = document.querySelectorAll(".today > dateDiv");
    const upcomingTask = document.querySelectorAll(".upcoming > dateDiv");

    upcomingTask.forEach((div) => {
      if (div.textContent === currentDate) {
        div.classList.remove("upcoming");
        div.classList.add("today");
      }
    });
    todayTask.forEach((div) => {
      if (div.textContent !== currentDate) {
        div.classList.remove("today");
      }
    });
  }

  return { dateMin, sortDiv, moveOld };
}
// make left div clicks display
