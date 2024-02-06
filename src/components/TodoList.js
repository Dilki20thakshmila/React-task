import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../App.css'; // Import the CSS file

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    const addTask = () => {
        if (text.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setText('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    };

    const updateTask = (id, newText) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: newText };
            } else {
                return task;
            }
        }));
    };

    return (
        <div className="centered-container">
            <div className="todo-list-container">
                <h2>My Todo List</h2>
                <div className="add-task-container">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Add new task..."
                        style={{ marginRight: '10px' }}
                    />
                    <button onClick={addTask}>Add</button>
                </div>
                <div className="tasks-container">
                    {tasks.map(task => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                            updateTask={updateTask}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
