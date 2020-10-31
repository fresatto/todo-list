import React from 'react';

import { Container } from './styles';

export interface Todo {
  id: string;
  title: string;
}

interface TodoItemProps {
  data: Todo;
  handleDeleteTodo(id: string): void;
}

const TodoItem: React.FC<TodoItemProps> = ({ data, handleDeleteTodo }) => {
  const { id, title } = data;
  return (
    <Container>
      <span>{title}</span>
      <button type="button" onClick={() => handleDeleteTodo(id)}>
        Delete
      </button>
    </Container>
  );
};

export default TodoItem;
