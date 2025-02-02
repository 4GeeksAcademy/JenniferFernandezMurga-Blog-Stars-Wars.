import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import { Card } from "../component/Card";
import { InfoItems } from "./InfoItems";

export const Home = () => {

	const { store, actions } = useContext(Context); 

	const [infoDetails, setInfoDetails] = useState();
  const {id,category} = useParams ();


	useEffect(()=>{
	actions.getCharacters()
	},[])
  useEffect(()=>{
    actions.getPlanets()
    },[])
  useEffect(()=>{
      actions.getVehicles()
      },[])

			

	return (

		  <div className="vista ">


             <h1>Characters</h1>
             <div className="d-flex overflow-auto">
                {store.characters.map((character, index) => {
                          return(
                          <Card
                          name={character.name} 
                          // data={setInfoDetails}
                          category={character} 
                          id={character.id} 
                          key={index}/>
                          );
                      })}</div>


            <h1>Planets</h1>
             <div className="d-flex overflow-auto">
                {store.planets.map((planet, index) => {
                          return(
                          <Card
                          name={planet.name} 
                          // data={setInfoDetails}
                          category={planet} 
                          id={planet.id} 
                          key={index}/>
                          );
                      })}</div>


            <h1>Vehicles</h1>
              <div className="d-flex overflow-auto">
                {store.vehicles.map((vehicle, index) => {
                          return(
                          <Card
                          name={vehicle.name} 
                          category={vehicle} 
                          data={setInfoDetails}
                          id={vehicle.id} 
                          key={index}/>
                      
                     
                      //Necesito encontrar la forma de enviar solo el contenido de la tarjeta seleccionada en el botón Lear More!,
                      //  y que se pasen los valores del result.properties de postman.
                          );
                      })}</div>
  </div>
  );
};
 
