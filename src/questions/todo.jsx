import React, { useState } from 'react';

const Todo = () => {
  const initialTodos = [
    { title: 'create react app', status: 'created' },
    { title: 'create vite app', status: 'created' },
    { title: 'create next app', status: 'created' },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const headings = [...Object.keys(todos[0]), 'actions'];
  const [edit, setEdit] = useState(Array(todos.length).fill(false));
  const [todoTitle, setTodoTitle] = useState('');

  const actions = [
    { 
      name: 'edit', 
      action: (index) => {
        const updatedEdit = [...edit];
        updatedEdit[index] = true;  
        setEdit(updatedEdit);
        setTodoTitle(todos[index].title); 
      }
    },
    { name: 'delete', action: (index) => DeleteTodo(index) },
    { name: 'change status', action: (index) => ChangeStatus(index) }
  ];

  const [text, setText] = useState('create react app');
  const [selectedOption, setSelectedOption] = useState('created');

  const AddTodo = (text, selectedOption) => {
    setTodos([...todos, { title: text, status: selectedOption }]);
  };

  const DeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const ChangeStatus = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, status: getNextStatus(todo.status) } : todo
      )
    );
  };

  const onSave = (text, index) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, title: text } : todo))
    );
   
    const updatedEdit = [...edit];
    updatedEdit[index] = false;
    setEdit(updatedEdit);
    setTodoTitle('');  
  };

  const getNextStatus = (currentStatus) => {
    const statusOrder = ['created', 'pending', 'completed'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statusOrder.length;
    return statusOrder[nextIndex];
  };

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
              <td className="p-2">
                {edit[index] ? (
                  <div>
                    <input
                      className="text-center"
                      placeholder={item.title}
                      onChange={(e) => setTodoTitle(e.target.value)} 
                      value={todoTitle}
                    />
                    <CustomButton onClick={() => onSave(todoTitle, index)} title={'Save'}/>
                  </div>
                ) : (
                  <>{item.title}</>
                )}
              </td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">
                {actions.map((action, actionIndex) => (
                  <CustomButton
                    key={`action-${index}-${actionIndex}`}
                    onClick={() => action.action(index)}
                    title={action.name}
                  />
                ))}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                className="text-center"
                placeholder="enter your todo"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </td>
            <td>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="text-center"
                defaultValue={'created'}
              >
                <option>created</option>
                <option>pending</option>
                <option>completed</option>
              </select>
            </td>
            <td>
              <CustomButton
                title={'add todo'}
                onClick={() => AddTodo(text, selectedOption)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;

const CustomButton = ({ onClick, title }) => {
  return (
    <button className="p-1 bg-gray-200 hover:bg-gray-300 rounded m-1" onClick={onClick}>
      {title}
    </button>
  );
};
