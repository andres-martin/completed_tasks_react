import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      submitted: true
    }

  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task) => <li key={task.id}
              onClick={() => this.completedTask(task.id)}
              className={task.done ? 'done' : null}
            >{task.name}</li>)}
          </ul>
          <form onSubmit={this.submitTask}>
            <input type="text" id="new-task" onChange={this.addTask}
              className={this.state.submitted ? '' : 'error'}
              placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }
  // adds a new task, ste the state of newTask prop to the targeted value
  addTask = e => {
    this.setState({ newTask: e.target.value });
  };

  // completes the task changing the prop done of each task to true if clicked on it 
  completedTask = (id) => {
    const tasksUpdated = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks: tasksUpdated })
  }

  // submits the task it value has content nad changes the state of submitted prop
  submitTask = (e) => {
    e.preventDefault();
    if (this.state.newTask !== '') {
      this.setState(state => {
        const newTask = {
          id: this.state.tasks.length + 1,
          name: this.state.newTask,
          done: false
        }
        const tasks = [...state.tasks, newTask];
        state.submitted = true
        return {
          tasks,
          newTask: ''
        }
      });
    } else {
      this.setState({ submitted: false })
    }
  }
}

export default App;
