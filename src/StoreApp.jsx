import { useReducer } from "react"
import LoginPage from "./auth/pages/LoginPage"
import { usuarioReducer } from "./reducer/usuarioReducer";
import Swal from "sweetalert2";
import UsuarioPage from "./pages/UsuarioPage";
import { loginReducer } from "./auth/reducer/loginReducer";

const datosLoginform = {
  isAuth: false,
  user:null
}

const StoreApp = () => {

  const [login, dispatch] = useReducer( loginReducer, datosLoginform );

  const handlerLogin = (({username, password})=>{
    if(username === "sergio"  && password === "12345"){
      const user = { username: "admin"};
      dispatch({
        type : "login",
        payload : user
      });
    }else{
      Swal.fire({
          icon:"error",
          title:"Error de autenticación",
          text:"El usuario y/o contraseña son inscorrectos"

      });
    }

  });


  
  return (
    <>
      { login.isAuth ? <UsuarioPage /> : <LoginPage handlerLogin={handlerLogin} /> }
      
    </>
  )
}

export default StoreApp

