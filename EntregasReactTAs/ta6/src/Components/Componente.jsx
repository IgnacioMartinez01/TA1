
import React, { useState } from 'react';

function TaskList() { 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const   
 handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(),   
 task: newTask, isEditing: false }]);
      setNewTask('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleSaveTask = (taskId) => {
    if (newTask.trim() !== '') {
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, task: newTask, isEditing: false } : task
      ));
      setEditingTaskId(null);
      setNewTask('');
    }
  };

  const handleCancelEdit = (taskId) => {
    setEditingTaskId(null);
    setNewTask(tasks.find(task => task.id === taskId).task); 
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
      <ul>
      {tasks.map((task, index) => ( 
    <li key={task.id}>
      {task.id === editingTaskId ? (
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          onBlur={() => handleSaveTask(task.id)}
        />
      ) : (
        <span>{task.task}</span>
      )}
      <button onClick={() => handleEditTask(task.id)}>Editar</button>
      {task.id === editingTaskId && (
        <button onClick={() => handleCancelEdit(task.id)}>Cancelar</button>
      )}
      <button onClick={() => removeTask(task.id)}>Eliminar</button> 
    </li>
  ))}
      </ul>
    </div>
  );
}

export default TaskList;