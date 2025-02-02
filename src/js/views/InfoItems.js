import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { CardInfoPlanets } from "../component/CardInfoPlanets";
import { CardInfoVehicles } from "../component/CardInfoVehicles";
import { CardInfoPeople } from "../component/CardInfoPeople";




export const InfoItems = () => {

const { store, actions } = useContext(Context); 
const [infoDetails,setInfoDetails] = useState ([]);
const {id,category} = useParams ();
 

const getInfoDetails = async ()=>{
						const requestOptions = {
						  method: "GET",
						  redirect: "follow"
						};
						
						try {
						  const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`, requestOptions);
						  const data = await response.json()
						setInfoDetails(data.result)
						console.log(data.result);
						} catch (error) {
						console.error(error)
						 };
						}


useEffect(()=>{
  getInfoDetails()
  },[])


return (
    <div>
        {(() => {
            switch (category) {
                case 'people':
                    return (
                        <CardInfoPeople
                            data={infoDetails}
                            id={id}
                            category={category}
                        />
                    );
                case 'planets':
                    return (
                        <CardInfoPlanets
                            data={infoDetails}
                            id={id}
                            category={category}
                        />
                    );
                case 'vehicles':
                    return (
                        <CardInfoVehicles
                            data={infoDetails}
                            id={id}
                            category={category}
                        />
                    );
                default:
                    return null; // O un componente por defecto si es necesario
            }
        })()}
    </div>
);

};