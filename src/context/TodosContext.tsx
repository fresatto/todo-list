import React, { createContext, useState, useCallback, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  title: string;
}

interface TodoContextData {
  todos: Todo[];
  animationInProgress: boolean;
  setAnimationInProgress(inProgress: boolean): void;
  handleAddTodo(e: FormEvent, title: string): void;
  handleDeleteTodo(id: string): void;
}

export const TodoContext = createContext<TodoContextData>(
  {} as TodoContextData,
);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const handleAddTodo = useCallback(
    (e: FormEvent, title: string) => {
      e.preventDefault();

      setTodos([...todos, { title, id: uuidv4() }]);
    },
    [todos],
  );

  const handleDeleteTodo = useCallback(
    (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        animationInProgress,
        setAnimationInProgress,
        handleAddTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
