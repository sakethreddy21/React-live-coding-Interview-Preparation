import Counter from './questions/counter'
import './App.css';
import ToggleSwitch from './questions/toggle';
import Todo from './questions/todo';
function App() {
  return (
    <div className="App">
      <Counter/>
      <ToggleSwitch/>
      <Todo/>
    </div>
  );
}

export default App;
