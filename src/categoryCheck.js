//Checks the date of each task and gives it a class of today or upcoming and a class of all
export function categoryCheck() {
  const date = new Date();
  let currentDate = date.toISOString().slice(0, 10);
  const userDue = document.querySelector(".userDue");

  function dateMin() {
    userDue.setAttribute("min", currentDate);
    userDue.setAttribute("value", currentDate);
  }
  function sortDiv() {
    if (userDue.value === currentDate) {
      return "today";
    } else if (userDue.value !== currentDate) {
      return "upcoming";
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

  return { dateMin, sortDiv, moveOld, currentDate };
}
// make left div clicks display. Currently an issue where classlist is undefined according to browser
