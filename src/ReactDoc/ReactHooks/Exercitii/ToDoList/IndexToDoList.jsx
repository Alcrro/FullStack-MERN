import React, { useState } from "react";

const IndexToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  console.log(todoList);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      // grab the last item from array and grab the id from that element and increment by 1
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completedTask: false,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    //Example what i thing this problem for delete a name
    // const arr = ["n1", "n2", "n3"];
    // const newArr = arr.filter((name) => {
    //   if (name === "n1") {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });

    //Example 2 witch work but have to much rows.
    // const newTodoList = todoList.filter((item) => {
    //   if (item === taskName) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });

    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  };

  //create a function, add a parameter which keep the id of every element from array
  const completeTask = (id) => {
    console.log(id);
    //set constant function
    setTodoList(
      //loop to the existing array
      todoList.map((task) => {
        //check if id of array is equal with id of button which you click
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
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((item, key) => {
          return (
            <div>
              <h1 className={item.completedTask ? "bg-success" : ""} key={key}>
                {item.taskName}
                {/* when we have parameters(task) we need to call the function as anonim function 
								add a unique id of existing array
								*/}
                <button className="mx-5 px-2" onClick={() => completeTask(item.id)}>
                  Complete Task
                </button>
                <button className="mx-5 px-2 " onClick={() => deleteTask(item.id)}>
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

export default IndexToDoList;
