
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import CalendarState from "./context/CalendarContext";
import TaskForm from "./components/TaskForm";
import './index.css';      

function App() {
  
  return (
    <div  className="container">
      <CalendarState>
        <Header />
        <Calendar />
        <TaskForm/>
      </CalendarState>
    </div>
  );
}

export default App;
