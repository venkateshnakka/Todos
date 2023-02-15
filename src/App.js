import AddTodo from './components/AddTodo';
import './App.css';
function App() {
  return (
    <div className='todos-bg-container'>
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading"> Create <span className="create-task-heading-subpart">Task</span></h1>
      <AddTodo />
    </div>
  );
}

export default App;
