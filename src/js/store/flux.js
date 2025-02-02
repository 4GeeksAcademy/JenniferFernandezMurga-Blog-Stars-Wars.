const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
           characters:[],
		   planets:[],
		   vehicles:[],
		
		//    icons:[],
		personData:[],
		// infoDetails:{},
		// category:[characters,characters,planets,vehicles],
		
		

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			
			addFavorite: (name) => {
				console.log(`${name} ha sido ${name ? 'añadido' : 'eliminado'} de favoritos`);
				  // Aquí puedes agregar lógica para manejar la lista de favoritos
				}
				,


			getCharacters: () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				//   fetch (`https://www.swapi.tech/api/${category}/`,requestOptions)
				  fetch("https://www.swapi.tech/api/people/", requestOptions)
					.then((response) => response.json())
					// Usar este ejemplo para setearlo, con setStore({ demo: demo });
					.then((data) => setStore({characters:data.results}))
					.catch((error) => console.error(error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			getPlanets: () =>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/planets/", requestOptions)
					.then((response) => response.json())
					.then((data) => setStore({planets:data.results}))
					.catch((error) => console.error(error));
				},

			getVehicles: () => {
					const requestOptions = {
						method: "GET",
						redirect: "follow"
					  };
					  
					  fetch("https://www.swapi.tech/api/vehicles/", requestOptions)
						.then((response) => response.json())
						.then((data) => setStore({vehicles:data.results}))
						.catch((error) => console.error(error));
				},

				//Este fetch envía la información a la CardInfo de los 3 grupos

				//   getInfoDetails: async ()=>{
				// 	const requestOptions = {
				// 	  method: "GET",
				// 	  redirect: "follow"
				// 	};
					
				// 	try {
				// 	  const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`, requestOptions);
				// 	  const data = await response.json()
				// 	setInfoDetails(data.result)
				//   console.log(data.result);
				// 	} catch (error) {
				// 	console.error(error);
				//    };
				//   }
					// ,



				//NO ME DEJA AÑADIRLO AQUÍ PORQUE CATEGORY NO ESTÁ DEFINIDO. COMO DEBERIA AÑADIRLO????
					// getInfoDetails: async ()=>{
					// 	const requestOptions = {
					// 	  method: "GET",
					// 	  redirect: "follow"
					// 	};
						
					// 	try {
					// 	  const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`, requestOptions);
					// 	  const data = await response.json()
					// 	setInfoDetails(data.result)
					// 	console.log(data.result);
					// 	} catch (error) {
					// 	console.error(error);
					// 	 };
					// 	}
					
					// 	,
				//   ,
				//   fetchPersonData: async () => {
			
				// 	try {
				// 	  const response = await fetch(`https://www.swapi.tech/api/characters/${id}`);
				// 	  if (!response.ok) {
				// 		throw new Error(`HTTP error! status: ${response.status}`);
				// 	  }
				// 	  const data = await response.json();
				// 	  setPersonData(data);
				// 	  console.log(data); // Para ver la respuesta en la consola
				// 	} catch (error) {
				// 	  console.error("Error fetching data:", error);
				// 	}
				//   },
				  
			// getInfocharacters: () =>{
			// 	const requestOptions = {
			// 		method: "GET",
			// 		redirect: "follow"
			// 	  };
				  
			// 	  fetch(("https://www.swapi.tech/api/characters/"+uid), requestOptions)
			// 		.then((response) => response.json())
			// 		.then((data) => setStore({charactersDetails:data.results}))
			// 		.catch((error) => console.error(error));


			// },

			// getPlanetsDetails: () =>{
			// 	const requestOptions = {
			// 		method: "GET",
			// 		redirect: "follow"
			// 	  };
				  
			// 	  fetch("https://www.swapi.tech/api/planets/:id", requestOptions)
			// 		.then((response) => response.json())
			// 		.then((data) => setStore({planetsDetails:data.results}))
			// 		.catch((error) => console.error(error));


			// },

			// getVehiclesDetails: () =>{
			// 	const requestOptions = {
			// 		method: "GET",
			// 		redirect: "follow"
			// 	  };
				  
			// 	  fetch("https://www.swapi.tech/api/vehicles/", requestOptions)
			// 		.then((response) => response.json())
			// 		.then((data) => setStore({vehiclesDetails:data.results}))
			// 		.catch((error) => console.error(error));


			// },



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
