import './Card.css'

const Card =(props) => {
    
    return <>
    <div class="container">
    <img src="../img/notfound.jpg" alt="Nombre del grupo"/>
        <div class="contenedor">
            <label for="nombre-grupo">Nombre de grupo: <br/><p></p></label>
            <button onclick="info(${card.id})">Mas detalles...</button>
        </div>
    </div>
    </>
}
export default Card