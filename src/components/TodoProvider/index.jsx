import { useState } from "react";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
  const initialTodos = [
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
    {
      id: 3,
      description: "Rotas dinâmicas",
      completed: true,
      createdAt: "2022-10-31",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) =>
        t.id == todo.id ? { ...t, completed: !t.completed } : t
      );
    });
  };

  const editTodo = (todo) => {
    setTodos((prevState) => {
      prevState.map((t) =>
        t.id == todo.id ? { ...t, description: todo.description } : t
      );
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <TodoContext
      value={{ todos, addTodo, toggleTodoCompleted, editTodo, deleteTodo }}
    >
      {children}
    </TodoContext>
  );
}
