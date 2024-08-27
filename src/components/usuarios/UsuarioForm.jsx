
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';



const UsuarioForm = ({handlerAgregarUsuario, usuarioFormIniciales, usuarioSeleccionado}) => {


  const [ usuarioForm, setUsuarioForm ] = useState(usuarioFormIniciales);

  useEffect(()=> {
    setUsuarioForm({
      ...usuarioSeleccionado, password : ""
    });
   }, [usuarioSeleccionado]);

  const { id, username, password, email}  = usuarioForm;

  const onInputChange = ( {target} ) => {
      const {name, value} = target;
      setUsuarioForm({...usuarioForm, [name]: value});
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(!username || !password || !email){
      //alert("Completa el formulario");
      Swal.fire({
        icon : "error",
        title: "Errores de validación",
        text: "Por favor completa todos los campos"
      });
      return;
    }
    handlerAgregarUsuario(usuarioForm);
    setUsuarioForm(usuarioFormIniciales);
  }
  return (
    <form onSubmit={ onSubmit}>
      <input type='text' className='form-control my-3 w-75' value={username}
        placeholder='Nombre de Usuario' name='username' onChange={onInputChange}/>
        <input type='text' className='form-control my-3 w-75' value={password}
        placeholder='Contraseña' name='password' onChange={onInputChange}/>
        <input type='text' className='form-control my-3 w-75' value={email}
        placeholder='Correo Electronico' name='email' onChange={onInputChange}/>
        <input type='hidden' name='id' value={id} />
        <button type='submit' className='btn btn-primary'>
           {id > 0  ? "Editar" : "Guardar"}
        </button>
    </form>
  )
}

export default UsuarioForm
