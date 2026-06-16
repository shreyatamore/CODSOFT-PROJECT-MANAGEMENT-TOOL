let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

displayTasks();

function addTask(){

let project =
document.getElementById("project").value;

let task =
document.getElementById("task").value;

let deadline =
document.getElementById("deadline").value;

let priority =
document.getElementById("priority").value;

if(project==="" || task===""){
alert("Please fill all fields");
return;
}

tasks.push({
project,
task,
deadline,
priority,
completed:false
});

saveTasks();
displayTasks();

}

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function displayTasks(){

let container =
document.getElementById("taskList");

container.innerHTML="";

let completed=0;

tasks.forEach((item,index)=>{

if(item.completed) completed++;

let card =
document.createElement("div");

card.className =
item.completed
? "task-card completed"
: "task-card";

card.innerHTML=`

<h3>${item.project}</h3>

<p><b>Task:</b> ${item.task}</p>

<p><b>Deadline:</b> ${item.deadline}</p>

<p><b>Priority:</b> ${item.priority}</p>

<p><b>Status:</b>
${item.completed ? "Completed ✅" : "Pending ⏳"}
</p>

<div class="actions">

<button onclick="completeTask(${index})">
Mark Complete
</button>

<button onclick="deleteTask(${index})">
Delete
</button>

</div>

`;

container.appendChild(card);

});

document.getElementById("totalTasks")
.innerText = tasks.length;

document.getElementById("completedTasks")
.innerText = completed;

}

function completeTask(index){

tasks[index].completed=true;

saveTasks();

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}