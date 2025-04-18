import './App.css';
import Todolist from './Todolist';
import { Timer, Clock } from './TimerClock';

function App() {
  return (
    <div className="container">
      <Todolist />
      {/* <Timer /> */}
      <Clock />
    </div>
  );
}

export default App;