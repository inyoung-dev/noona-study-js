/*
유저가 값을 입력한다.
+ 버튼을 클릭하면 할 일이 추가된다.
delete버튼을 클릭하면 할 일이 삭제된다.
check버튼을 누르면 할 일이 끝나면서 밑줄이 간다.
1. check 버튼을 클릭하는 순간 true false
2. true이면 끝난 걸로 간주하고 밑줄 보여주기
3. false이면 안 끝난 걸로 간주하고 그대로

진행중 완료 탭을 누르면 언더바가 이동한다.
완료탭은 완료된 아이템만, 진행중탭은 진행중인 아이템만 나온다.
전체탭을 누르면 다시 전체 아이템으로 돌아온다.
*/

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div")
let underLine = document.getElementById("under-line");
let taskList = [];
let mode = 'all'
let filterList = [];

addButton.addEventListener("click",addTask)
for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        filter(event);
    });
}
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

taskInput.addEventListener("focus", function() {
    taskInput.value = "";
});

function addTask(){
    if (taskInput.value.trim() === "")
        return;

    let task ={
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };
    taskList.push(task);
    render();
    taskInput.value = "";
}

function render(){
    let list = [];
    if(mode === "all"){
        list = taskList;
    }else{
        list = filterList;
    }
    let resultHTML = "";
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="task task-done" data-id="${list[i].id}">
                    <span>${list[i].taskContent}</span>
                    <div class="button-box">
                        <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
                        <button onclick="editTask('${list[i].id}')"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deleteTask('${list[i].id}')"<i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`;
        }else{
            resultHTML += `<div class="task" data-id="${list[i].id}">
            <span>${list[i].taskContent}</span>
            <div class="button-box">
                <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
                <button onclick="editTask('${list[i].id}')"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`; 
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;

}

function toggleComplete(id) {
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    filter();
}

function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1)
            break;
        }
    }
    filter();
}

function filter(event) {
    if (event) {
      mode = event.target.id;
      underLine.style.width = event.target.offsetWidth + "px";
      underLine.style.left = event.target.offsetLeft + "px";
      underLine.style.top =
        event.target.offsetTop + (event.target.offsetHeight - 4) + "px";
    }
  
    filterList = [];
    if (mode === "ongoing") {
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete == false) {
          filterList.push(taskList[i]);
        }
      }
    } else if (mode === "done") {
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete) {
          filterList.push(taskList[i]);
        }
      }
    }
    render();
}

//수정버튼 추가
function editTask(id) {
    let taskIndex = taskList.findIndex(task => task.id === id);
    if (taskIndex === -1) return;

    let task = taskList[taskIndex];
    let taskElement = document.querySelector(`.task[data-id="${id}"] span`);

    let input = document.createElement("input");
    input.type = "text";
    input.value = task.taskContent;
    input.classList.add("edit-input");

    input.addEventListener("blur", function () {
        saveEditTask(id, input.value);
    });

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            saveEditTask(id, input.value);
        }
    });

    taskElement.innerHTML = "";
    taskElement.appendChild(input);
    input.focus();
}

function saveEditTask(id, newValue) {
    let taskIndex = taskList.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        taskList[taskIndex].taskContent = newValue;
        render();
    }
}
//수정버튼 끝

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}