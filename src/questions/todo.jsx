//todo application

import React from 'react';

const Todo = () => {
  const todos = [
    { title: 'create react app', status: 'created' },
    { title: 'create vite app', status: 'created' },
    { title: 'create next app', status: 'created' },
  ];

  const headings = [...Object.keys(todos[0]), 'actions'];

  const actions = [
    { name: 'edit', action: (index) => { console.log("edit") } },
    { name: 'delete', action: () => { console.log("delete") } },
    { name: 'change status', action: () => { console.log("status") } }
  ];

  return (
    <div className="flex flex-col items-center">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={`heading-${index}`} className="font-bold text-center p-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={`row-${index}`} className="text-center">
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">
                {actions.map((action, actionIndex) => (
                  <button
                    key={`action-${index}-${actionIndex}`}
                    className="p-1 bg-gray-200 hover:bg-gray-300 rounded m-1"
                    onClick={() => action.action(index)}
                  >
                    {action.name}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
