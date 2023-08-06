//Provides the current date and date related functions
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
    const todayTask = document.getElementById("todayTask");
    const upcomingTask = document.getElementById("upcomingTask");
    const todayTasks = document.querySelectorAll(".today");
    const upcomingTasks = document.querySelectorAll(".upcoming");
    todayTasks.forEach((div) => {
      console.log(div.childNodes[3].textContent);
      console.log(currentDate);
      if (div.childNodes[3].textContent !== currentDate) {
        const mainContainer = div.parentElement.parentElement.id;
        div.classList.remove("today");
        div.parentElement.parentElement.removeChild(div.parentElement);
        if (
          document.getElementById(mainContainer).lastElementChild.id ===
          "nTask2"
        ) {
          document.getElementById("nTask2").style.display = "block";
        }
      }
      localStorage.setItem("todayTask", todayTask.innerHTML);
    });
    upcomingTasks.forEach((div) => {
      const mainContainer = div.parentElement.parentElement.id;
      if (div.childNodes[3].textContent === currentDate) {
        div.classList.remove("upcoming");
        div.classList.add("today");
        console.log(
          div.parentElement.parentElement.parentElement.childNodes[5]
        );
        div.parentElement.parentElement.parentElement.childNodes[5].appendChild(
          div.parentElement.cloneNode(true)
        );
        document.getElementById("nTask2").style.display = "none";
        div.parentElement.parentElement.removeChild(div.parentElement);
        if (
          document.getElementById(mainContainer).lastElementChild.id ===
          "nTask3"
        ) {
          document.getElementById("nTask3").style.display = "block";
        }
        localStorage.setItem("todayTask", todayTask.innerHTML);
        localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
      }
    });
  }

  return { dateMin, sortDiv, moveOld, currentDate };
}
