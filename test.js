// navbar function
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        let currentIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }




        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("current_date").textContent = new Date().toDateString();
            let taskAssignedCount = 6;
            let completedTasksCount = 23;
            let taskCounterElement = document.getElementById("task-assigned-count");
            let navbarCounterElement = document.getElementById("navbar-task-count");
            let completeButtons = document.querySelectorAll(".complete-task");
            let activityLog = document.getElementById("activity-log");
            let clearLog = document.getElementById("clear-log");
    
            for (let i = 0; i < completeButtons.length; i++) {
                completeButtons[i].onclick = function () {
                    if (!this.disabled) {
                        let taskName = this.parentNode.querySelector("h3").textContent;
                        alert("You have updated Task: " + taskName);
                        taskAssignedCount--;
                        completedTasksCount++;
                        taskCounterElement.textContent = taskAssignedCount;
                        navbarCounterElement.textContent = completedTasksCount;
                        this.disabled = true;
                        this.textContent = "Completed";
                        this.classList.add("opacity-30", "cursor-not-allowed");
                        let logEntry = document.createElement("p");
                        logEntry.textContent = "You have completed: " + taskName + " at " + new Date().toLocaleTimeString();
                        activityLog.appendChild(logEntry);
                        
                        if (taskAssignedCount === 0) {
                            alert("Congratulations! You have submitted all the assigned tasks.");
                        }
                    }
                };
            }
            clearLog.onclick = function () { activityLog.innerHTML = ""; };
        });
    


   






       