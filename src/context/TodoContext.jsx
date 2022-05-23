import { createContext, useContext, useState } from "react";

const todoContext = createContext();
todoContext.displayName = "TodoContext";

export const useTodo = () => useContext(todoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({});

  const toggleHandler = () => {
    setOpen((prev) => !prev);
  };

  const findTodo = (id) => {
    setTodo(todos.find((todo) => todo.id === id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
    });
  };

  const editTodo = (id, title) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
        return todo;
      }
    });
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        open,
        toggleHandler,
        findTodo,
        todo,
        editTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
