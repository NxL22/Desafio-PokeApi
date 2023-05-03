import { useParams } from "react-router-dom";

function DetallePokemon() {
    const { id } = useParams() //ID del poke
    console.log(id)
}


export default DetallePokemon;
