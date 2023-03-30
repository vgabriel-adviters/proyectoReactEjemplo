import { Link, Outlet } from 'react-router-dom'
import './Layouts.css'

const Layouts =(props) => {
    return <>
        <header>
            <label for="group">Grupos</label>
        </header>
        <section id="cards">
            <Outlet>
            </Outlet>
        </section>
        <footer>
            <ul>
                <li>Grupo N°1</li>
                <li>Proyecto Grupos</li>
            </ul>
        </footer>
    </>
}
export default Layouts