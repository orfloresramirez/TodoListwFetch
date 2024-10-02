import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark}  from '@fortawesome/free-solid-svg-icons';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home2 = () => {

	useEffect(()=>{
		// crearUser()
		obtenerTareas()
		eliminarTareas()
		// crearTareas()
	},[])


	let [tarea,setTarea] = useState("");
	let [listaTareas,setlistaTareas] = useState([]);
	let tareasapi={};
	let idtarea="";
	
	// function capturarTarea(event) {
	// 	setTarea(event.target.value);
	// 	
	// }

	function insertarTarea(event) {
		
		if (event.key === 'Enter') {
			
			setlistaTareas(listaTareas.concat(tarea));
			crearTareas();	
			// listaTareas.map((item,index)=>(
			// 	(tareasapi[index]=idtarea)
			// 		)
					
			// 	);
			
			setTarea("");
			console.log(tareasapi);
			// console.log(listaTareas);	
			
		}
	}	

	function eliminarTarea(id) {
	//  let newlista =listaTareas.concat();	
	// newlista.splice(index,1)
	const newlista = listaTareas.filter((item)=>item.id !==id);
	setlistaTareas(newlista);
	eliminarTareas(id);
		
	}
		
	

	return (
		<div className="text-center mt-5">
			<div className="container w-50 m-auto bg-light m-3 rounded-2 shadow-lg ">
				<div className="row"> 
					<div className="container my-4 py-4">
						<div className="col-12"><input type="text" name="" id="" onChange={(e)=>setTarea(e.target.value)} onKeyDown={insertarTarea} value={tarea} placeholder="Escriba aqui, luego 'Enter'" /></div>
						<div>
						<ul className="text-start-between">													       {/*()=> para que no se renderice todo con cada map */}
							{listaTareas.map((item,index)=> (<li className="d-flex justify-content-between my-3 border-white border-opacity-10" key={index}>{item.label} <button type="button" onClick={()=>eliminarTarea(item.id)} className="text-end position-relative border-0" ><FontAwesomeIcon icon={faCircleXmark} /></button> </li>))}
							
						</ul>
						
						</div>
					</div>
					<p className="text-start text-secondary">{listaTareas.length+" tareas"}</p>	
				</div>
			</div>
		</div>
	);



	function crearUser() {
		fetch(
			'https://playground.4geeks.com/todo/users/orubenfr',{
				method: 'POST',
				headers:{
					"Content-Type": "application/json"
				}
			})
		.then((response)=>response.json())
		.then((datauser)=>console.log(datauser))
		.catch((error)=>console.log(error));
	}


	function obtenerTareas() {
		fetch(
			'https://playground.4geeks.com/todo/users/orubenfr',{
				method: 'GET',
			})
		.then((response)=>response.json())
		.then((data)=>setlistaTareas(data.todos))
		.catch((error)=>console.log(error));

	}

	function crearTareas(){
		fetch(
			'https://playground.4geeks.com/todo/todos/orubenfr',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				  },
				body: JSON.stringify(
					{
						"label": tarea,
						"is_done": false
					  }
				  ),
				
			})
		.then((response)=>response.json()) // 
		.then((data)=>{
			setlistaTareas([...listaTareas,data]) // ... spread operator accede directo al contenido
		})
			// 	(
				
			// 	// idtarea=response.id
			// // console.log(idtarea)
			// )
		.catch((error)=>console.log(error));

		

	}

	function eliminarTareas(id){
		fetch(
			`https://playground.4geeks.com/todo/todos/${id}`,{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				  },
				// body: JSON.stringify(
				// 	{
				// 		"label": tarea,
				// 		"is_done": false
				// 	  }
				//   ),
				
			})
		.then((response)=>response.json()) // 
		.then((response)=>console.log(response))
		.catch((error)=>console.log(error));

	}



};


export default Home2;