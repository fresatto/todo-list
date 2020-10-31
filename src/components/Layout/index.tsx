import React, { useState, useCallback, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoList';
import { Todo } from '../TodoItem';
import { Container, Wrapper, InputWrapper } from './styles';

const Layout: React.FC = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = useCallback(
    (e: FormEvent, title: string) => {
      e.preventDefault();

      setTodos([...todos, { title, id: uuidv4() }]);
      setTodoInput('');
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
    <Container>
      <Wrapper>
        <InputWrapper onSubmit={e => handleAddTodo(e, todoInput)}>
          <input
            type="text"
            placeholder="Digite"
            value={todoInput}
            onChange={e => setTodoInput(e.target.value)}
          />
          <button type="submit">+</button>
        </InputWrapper>
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </Wrapper>
    </Container>
  );
};

export default Layout;
