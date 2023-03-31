import { useContext } from "react"
import Card from "../card/Card"
import './Group.css'
import { TokenContext } from "../../contexts/TokenContext";

const Groups = (props) => {

    const {token} = useContext(TokenContext);
    console.log(token);
    if(token) {
        return window.location.href = "/";
    }
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