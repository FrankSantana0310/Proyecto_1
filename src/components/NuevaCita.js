import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';

class NuevaCita extends Component {

    initiaState = {
        cita: {
            mascota:'',
            propietario:'',
            fecha:'',
            time:'',
            sintomas:'',
        },
        error: false,
    };
  state = this.initiaState;

 //Tomando los datos del formulario
   handleChange = e => {
     this.setState({
         cita: {
                ...this.state.cita,
                [e.target.name]:e.target.value,

         }
     })
  }

  //Cuando se envia el formulario
  handleSubmit = e => {
      e.preventDefault();
      
      const {mascota,propietario,time,fecha,sintomas} = this.state.cita;
      if(mascota === '' || propietario === '' ||time === '' ||fecha === '' ||sintomas === ''){
          this.setState({
              error: true,
              
          })
          return;
      }

      const nuevaCita =  {...this.state.cita}
      nuevaCita['id'] = uuid();

      this.props.crearNuevaCita(nuevaCita);
      this.setState({...this.initiaState});
  }

  render() {

    const {error} = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="text-center">
            Llena el formulario para crear una nueva cita
          </h2>
        </div>
        {error ? (<div className='alert alert-danger mt-2 mb-5 text-center'>Todos los campos son obligatiorios</div>): null}
        <form onSubmit={this.handleSubmit} className='m-3'>
          <div className="form-group row">
            <label
              htmlFor="mascota"
              className="col-sm-4 col-lg-2 col-form-label"
            >
              {" "}
              Nombre Mascota
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                placeholder="Nombre Mascota"
                className="form-control"
                name="mascota"
                onChange={this.handleChange}
                value={this.state.cita.mascota}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              {" "}
              Nombre Duenno
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                placeholder="Duenno Mascota"
                className="form-control"
                name="propietario"
                onChange={this.handleChange}
                value={this.state.cita.propietario}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label"> Fecha</label>
            <div className="col-sm-8 col-lg-4">
              <input
               type="date" 
               className="form-control" 
               name="fecha" 
               onChange={this.handleChange}
               value={this.state.cita.fecha}
               />
            </div>
          
         
            <label className="col-sm-4 col-lg-2 col-form-label"> Hora</label>
            <div className="col-sm-8 col-lg-4">
              <input
               type="time" 
               className="form-control" 
               name="time"
               onChange={this.handleChange}
               value={this.state.cita.time}
               />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              {" "}
              Sintomas
            </label>
            <div className="col-sm-8 col-lg-10">
              <textarea
                type="text"
                placeholder="Describe los Sintomas"
                className="form-control"
                name="sintomas"
                onChange={this.handleChange}
                value={this.state.cita.sintomas}
              >
              </textarea>
              
            </div>
          </div>
          <input type='submit' className='py-3 mt-2 btn btn-success btn-block' value='Nuevas Citas'/>
        </form>
      </div>
    );
  }
}

//Documentando el componente
NuevaCita.propTypes = {
    crearNuevaCita: PropTypes.func.isRequired,
}

export default NuevaCita;
