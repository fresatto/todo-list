import React, { useContext } from 'react';
import { useTransition } from 'react-spring';
import TodoItem from '../TodoItem';
import { Container, NoContent } from './styles';
import { TodoContext } from '../../context/TodosContext';

const TodoList: React.FC = () => {
  const { todos, setAnimationInProgress, animationInProgress } = useContext(
    TodoContext,
  );

  const springTodos = useTransition(todos, todo => todo.id, {
    onDestroyed: () => setAnimationInProgress(false),
    from: { transform: 'translate3d(0px, 20px, 0)', opacity: 0 },
    enter: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    leave: { transform: 'translate3d(20px, 0px, 0px)', opacity: 0 },
  });

  const hasItems = !!todos.length;

  return (
    <Container hasItems={hasItems}>
      {!hasItems && !animationInProgress ? (
        <NoContent>
          <p>Nenhum item cadastrado</p>
        </NoContent>
      ) : (
        springTodos.map(({ item: todo, props, key }) => (
          <TodoItem key={key} style={props} data={todo} />
        ))
      )}
    </Container>
  );
};

export default TodoList;
