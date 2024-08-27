import { useReducer, useState } from "react";
import { usuarioReducer } from "../reducer/usuarioReducer";
import { listarUsuarios } from "../services/usuarioService";
import Swal from "sweetalert2";


const usuarioDatosIniciales = [
    // {
    //   id : 1,
    //   username : "sergio",
    //   passowrd : "12345",
    //   email : "sergio@gmail.com"
    // }
  ]
  
  const usuarioFormIniciales = {
    id: 0,
    username: "",
    password: "",
    email: ""
  }

export const useUsuario = () => {

    const [usuarios, dispatch] = useReducer(usuarioReducer, usuarioDatosIniciales);

  const listandoUsuarios = async () => {
    const resultado = await listarUsuarios();
    dispatch({
      type: "listarUsuarios",
      payload: resultado.data,
    });
  }

  const handlerAgregarUsuario = (usuario) => {
    //console.log("UsuarioFrom: ", usuario);
    let type;
    if (usuario.id === 0) {
      type = "agregarUsuario";
    } else {
      type: "editarUsuario";
    }
    dispatch({
      type: type,
      payload: usuario
    });

    Swal.fire({
        icon: "success",
        title : usuario.id === 0 
            ? "El usuario se registro" 
            : "El usuario se actualizo",
        message: usuario.id === 0 
            ? "El usuario se guardo correctamente" 
            : "Es usuario se actualizo correctamente"
    });

  }
  const handlerEliminraUsuario = (id) => {
    Swal.fire({
        title: "¿ estas seguro ?",
        text: "El usuario sera eliminado!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo!",
        cancelButtonText: "No, quiero cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch({
                type: "eliminarUsuario",
                payload: id
              })
          Swal.fire({
            title: "Usuario eliminado!",
            text: "El usuario se elimino correctamente.",
            icon: "success"
          });
        }
      });
    
  }

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormIniciales);
  const handlerEditarUsuario = (usuario) => {
    console.log(usuario);
    setUsuarioSeleccionado({ ...usuario });

  }

  return {
    usuarios,
    handlerAgregarUsuario,
    handlerEditarUsuario,
    handlerEliminraUsuario,
    usuarioSeleccionado,
    usuarioFormIniciales,
    listandoUsuarios,
  };

}