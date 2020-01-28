import React from "react";
import Cita from "./Cita";
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCitas}) => {

  

  return(  
  <div className='card mt-2 py-5'>
      <div className='card-body'>
            {citas.length !== 0 ? (<h2 className='card-title text-center'>Administra las citas aqui</h2>) :
        (<h2 className='card-title text-center'>Agregar nueva cita</h2>) }
            <div className='lista-citas'>
                {citas && citas.map(cita => (
                    <Cita eliminarCita={eliminarCitas} key={cita.id} cita={cita}/>
                ))}
            </div>
      </div>
     
  </div>
  )
};

ListaCitas.propTypes = {
    eliminarCitas: PropTypes.func.isRequired,
    citas: PropTypes.array.isRequired,
}

export default ListaCitas;
