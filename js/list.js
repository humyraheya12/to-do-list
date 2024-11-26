document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.querySelector('input[type="text"]');
    const addButton = document.querySelector('.btn');
    const taskList = document.querySelector('ul');
    //    Function when there is no task added
    const addTask = () => {
        const taskText = inputTask.value.trim();
        if(taskText === ''){
            alert("Please enter a task!");
            return;
        }
        // creat a task item
        const taskItem = document.createElement('li');
        taskItem.className = 'single-task flex items-center justify-between space-x-3 p-2 bg-transparent hover:bg-slate-100 hover:rounded-full cursor-pointer';
        // create task text
        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'task-text font- normal text-xl flex-1';
        taskTextElement.textContent = taskText;
        // creat uncheckbox
        const uncheckedIcon = document.createElement('img');
        uncheckedIcon.className = 'unchecked w-5 h-5';
        uncheckedIcon.src = 'images/unchecked.png'; 
        uncheckedIcon.alt = 'unchecked';
        // creat checkbox
        const checkedIcon = document.createElement('img');
        checkedIcon.className = 'checked w-5 h-5 hidden';
        checkedIcon.src = 'images/checked.png'; 
        checkedIcon.alt = 'checked';
        // toggle checkbox
            const toggleCheckbox = () => {
                uncheckedIcon.classList.toggle('hidden');
                checkedIcon.classList.toggle('hidden');
                taskTextElement.classList.toggle('line-through');
            }

    //    connect to taskitem and toggoling checkbox when clicking
    taskItem.addEventListener('click', toggleCheckbox);
    // add delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-circle btn-outline btn-xs p-1';
    deleteButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>`;
//   delete button functinally
     deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
         taskList.removeChild(taskItem); //remove taskitem from the tasklist
     });
    // append checkbox and delete button
    taskItem.appendChild(uncheckedIcon);
    taskItem.appendChild(checkedIcon);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);
    // task item contains li and lasklist contain ul
    taskList.appendChild(taskItem);
    // clear the input filed after adding tasktext
    inputTask.value = '';
         
    };
    //  now add button and addtask 
    addButton.addEventListener('click', addTask);

    // enter key
    inputTask.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        addTask()
    }
    });
   
    
});

