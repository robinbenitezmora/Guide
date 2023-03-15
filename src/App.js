import logo from './logo.svg';
import './App.css';
import { TaskListComponent } from './components/container/task_list';
import { Contact } from './components/container/Contact';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TaskListComponent></TaskListComponent>
        </header>
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}

export default App;
