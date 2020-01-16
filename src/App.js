import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import LocalForm from "./components/LocalForm";
import LocalItem from "./components/LocalItem";

// Componente é um bolco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Estado é uma informação mantida pelo componente (Imutabilidade)
// Propriedade são informações que um componente PAI passa para um componente FILHO

export default () => {
	const [locals, setLocals] = useState([]);

	useEffect(() => {
		async function loadLocals() {
			return await api.get("/locals");
		}
		loadLocals()
			.then(function HandleLocalsState({ data }) {
				setLocals(data);
			})
			.catch(function(error) {
				console.log(error);
			});
	}, []);

	async function handleAddLocal(data) {
		const response = await api.post("/locals", data);

		setLocals([...locals, response.data]);
	}

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<LocalForm onSubmit={handleAddLocal} />
			</aside>

			<main>
				<ul>
					{locals.map(local => (
						<LocalItem key={local._id} local={local} />
					))}
				</ul>
			</main>
		</div>
	);
};
