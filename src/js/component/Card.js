import React, {useContext,useState} from "react";
import { Link} from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";


export const Card = ({id,name,category}) => {

const { store, actions } = useContext(Context); 

// const [isFavorited, setIsFavorited] = useState(false); //Esto hay que meterlo tambien en STORE? De qué forma?

// const addFavorite = () => {
//   setIsFavorited(!isFavorited);
//   // onFavoriteToggle(name); // Enviar el nombre de la tarjeta al componente padre
// }

  return (

<div className="card" style={{minWidth:"18rem"}}>
<img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="imcarg-fluid rounded-start" alt="..."/>
  {/* <img
          // Imagen condicional: si es el planeta Tatooine, usa una imagen fija; de lo contrario, usa la URL general
          src={
            category === "planets" && id === "1"
              ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
              : `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`
          }
           className="card-img-top"
          alt={name} // Texto alternativo para la imagen
        />  */}

  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-title">{data.description}</p>
    <Link className="btn btn-primary" to={category==="characters" ? "/people/" + id : `/${category}/${id}`}>Learn More!</Link> 
    
    {/* <button className="favorite" onClick={addFavorite}>
        {isFavorited ? (
          <span role="img" aria-label="favorited">❤️</span> // Corazón lleno
        ) : (
          <span role="img" aria-label="not-favorited">🤍</span> // Corazón vacío
        )}
    </button> */}
    {/* <span className="delete-btn" onClick={() => borrarTarea(element.id)}><i className="fa-solid fa-xmark"></i></span> */}


  </div>
</div>

    );
  }