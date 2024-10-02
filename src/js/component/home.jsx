import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark}  from '@fortawesome/free-solid-svg-icons';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [tarea,setTarea] = useState("");
	let [listaTareas,setlistaTareas] = useState([]);
	
	function capturarTarea(event) {
		setTarea(event.target.value);
		console.log(listaTareas.concat());
		


	}

	function insertarTarea(event) {
		if (event.key === 'Enter') {
			setlistaTareas(listaTareas.concat(tarea));
			setTarea("");	
		}
	}


	return (
		<div className="text-center">
			<div className="container w-50 m-auto bg-light">
				<div className="row">
					<div>
						<input type="text" name="" id="" onChange={capturarTarea} onKeyDown={insertarTarea} value={tarea} placeholder="Escriba aqui, luego presione Enter" />
						<ul>
							{listaTareas.map((item,index)=> (<li key={index}>{item} </li>))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
