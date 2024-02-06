import React, { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';

function TodoItem({ task, deleteTask, toggleCompleted, updateTask }) {
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    updateTask(task.id, text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {!isEditing ? (
        <>
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
          />
          <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          <Edit onClick={handleToggleEdit} />
          <Delete onClick={() => deleteTask(task.id)} />
        </>
      ) : (
        <>
          <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleToggleEdit}>Cancel</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
