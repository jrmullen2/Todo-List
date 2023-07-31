//loads any previous tasks orprojects and gives them functionality
export function useStorage() {
  allTask.innerHTML = localStorage.getItem("allTask");
  todayTask.innerHTML = localStorage.getItem("todayTask");
  upcomingTask.innerHTML = localStorage.getItem("upcomingTask");
  projects.innerHTML = localStorage.getItem("projects");

  const checkboxes = document.querySelectorAll(".checkDiv");
  const details = document.querySelectorAll(".detailsDiv");
  const edits = document.querySelectorAll(".edit");
  const deletes = document.querySelectorAll(".delete");
  const userTitle = document.querySelector(".userTitle");
  const userDescrip = document.querySelector(".userDescrip");
  const userDue = document.querySelector(".userDue");
  const userPriority = document.querySelector(".userPriority");
  const userNotes = document.querySelector(".userNotes");
  const submit1 = document.getElementById("submitButton1");
  const submit2 = document.getElementById("submitButton2");
  const confirm = document.getElementById("confirm");
  const userForm = document.getElementById("userForm");
  const nTask1 = document.getElementById("nTask1");
  const nTask2 = document.getElementById("nTask2");
  const nTask3 = document.getElementById("nTask3");
  const projectID = localStorage.getItem("projectID");
  const addTaskButton = document.getElementById("addTaskButton");

  submit1.addEventListener("click", () => {
    //When task is added "No tasks yet" goes away
    if (todayTask.lastElementChild.id !== nTask2.id) {
      nTask2.style.display = "none";
    } else if (upcomingTask.lastElementChild.id !== nTask3.id) {
      nTask3.style.display = "none";
    }
    nTask1.style.display = "none";
  });
  checkboxes.forEach((div) => {
    div.addEventListener("click", () => {
      if (div.checked) {
        div.parentElement.childNodes[1].style.textDecoration = "line-through";
        div.parentElement.style.color = "darkgrey";
        div.parentElement.childNodes[4].style.opacity = 0.5;
        div.parentElement.childNodes[5].style.opacity = 0.5;
      } else {
        div.parentElement.childNodes[1].style.textDecoration = "line-through";
        div.parentElement.style.color = "darkgrey";
        div.parentElement.childNodes[4].style.opacity = 1;
        div.parentElement.childNodes[5].style.opacity = 1;
      }
    });
  });
  details.forEach((div) => {
    div.addEventListener("click", () => {
      if (
        div.parentElement.parentElement.childNodes[1].style.display !== "grid"
      ) {
        div.parentElement.parentElement.childNodes[1].style.display = "grid";
      } else {
        div.parentElement.parentElement.childNodes[1].style.display = "none";
      }
    });
  });
  edits.forEach((div) => {
    div.addEventListener("click", () => {
      userTitle.value = div.parentElement.childNodes[1].textContent;
      userDescrip.value =
        div.parentElement.parentElement.childNodes[1].childNodes[1].textContent;
      userDue.value = div.parentElement.childNodes[3].textContent;
      userPriority.value =
        div.parentElement.parentElement.childNodes[1].childNodes[3].textContent;
      userNotes.value =
        div.parentElement.parentElement.childNodes[1].childNodes[5].textContent;
      submit1.style.display = "none";
      submit2.style.display = "none";
      userForm.style.display = "flex";
      confirm.style.display = "block";
    });
    confirm.addEventListener("click", () => {
      //resetting form to original state after confirming changes
      userForm.style.display = "none";
      confirm.style.display = "none";
      submit1.style.display = "block";
      submit2.style.display = "block";
      div.parentElement.childNodes[1].textContent = userTitle.value;
      div.parentElement.parentElement.childNodes[1].childNodes[1].textContent =
        userDescrip.value;
      div.parentElement.childNodes[3].textContent = userDue.value;
      div.parentElement.parentElement.childNodes[1].childNodes[3].textContent =
        userPriority.value;
      div.parentElement.parentElement.childNodes[1].childNodes[5].textContent =
        userNotes.value;
      setDefault4();
      localStorage.setItem("allTask", allTask.innerHTML);
      localStorage.setItem("todayTask", todayTask.innerHTML);
      localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
    });
  });

  deletes.forEach((div) => {
    div.addEventListener("click", () => {
      const mainContainer = div.parentElement.parentElement.parentElement.id;
      const nTask =
        div.parentElement.parentElement.parentElement.childNodes[1].id;
      div.parentElement.parentElement.parentElement.removeChild(
        div.parentElement.parentElement
      );
      console.log(document.getElementById(mainContainer).lastElementChild.id);
      if (
        document.getElementById(mainContainer).lastElementChild.id === nTask
      ) {
        document.getElementById(nTask).style.display = "block";
      }
      localStorage.setItem("allTask", allTask.innerHTML);
      localStorage.setItem("todayTask", todayTask.innerHTML);
      localStorage.setItem("upcomingTask", upcomingTask.innerHTML);
    });
  });
  //Takes the project names from local storage and gives back their functionality
  for (let i = 0; i < projectID; i++) {
    const projectName = document.createElement("div");
    projectName.textContent = localStorage.getItem(i.toString());
    projectName.id = i.toString();
    projectName.classList.add("projectName");
    projectsDivNames.appendChild(projectName);
    console.log(projectName);
    projectName.addEventListener("click", () => {
      console.log(".p" + projectName.id);
      const projectNames = document.querySelectorAll(".projectName");
      allTask.style.display = "none";
      todayTask.style.display = "none";
      upcomingTask.style.display = "none";
      projects.innerHTML = localStorage.getItem(projectName.id);
      projects.style.display = "flex";
      //resets any selected divs
      projectNames.forEach((div) => {
        if (div.style.backgroundColor === "coral") {
          const removeDisplays = document.querySelectorAll(".p" + div.id);
          removeDisplays.forEach((div) => {
            div.style.display = "none";
          });
        }
        div.style.backgroundColor = "white";
        div.style.color = "black";
      });
      //Shows user what project is currently selected
      projectName.style.backgroundColor = "coral";
      projectName.style.color = "white";
      const belongingDivs = document.querySelectorAll(".p" + projectName.id);
      belongingDivs.forEach((div) => {
        div.style.display = "block";
      });
    });
  }
}

function setDefault4() {
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = whichCategory.currentDate;
  userPriority.value = "high";
  userNotes.value = userNotes.defaultValue;
}
//need to polish up the functionality for these and werite commits
//Created storage.js to allow for local storage of tasks.
//modify projectName listener. Add nTasks HTML in provided functionality in index.js
//Change ids of taskDiv contents to classes
//
