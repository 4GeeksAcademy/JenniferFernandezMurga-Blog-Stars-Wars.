import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";




export const CardInfoPlanets = ({data,category,id}) => {

  

  const {store, actions} = useContext(Context);



  return(

    <div className="card mb-3" style={{width:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} className="imcarg-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.description}</h5>

      </div>
    </div>
  </div>
</div>

  
//<img classNameName="Image" src="https://starwars-visualguide.com/#/characters/2" style={{width:"150rem"}}/>
   
  );
}


