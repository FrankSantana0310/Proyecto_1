import React, {Component} from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: [],
  }

  crearNuevaCita = (data) => {
   
    this.setState({
      citas: [...this.state.citas, data]
    })
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS )
      })
    }
  }
  componentDidUpdate(){
    localStorage.setItem( 'citas',JSON.stringify([...this.state.citas]))
  }

  //Eliminar las citas.
  eliminarCitas = id => {
    const newCita = this.state.citas.filter(cita => (
      cita.id !== id
    ))
    this.setState({
      citas : newCita
    })
  }

  render(){
    const citas = [...this.state.citas]
    return (
      <div className='container'>
        <Header title='Administrador Pacientes Veterianria' />
       <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
          </div>
          <div className='mt-5 col-md-10 mx-auto'>
                <ListaCitas eliminarCitas={this.eliminarCitas}  citas={citas}/>
          </div>
       </div>
      </div>
      );
  }
}

export default App;
