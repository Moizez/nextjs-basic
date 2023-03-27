import { TTodo } from "../../types/TTodo";

type TodoListProps = {
  todoList: TTodo[];
};

const Todo = ({ todoList }: TodoListProps) => {
  return (
    <div>
      <h1>Todo</h1>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item?.title} - {String(item?.completed)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todoList: TTodo[] = await res.json();

  return {
    props: {
      todoList,
    },
  };
};
