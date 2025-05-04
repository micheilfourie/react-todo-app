import React from "react";
import { TodoListType } from "../lib/typeArchive";

type TodosContextType = {
  todos: TodoListType[];
  todoCounterTotal: number;
  todoCounterCompleted: number;
  handleAddTodo: (newTodo: string) => void;
  handleTodoToggle: (id: number) => void;
  handleTodoDelete: (id: number) => void;
};

export const TodosContext = React.createContext<TodosContextType | null>(null);