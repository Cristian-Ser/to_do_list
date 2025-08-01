const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const btn = document.querySelector('button');

// Add task
btn.addEventListener('click', function () {
    if(inputBox.value == ''){
        alert('You must write something')
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
});

// Check task
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    // delete task
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data in browser
 function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
 };

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
 };

 showTask();