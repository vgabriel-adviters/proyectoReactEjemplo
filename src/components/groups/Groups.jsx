import Card from "../card/Card"
import './Group.css'

const Groups = (props) => {
    return <>
        <div class="container-main">
            {
                props.data.map((card)=> {
                    return <Card grupoid={card.id}></Card>
                })
            }
        </div>
    </>
}
export default Groups;