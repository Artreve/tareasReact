import React from 'react'

const EmpleadoAvatar = ({pic}) => {
  return (
    <div>
      <div className="avatarBox">
        <img src={pic} alt="Avatar" />    
      </div>
        
    </div>
  )
}

export default EmpleadoAvatar