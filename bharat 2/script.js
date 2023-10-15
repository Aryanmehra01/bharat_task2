document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendMessageButton = document.getElementById("send-message");

    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const assignTaskButton = document.getElementById("assign-task");

    sendMessageButton.addEventListener("click", function() {
        const message = messageInput.value;
        if (message) {
            const messageItem = document.createElement("li");
            messageItem.textContent = message;
            chatBox.appendChild(messageItem);
            messageInput.value = "";
        }
    });

    assignTaskButton.addEventListener("click", function() {
        const task = taskInput.value;
        if (task) {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});
