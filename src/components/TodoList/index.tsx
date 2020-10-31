import React from 'react';

import TodoItem, { Todo } from '../TodoItem';
import { Container } from './styles';

interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo(id: string): void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDeleteTodo }) => {
  const hasItems = !!todos.length;

  return (
    <Container hasItems={hasItems}>
      {!hasItems ? (
        <p>Nenhum item cadastrado</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            data={todo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </Container>
  );
};

export default TodoList;
