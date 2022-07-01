import React from 'react'
import EmpleadoAvatar from './EmpleadoAvatar'

function EmpleadoRow({pic,fullName,title,department}){
  console.log('llego')
  return (
    <div>
        <h1>Row</h1>
        <div className="avatarBox">
          <EmpleadoAvatar pic={pic}/>
        </div>
        <div className="InfoBox">
            <h2>{fullName}</h2>
            <h3>{title}</h3>
            <h3>{department}</h3>
        </div>
    </div>
  )
}

export default EmpleadoRow