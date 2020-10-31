import React, { useContext } from 'react';

import TodoItem from '../TodoItem';
import { Container } from './styles';
import { TodoContext } from '../../context/TodosContext';

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);
  const hasItems = !!todos.length;

  return (
    <Container hasItems={hasItems}>
      {!hasItems ? (
        <p>Nenhum item cadastrado</p>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} data={todo} />)
      )}
    </Container>
  );
};

export default TodoList;
