import { TodoInfo } from '../TodoInfo';

import { TodoWithUser } from '../../types/Todo';

interface TodoListsProps {
  todos: TodoWithUser[];
}

export const TodoList = ({ todos }: TodoListsProps) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo data-id={todo.id} key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
