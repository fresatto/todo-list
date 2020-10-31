import React, { useState, useContext, useCallback, FormEvent } from 'react';

import TodoList from '../TodoList';

import { Container, Wrapper, InputWrapper } from './styles';
import { TodoContext } from '../../context/TodosContext';

const Layout: React.FC = () => {
  const [todoInput, setTodoInput] = useState('');
  const { handleAddTodo } = useContext(TodoContext);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!todoInput) {
        alert('Por favor, digite alguma coisa');
        return;
      }

      handleAddTodo(e, todoInput);
      setTodoInput('');
    },
    [handleAddTodo, todoInput],
  );

  return (
    <Container>
      <Wrapper>
        <InputWrapper onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite"
            value={todoInput}
            onChange={e => setTodoInput(e.target.value)}
          />
          <button type="submit">+</button>
        </InputWrapper>
        <TodoList />
      </Wrapper>
    </Container>
  );
};

export default Layout;
