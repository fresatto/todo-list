import React, { useContext } from 'react';

import { Container } from './styles';
import { TodoContext } from '../../context/TodosContext';

export interface Todo {
  id: string;
  title: string;
}

interface TodoItemProps {
  data: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const { id, title } = data;

  const { handleDeleteTodo } = useContext(TodoContext);
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
