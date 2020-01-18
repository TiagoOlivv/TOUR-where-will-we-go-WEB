import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./home.css";
import "./sidebar.css";
import "./main.css";

import LocalForm from "../../components/LocalForm";
import LocalItem from "../../components/LocalItem";

import logo from "../../assets/placeholder.png";

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

	async function handleAddLocal(dataS) {
		const { data } = await api.post("/locals", dataS);

		setLocals(locals => [...locals, data]);
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
