import React, { useContext, useCallback } from 'react';

import { TodoContext } from '../../context/TodosContext';
import TrashIcon from '../../assets/img/ic-delete.png';
import { Container } from './styles';

export interface Todo {
  id: string;
  title: string;
}

interface TodoItemProps {
  data: Todo;
  style: object;
}

const TodoItem: React.FC<TodoItemProps> = ({ data, style }) => {
  const { id, title } = data;
  const { handleDeleteTodo, setAnimationInProgress } = useContext(TodoContext);

  const onDelete = useCallback(
    (_id: string) => {
      setAnimationInProgress(true);
      handleDeleteTodo(_id);
    },
    [handleDeleteTodo, setAnimationInProgress],
  );

  return (
    <Container style={style}>
      <span>{title}</span>
      <button type="button" onClick={() => onDelete(id)}>
        <img src={TrashIcon} alt="Delete todo" />
      </button>
    </Container>
  );
};

export default TodoItem;
