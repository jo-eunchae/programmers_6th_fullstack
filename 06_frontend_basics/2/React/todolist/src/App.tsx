import './App.css';
import Todolist from './Todolist';
// import { Timer, Clock } from './TimerClock';
import MyWeather from './demo/MyWeather';

function App() {
  return (
    <div className="container">
      <Todolist />
      {/* <Timer /> */}
      {/* <Clock /> */}
      {/* <MyWeather weather="맑음">일기예보</MyWeather> children */}
    </div>
  );
}

export default App;