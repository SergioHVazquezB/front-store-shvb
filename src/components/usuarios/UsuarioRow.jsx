import React from 'react'

const UsuarioRow = ( {handlerEditarUsuario,handlerEliminraUsuario, id, username, email} ) => {
  return (
    <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
              <button type='button' className='btn btn-info'
               onClick={()=> handlerEditarUsuario({id, username, email}) }>
                  Editar
              </button>
            </td>
            <td>
              <button type='button' className='btn btn-danger'
                onClick={()=> handlerEliminraUsuario(id)}>
                  Eliminar
              </button>
            </td>
          </tr>
  )
}

export default UsuarioRow
