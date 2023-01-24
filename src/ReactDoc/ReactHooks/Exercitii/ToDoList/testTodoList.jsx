import React, { useState, useRef } from "react";

const TestTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const ref = useRef(null);
  console.log(todoList);

  //Afiseaza noul task
  const AfiseazaTaskNou = (e) => {
    setNewTask(e.target.value);
  };

  //Add task function
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completedTask: false,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  };
  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completedTask: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container pt-5 mt-5">
      <input type="text" onChange={AfiseazaTaskNou} ref={ref} />
      <button onClick={addTask}>Afiseaza</button>
      <div className="list">
        {todoList.map((item, key) => {
          return (
            <div key={key}>
              <h1>
                {key + 1}. {item.taskName}
                <button className="px-2 mx-5" onClick={() => completedTask(item.id)}>
                  Complete Task
                </button>
                <button className="px-2 mx-5" onClick={() => deleteTask(item.id)}>
                  X
                </button>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestTodoList;
