// Preuzimanje elemenata
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Funkcija za dodavanje zadatka
function addTask() {
    const taskText = taskInput.value;
    
    if (taskText === '') {
        alert("Unesi zadatak!");
        return;
    }

    // Kreiranje elemenata zadatka
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔️</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    // Dodavanje događaja na dugmad
    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    // Dodavanje zadatka u listu
    taskList.appendChild(li);

    // Resetiranje unosa
    taskInput.value = '';
}

// Event listener za dodavanje zadatka
addTaskBtn.addEventListener("click", addTask);

// Dodavanje zadatka pritiskom na Enter
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
