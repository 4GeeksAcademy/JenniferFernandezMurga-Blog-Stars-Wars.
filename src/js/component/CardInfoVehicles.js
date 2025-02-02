import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoVehicles = ({data,category,id}) => {

  

  const {store, actions} = useContext(Context);



  // console.log(category)
  // const [personData, setPersonData] = useState(null);

  
  // const fetchPersonData = async () => {
  //   try {
  //     const response = await fetch(`https://www.swapi.tech/api/${}/${id}`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     setPersonData(data);
  //     console.log(data); // Para ver la respuesta en la consola
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };


  return(

    <div className="card mb-3" style={{width:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="imcarg-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.description}</h5>
        {/* <p className="card-text">Birth Year:{birth}</p> */}
        {/* <p className="card-text">Species:{species}</p>
        <p className="card-text">Height:{height}</p>
        <p className="card-text">Mass:{mass}</p> */}
        {/* <p className="card-text">Gender:{gender}</p> */}
        {/* <p className="card-text">Hair Color:{hair}</p>
        <p className="card-text">Eye Color:{eye}</p>
        <p className="card-text">Homeworld:{homeworld}</p> */}

      </div>
    </div>
  </div>
</div>

  
//<img classNameName="Image" src="https://starwars-visualguide.com/#/characters/2" style={{width:"150rem"}}/>
   
  );
}


