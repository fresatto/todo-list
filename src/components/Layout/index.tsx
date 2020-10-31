import React, { useState, useContext, useCallback, FormEvent } from 'react';

import TodoList from '../TodoList';
import PlusIcon from '../../assets/img/ic-add.png';

import { Container, Wrapper, AddTodoForm } from './styles';
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
        <AddTodoForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite"
            value={todoInput}
            onChange={e => setTodoInput(e.target.value)}
          />
          <button type="submit">
            <img src={PlusIcon} alt="Adicionar" />
          </button>
        </AddTodoForm>
        <TodoList />
      </Wrapper>
    </Container>
  );
};

export default Layout;
