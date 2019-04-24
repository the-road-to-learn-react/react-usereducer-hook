import React from 'react';

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
];

const App = () => {
  const handleChange = () => {};

  return (
    <ul>
      {initialTodos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={handleChange}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default App;
