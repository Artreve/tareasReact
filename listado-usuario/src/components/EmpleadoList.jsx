import React from 'react'
import {empleados} from '../helpers/users.js'
import EmpleadoRow from './EmpleadoRow'

const EmpleadoList = () => {
  // console.log(empleados);
  return (
    <div className='container'>
      <h1>Buenas</h1>
        <div className="row">
        {
            empleados.map((empleado)=>{
                
                <EmpleadoRow pic={empleado.pic} fullName={empleado.fullName} title={empleado.title} department={empleado.department} />
            })
        }
        </div>
        
    </div>
  )
}

export default EmpleadoList