import React, { Component } from 'react';
// import Lists from "./Lists";
import './App.css';

class App extends Component {
  
  state = {
    vtask:"",
    tasks:[
      "Platzear",
    ]
  }

  showValue = (e) => {
    e.preventDefault();
    let task = this.state.vtask;
    if (task !== ""){
      this.state.tasks.push(task)
      console.log(this.state.tasks)
      this.setState({vtask: ""})
      this.forceUpdate()
    }
  }
  
  changeValue = (event) => this.setState({vtask: event.target.value})

  DeleteTask = (index) => {
    let tasks = this.state.tasks;
    let taskId = index
    tasks.splice(taskId, 1)
    this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
        
        <p>
          !Hola¡, estas en <strong>SuperTasks</strong> una app para listas de tareas
          <br/><br/>
          Donde dice "Escribe aquí tu tarea" y da enter o haz en "Añadir" 
          para ir agregando tareas a tu lista 
        </p>

        {/* Form create task */}
        <h1>Añadir una tarea</h1>

        <form onSubmit={this.showValue}>
          
          <input className="text" type="text" placeholder="Escribe aquí tu tarea" value={this.state.vtask} 
          onChange={this.changeValue} />
          
          <br/><br/>
          <input type="button" value="Añadir" onClick={this.showValue}/>

        </form>
        {/* end Form create task */}

        <p>
          Haz click en la <strong><cite>"X"</cite></strong> de cualquier tarea, para indicar 
          que la cumpliste 
        </p>

        {/* show list */}
        <h2>Lista de Tareas</h2>
        
        <table>
            <th>Nombre</th>
            <th>Borrar</th>
            <th>Completada</th>
        </table>
        
        {this.state.tasks.map((task, index) =>  
					<li key={index}>
            <div>
              <span>{task}</span>
              <button className="removeLst" onClick={() => this.DeleteTask(index)}>X</button>
              <input type="checkbox" className="checkboxC"/>
            </div>
					</li>
        )}

        {/* End show list */}

      </div>
    );
  }
}

export default App;
