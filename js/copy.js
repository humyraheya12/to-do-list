document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.querySelector('input[type="text"]');
    const addButton = document.querySelector('.btn');
    const taskList = document.querySelector('ul');

    // Function to create a new task
    const addTask = () => {
        const taskText = inputTask.value.trim();
        
        // Check if task text is empty
        if (taskText === '') {
            alert('Please enter a task!');  // Show alert if input is empty
            return;  // Stop execution if the input is empty
        }

        // Create task item
        const taskItem = document.createElement('li');
        taskItem.className = 'single-task flex items-center space-x-3 p-2 bg-transparent hover:bg-slate-100 hover:rounded-full cursor-pointer';

        // Create task text
        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'task-text flex-1';
        taskTextElement.textContent = taskText;

        // Create checkbox (unchecked)
        const uncheckedIcon = document.createElement('img');
        uncheckedIcon.className = 'unchecked w-5 h-5';
        uncheckedIcon.src = 'images/unchecked.png'; // You can use a custom image or CSS here
        uncheckedIcon.alt = 'Unchecked';
        
        // Create checkbox (checked)
        const checkedIcon = document.createElement('img');
        checkedIcon.className = 'checked w-5 h-5 hidden';
        checkedIcon.src = 'images/checked.png'; // Custom image for checked state
        checkedIcon.alt = 'Checked';
        
        // Add checkbox state toggle
        const toggleCheckbox = () => {
            uncheckedIcon.classList.toggle('hidden');
            checkedIcon.classList.toggle('hidden');
            taskTextElement.classList.toggle('line-through'); // Strike-through text when checked
        };

        // Add event listener for toggling checkbox on click
        taskItem.addEventListener('click', toggleCheckbox);

        // Add delete button
        const deleteButton = document.createElement('button');
        // deleteButton.className = 'btn btn-xs btn-error';
        deleteButton.className = 'btn btn-circle btn-outline btn-xs p-1';
        deleteButton.innerHTML = ` <svg
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
  </svg>`
    

        // Delete button functionality
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from propagating to taskItem
            taskList.removeChild(taskItem); // Remove the task item
        });

        // Append checkbox and task text to the task item
        taskItem.appendChild(uncheckedIcon);
        taskItem.appendChild(checkedIcon);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        // Append the new task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        inputTask.value = '';
    };

    // Add task when the "Add" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed in the input field
    inputTask.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
