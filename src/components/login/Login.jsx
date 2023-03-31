import './Login.css'
import { Link, redirect } from 'react-router-dom'

import { TokenContext } from '../../contexts/TokenContext';
import { useContext, useEffect } from 'react';


const Login =(props) => {

    const URL_BASE = "https://bootcamp-adviters.herokuapp.com";
    const { token, setToken, iniciarSesion, cerrarSesion } = useContext(TokenContext);
    //Obtencion de datos con boton

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const email = "capacitaciones13@adviters.com";
        const password = "capacitaciones13";
        loginUser(email, password);
    }
    
    const loginUser = (email, pass) => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify({
                "email": email, 
                "password": pass
            }) 
        }
    
        //Peticion acceso login
    
    fetch(`${URL_BASE}/login`, options)
        .then(response => {if (response.status == 200) {
            return response.json();
        }else if (response.status == 400) {
            throw new Error();
        }
        })
        .then(data => {
                setToken(data.accessToken?.stsTokenManager?.accessToken);
                console.log("Data:", data);
                window.location.href = "/groups";
        })
        .catch(err => {
            console.log(Error);
            alert("Error, credenciales incorrectas");
        })
    }

    useEffect(() => {
        console.log(token);
    }, [])


    return <>
    <div className="container">
    <div className="contenedor">
        <h1>Inicio de sesion</h1>
        <form className="contenedor-login">
            <label for="email">Email: </label>
            <input type="email" placeholder="Escriba su email" id="email"/>
            <label for="pass" >Contraseña:</label>
            <input type="password" required placeholder="Escriba su contraseña" id="pass"/>
            <button type="submit" value="Entrar" id="entrar" onClick={(ev) => handleSubmit(ev)}>SUBMIT</button>
        </form>
    </div>
    </div>
    </>
}

export default Login