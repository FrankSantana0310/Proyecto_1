import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({cita, eliminarCita}) => {


    return (
        <div className='media mt-3'>
            <div className='media-body'>
                <h3 className='mt-0'>{cita.mascota}</h3>
                <p className='card-text'><span>Duenno:</span>{cita.propietario}</p> 
                <p className='card-text'><span>Fecha:</span>{cita.fecha}</p> 
                <p className='card-text'><span>Hora:</span>{cita.time}</p> 
                <p className='card-text'><span>Sintomas:</span>{cita.sintomas}</p> 
                <button  onClick={()=>eliminarCita(cita.id)} className='btn btn-danger' >Eliminar &times;</button>
            </div>
        </div>
    );
};

Cita.propTypes = {
    eliminarCita: PropTypes.func.isRequired,
    cita: PropTypes.object.isRequired,
}

export default Cita;