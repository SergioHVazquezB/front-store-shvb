import axios from "axios"

export const listarUsuarios = async() => {
    try {
        const respuesta = await axios.get("http://localhost:9192/users");
        return respuesta;
        
    } catch (error) {
        console.error("Aqui fallo", error);
        
    }
    return null;
} 