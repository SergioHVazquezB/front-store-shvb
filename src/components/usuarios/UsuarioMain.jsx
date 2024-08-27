
import React, { useEffect, useReducer, useState } from 'react'
import UsuarioList from './UsuarioList'
import UsuarioForm from './UsuarioForm'
import { usuarioReducer } from '../../reducer/usuarioReducer'
import { listarUsuarios } from '../../services/usuarioService'
import { useUsuario } from '../../hooks/useUsuario'


const UsuarioMain = () => {

  const { usuarios,
    handlerAgregarUsuario,
    handlerEditarUsuario,
    handlerEliminraUsuario,
    usuarioSeleccionado,
    usuarioFormIniciales,
    listandoUsuarios, } = useUsuario();
  

  useEffect( () => {
    listandoUsuarios();
  }, [] );

  return (
    <>
      <h2>Usuario</h2>
      <div className='row'>
        <div className='col'>
          {usuarios.length === 0
            ? <div className='alert alert-info'>No hay usuarios</div>
            : <UsuarioList usuarios={usuarios}
              handlerEliminraUsuario={handlerEliminraUsuario}
              handlerEditarUsuario={handlerEditarUsuario} />}

        </div>
        <div className='col'>
          <UsuarioForm usuarioFormIniciales={usuarioFormIniciales}
            handlerAgregarUsuario={handlerAgregarUsuario}
            usuarioSeleccionado={usuarioSeleccionado} />
        </div>
      </div>
    </>
  )
}

export default UsuarioMain
