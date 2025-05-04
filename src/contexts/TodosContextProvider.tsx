import { useEffect, useState } from "react";
import { TodoListType } from "../lib/typeArchive";
import React from "react";
import { TodosContext } from "./todosContext";

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoListType[]>(
    JSON.parse(localStorage.getItem("todos") || "[]"),
  );

  const todoCounterTotal = todos.length;
  const todoCounterCompleted = todos.filter((todo) => todo.isCompleted).length;

  const handleAddTodo = (newTodo: string) => {
    if (!newTodo) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: newTodo,
        isCompleted: false,
      },
    ]);
  };

  const handleTodoToggle = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const handleTodoDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodosContext.Provider
      value={{
        todos,
        todoCounterTotal,
        todoCounterCompleted,
        handleAddTodo,
        handleTodoToggle,
        handleTodoDelete,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
