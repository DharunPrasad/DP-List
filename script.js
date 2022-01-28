const taskInput = document.querySelector("#task-input");
const dateInput = document.querySelector("#date-input");

const submitBtn = document.querySelector("#submit-btn");

const taskParent = document.querySelector("#task-parent");

const taskArray = [];


const defaultDateValue = () => {
return dateInput.value = `${new Date().getFullYear()}-0${new Date().getMonth() + 1.}-${new Date().getDate()}` 
}

defaultDateValue()

// document.querySelector("#task-parent").innerHTML = "" 
const displayTask = (tasks) => {

    tasks.forEach((arr,i) => {
        const htmlContent = `<div class="flex border items-center justify-around py-5 px-5 mb-4 task-module">
        <input type = "checkbox" class = "mr-4 checkbox" >
        <h2 class="mr-auto ml-5 text-xl font-semibold" required>${arr.taskName}</h2>
        <p class=""><span>Due on </span>${arr.dueDate}</p>
    </div>`

    taskParent.insertAdjacentHTML("afterbegin",htmlContent);

    taskArray.length = 0;

    })
}

const updateDate = (dateInput) => {
    const date = new Date(dateInput);
    const day = date.getDate();
const dateinword = new Intl.DateTimeFormat('en-US', { month: 'short'}).format(date);
const year = date.getFullYear()
return `${day} ${dateinword}, ${year}`;

}

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(!taskInput.value.length > 0) return

 
    const taskObj = {
        taskName : taskInput.value,
        dueDate :  updateDate(dateInput.value),
    }

    taskArray.push(taskObj)
    displayTask(taskArray)


    taskInput.value = "";
    defaultDateValue();

})

//Removing the task by clicking the checkbox
taskParent.addEventListener("click", function(e){
    if(e.target.classList.contains("checkbox")){
        const parentCheckbox = e.target.closest(".task-module");
        // parentCheckbox.style.display = "none";
        parentCheckbox.remove()
    }
    
})
