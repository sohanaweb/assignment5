// navbar function
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        let currentIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }


        // // real time date 
        // function getCurrentDate() {
        //     const date = new Date();
        //     const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        //     const formattedDate = date.toLocaleDateString('en-US', options);
        
        //     // Split the formatted date
        //     const parts = formattedDate.split(',');
            
        //     // Set the day of the week with comma
        //     document.getElementById('dayOfWeek').textContent = parts[0] + ',';
            
        //     // Set the date and year (Trim removes extra spaces)
        //     document.getElementById('currentDate').textContent = parts[1].trim() + ',' + parts[2];
        // }
        
        // getCurrentDate();






        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("current-date").textContent = new Date().toDateString();
            var taskAssignedCount = 6;
            var completedTasksCount = 23;
            var taskCounterElement = document.getElementById("task-assigned-count");
            var navbarCounterElement = document.getElementById("navbar-task-count");
            var completeButtons = document.querySelectorAll(".complete-task");
            var activityLog = document.getElementById("activity-log");
            var clearLog = document.getElementById("clear-log");

            for (var i = 0; i < completeButtons.length; i++) {
                completeButtons[i].onclick = function () {
                    if (!this.disabled) {
                        var taskName = this.parentNode.querySelector("h3").textContent;
                        alert("You have updated Task: " + taskName);
                        taskAssignedCount--;
                        completedTasksCount++;
                        taskCounterElement.textContent = taskAssignedCount;
                        navbarCounterElement.textContent = completedTasksCount;
                        this.disabled = true;
                        this.textContent = "Completed ✅";
                        this.classList.add("opacity-50", "cursor-not-allowed");
                        var logEntry = document.createElement("p");
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
        