import { categoryCheck } from "./categoryCheck";
//loads any previous tasks or projects and gives them functionality
export function useStorage(didRun, firstRun) {
  allTask.innerHTML = localStorage.getItem("allTask");
  todayTask.innerHTML = localStorage.getItem("todayTask");
  upcomingTask.innerHTML = localStorage.getItem("upcomingTask");

  const whichCategory = categoryCheck();
  whichCategory.moveOld();

  let currentProjectClass;

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
  const confirm1 = document.getElementById("confirm1");
  const confirm2 = document.getElementById("confirm2");
  const userForm = document.getElementById("userForm");
  const nTask1 = document.getElementById("nTask1");
  const nTask2 = document.getElementById("nTask2");
  const nTask3 = document.getElementById("nTask3");
  const storedIDHolder1 = document.getElementById("storedIDHolder1");
  const storedIDHolder2 = document.getElementById("storedIDHolder2");
  let storedIValue;
  let alreadyRan = didRun;
  let newProjectID = parseInt(localStorage.getItem("projectID"));

  if (alreadyRan === false) {
    submit1.addEventListener("click", () => {
      //When task is added "No tasks yet!" goes away
      if (userDue.value == categoryCheck().currentDate) {
        if (nTask2 !== null) {
          nTask2.style.display = "none";
        }
      } else {
        if (nTask3 !== null) {
          nTask3.style.display = "none";
        }
      }
      nTask1.style.display = "none";
    });
    submit2.addEventListener("click", () => {
      pTitle.style.marginBottom = "2.5%";
    });
    //Takes the project names from local storage and gives back their functionality
    for (let i = 0; i <= newProjectID; i++) {
      if (localStorage.getItem(i.toString()) === null) {
        continue;
      }
      //Prevents duplicate project names
      if (firstRun === true) {
        storedIValue = i;
        localStorage.setItem("storedIValue", storedIValue + 1);
      } else if (firstRun === false) {
        i = parseInt(localStorage.getItem("storedIValue"));
        storedIValue = parseInt(localStorage.getItem("storedIValue")) + 1;
        localStorage.setItem("storedIValue", storedIValue);
      }

      const projects = document.getElementById("projects");
      const pNameHolders = document.createElement("div");
      const nameDeleteButton = document.createElement("button");
      const projectName = document.createElement("div");
      nameDeleteButton.textContent = "X";
      nameDeleteButton.classList.add("nameDeleteButton");
      projectName.textContent = localStorage.getItem(i.toString());
      projectName.id = i.toString();
      projectName.classList.add("projectName");
      pNameHolders.appendChild(projectName);
      pNameHolders.appendChild(nameDeleteButton);
      pNameHolders.classList.add("pNameHolders");
      projectsDivNames.appendChild(pNameHolders);

      //Delete button for projectNames
      let nameDeleteButtons = document.querySelectorAll(".nameDeleteButton");
      nameDeleteButtons.forEach((div) => {
        div.style.display = "none";
      });
      nameDeleteButton.style.display = "block";
      nameDeleteButton.addEventListener("click", () => {
        const divsToBeRemoved = document.querySelectorAll(
          ".innerContainer" + ".i" + projectName.id
        );
        divsToBeRemoved.forEach((div) => {
          projects.removeChild(div);
        });
        projectsDivNames.removeChild(pNameHolders);
        localStorage.removeItem("p" + projectName.id);
        localStorage.removeItem(projectName.id);
        pTitle.style.display = "none";
        addTaskButton.style.display = "none";
      });

      projectName.addEventListener("click", () => {
        allTask.style.display = "none";
        todayTask.style.display = "none";
        upcomingTask.style.display = "none";
        projects.style.display = "flex";
        projects.innerHTML = localStorage.getItem("p" + currentProjectClass);
        const projectNames = document.querySelectorAll(".projectName");

        nameDeleteButtons = document.querySelectorAll(".nameDeleteButton");
        nameDeleteButtons.forEach((div) => {
          div.style.display = "none";
        });
        nameDeleteButton.style.display = "block";

        currentProjectClass = projectName.id;
        allTask.style.display = "none";
        todayTask.style.display = "none";
        upcomingTask.style.display = "none";
        projects.innerHTML = localStorage.getItem("p" + projectName.id);
        projects.style.display = "flex";
        const dHolders = document.querySelectorAll(".proj.dHolder");
        dHolders.forEach((div) => {
          div.style.display = "none";
        });

        const addTaskButton = document.getElementById("addTaskButton");
        const pTitle = document.getElementById("pTitle");
        const pdeletes = document.querySelectorAll(".delete");
        const pCheckboxes = document.querySelectorAll(".proj.checkDiv");
        const pdetails = document.querySelectorAll(".proj.detailsDiv");
        const pedits = document.querySelectorAll(".proj.edit");

        pTitle.style.display = "block";
        addTaskButton.style.display = "block";

        pCheckboxes.forEach((div) => {
          div.addEventListener("click", () => {
            if (div.checked) {
              div.parentElement.childNodes[1].style.textDecoration =
                "line-through";
              div.parentElement.style.color = "darkgrey";
              div.parentElement.childNodes[4].style.opacity = 0.5;
              div.parentElement.childNodes[5].style.opacity = 0.5;
            } else {
              div.parentElement.childNodes[1].style.textDecoration = "none";
              div.parentElement.style.color = "black";
              div.parentElement.childNodes[4].style.opacity = 1;
              div.parentElement.childNodes[5].style.opacity = 1;
            }
          });
        });

        pdetails.forEach((div) => {
          div.addEventListener("click", () => {
            if (
              div.parentElement.parentElement.parentElement.childNodes[1].style
                .display === "none"
            ) {
              div.parentElement.parentElement.parentElement.childNodes[1].style.display =
                "grid";
            } else {
              div.parentElement.parentElement.parentElement.childNodes[1].style.display =
                "none";
            }
          });
        });

        pedits.forEach((div) => {
          div.addEventListener("click", () => {
            storedIDHolder2.textContent = div.parentElement.id;
            userTitle.value = div.parentElement.childNodes[1].textContent;
            userDescrip.value =
              div.parentElement.parentElement.parentElement.childNodes[1].childNodes[5].textContent;
            userDue.value = div.parentElement.childNodes[3].textContent;
            userPriority.value =
              div.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].textContent;
            userNotes.value =
              div.parentElement.parentElement.parentElement.childNodes[1].childNodes[7].textContent;
            submit1.style.display = "none";
            submit2.style.display = "none";
            userForm.style.display = "flex";
            confirm2.style.display = "block";
          });
        });

        pdeletes.forEach((div) => {
          div.addEventListener("click", () => {
            const mainContainer =
              div.parentElement.parentElement.parentElement.parentElement.id;
            const nTask =
              div.parentElement.parentElement.parentElement.childNodes[1].id;
            div.parentElement.parentElement.parentElement.removeChild(
              div.parentElement.parentElement
            );
            if (
              document.getElementById(mainContainer).lastElementChild.id ===
              nTask
            ) {
              document.getElementById(nTask).style.display = "block";
            }
            localStorage.setItem("p" + currentProjectClass, projects.innerHTML);
          });
        });

        addTaskButton.addEventListener("click", () => {
          submit1.style.display = "none";
          setDefault2();
          submit2.style.display = "block";
          userForm.style.display = "flex";
        });
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
          div.style.display = "flex";
        });
      });
    }
    //Adds functionality to all taskDiv elements that are not in projects
    checkboxes.forEach((div) => {
      div.addEventListener("click", () => {
        if (div.checked) {
          div.parentElement.childNodes[1].style.textDecoration = "line-through";
          div.parentElement.style.color = "darkgrey";
          div.parentElement.childNodes[4].style.opacity = 0.5;
          div.parentElement.childNodes[5].style.opacity = 0.5;
        } else {
          div.parentElement.childNodes[1].style.textDecoration = "none";
          div.parentElement.style.color = "black";
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
        storedIDHolder1.textContent = div.parentElement.id;
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
        confirm1.style.display = "block";
      });
    });

    confirm2.addEventListener("click", () => {});
    deletes.forEach((div) => {
      div.addEventListener("click", () => {
        const mainContainer = div.parentElement.parentElement.parentElement.id;
        const nTask =
          div.parentElement.parentElement.parentElement.childNodes[1].id;
        div.parentElement.parentElement.parentElement.removeChild(
          div.parentElement.parentElement
        );
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
  }
  alreadyRan = true;
}
function setDefault2() {
  const userTitle = document.querySelector(".userTitle");
  const userDescrip = document.querySelector(".userDescrip");
  const userDue = document.querySelector(".userDue");
  const userPriority = document.querySelector(".userPriority");
  const userNotes = document.querySelector(".userNotes");
  userTitle.value = userTitle.defaultValue;
  userDescrip.value = userDescrip.defaultValue;
  userDue.value = categoryCheck().currentDate;
  userPriority.value = "High";
  userNotes.value = userNotes.defaultValue;
}
