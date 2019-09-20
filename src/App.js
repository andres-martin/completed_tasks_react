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
      newTask: ''
    }

  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task) => <li key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.submitTask}>
            <input type="text" id="new-task" onChange={this.addTask}
              placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }
  addTask = e => {
    this.setState({ newTask: e.target.value });
  };


  submitTask = (e) => {
    e.preventDefault();
    if (this.state.newTask !== '') {
      this.setState(state => {
        const newTask = { id: 4, name: this.state.newTask, done: false }
        const tasks = [...state.tasks, newTask];
        return {
          tasks,
          newTask: ''
        }
      });
    }
  }
}

export default App;
