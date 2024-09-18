import React, { useState } from 'react';
function TodoList() {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]); 

  
  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, task]); 
      setTask(''); 
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Crear una nueva lista sin la tarea que se quiere eliminar
    setTasks(newTasks); 
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      
      {}
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Escribe una tarea" 
      />
      
      {}
      <button onClick={addTask}>Agregar tarea</button>
      
      {}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            {}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;