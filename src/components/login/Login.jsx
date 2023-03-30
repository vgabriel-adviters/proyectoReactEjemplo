import './Login.css'
import { Link } from 'react-router-dom'

const Login =(props) => {

    return <>
    <div class="container">
    <div class="contenedor">
        <h1>Inicio de sesion</h1>
        <form class="contenedor-login" onsubmit="handleSubmit(event)" method="POST">
            <label for="email">Email: </label>
            <input type="email" placeholder="Escriba su email" id="email"/>
            <label for="pass" >Contraseña:</label>
            <input type="password" required placeholder="Escriba su contraseña" id="pass"/>
            <Link to="/groups"><input type="submit" value="Entrar" id="entrar"/></Link>
        </form>
    </div>
    </div>
    </>
}

export default Login