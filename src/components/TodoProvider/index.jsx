import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

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
        t.id == todo.id ? { ...t, completed: !t.completed } : t,
      );
    });
  };

  const editTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      return prevState.map((t) =>
        t.id == selectedTodo.id ? { ...t, description } : t,
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
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        editTodo,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
