
import React from 'react'
import UsuarioRow from './UsuarioRow'

const UsuarioList = ({handlerEditarUsuario, handlerEliminraUsuario, usuarios = []}) => {
  return (
    <table className='table table-hover table-bordered'>
      <thead>
        <tr>
          <th>#</th>
          <th>Usuario</th>
          <th>Correo Electrónico</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        { usuarios.map(({id, username, email}) => (
          <UsuarioRow key={id} id={id} username={username} email={email} 
          handlerEliminraUsuario={handlerEliminraUsuario}
          handlerEditarUsuario={handlerEditarUsuario} />
        )) }
      </tbody>
    </table>
  )
}

export default UsuarioList
