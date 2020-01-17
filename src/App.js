import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import LocalForm from "./components/LocalForm";
import LocalItem from "./components/LocalItem";

import logo from "./assets/placeholder.png";

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
			<div className="background" />
			<aside>
				<img src={logo} alt="logo" />
				<br />
				<strong>TOUR - ONDE COMER?</strong>
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
