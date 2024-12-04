import { useEffect, useState } from "react";

const ApiDataFetching = () => {
  const [todos, setTodos] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [startIndex, setStartIndex]= useState(0)
 
  const fetchingData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data);
const headings2= Object.keys(data[0]).filter((key)=>key!=='userId')
    
    if (data.length > 0) {
      setHeadings([...headings2, "actions"]);
    }
  };
  const Onpre = (index) => {
    if (index > 0) {
      setStartIndex(index - 10); 
    }
  };

  const OnNext = (index) => {
    if (index + 10 < todos.length) {
      setStartIndex(index + 10); 
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <table className="table-auto w-full border border-collapse border-gray-400">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className="border px-4 py-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.slice(startIndex, startIndex+10).map((todo) => (
            <tr key={todo.id} className="border">
              {headings.map((heading, index)=>(
                <td key={index}>{heading==='actions'?(<button>Action</button>):(todo[heading].toString())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-3/4 justify-between">
      <button onClick={()=>Onpre(startIndex)}>pre</button>
      <button onClick={()=>OnNext(startIndex)}>next</button>
      </div>
    </div>
  );
};

export default ApiDataFetching;
