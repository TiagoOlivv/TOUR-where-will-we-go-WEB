import React, { useState, useEffect } from "react";

import "./styles.css";

export default ({ onSubmit }) => {
	const [instagram_username, setInstagramUsername] = useState("");
	const [acting, setActing] = useState("");
	const [specialties, setSpecialties] = useState("");
	const [phone, setPhone] = useState("");
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords;

				setLatitude(latitude);
				setLongitude(longitude);
			},
			err => {
				console.log(err);
			},
			{
				timeout: 30000
			}
		);
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		await onSubmit({
			instagram_username,
			acting,
			specialties,
			phone,
			latitude,
			longitude
		});

		clear();
	}

	function clear() {
		setInstagramUsername("");
		setActing("");
		setSpecialties("");
		setPhone("");
		setLatitude("");
		setLongitude("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-block">
				<label htmlFor="instagram_username">Usuário do Instagram</label>
				<input
					name="instagram_username"
					id="instagram_username"
					value={instagram_username}
					onChange={e => setInstagramUsername(e.target.value)}
					required
				/>
			</div>

			<div className="input-block">
				<label htmlFor="acting">Área de Atuação</label>
				<input
					name="acting"
					id="acting"
					value={acting}
					onChange={e => setActing(e.target.value)}
					required
				/>
			</div>

			<div className="input-block">
				<label htmlFor="specialties">Especialidades</label>
				<input
					name="specialties"
					id="specialties"
					value={specialties}
					onChange={e => setSpecialties(e.target.value)}
					required
				/>
			</div>

			<div className="input-block">
				<label htmlFor="phone">Telefone</label>
				<input
					type="number"
					name="phone"
					id="phone"
					required
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
			</div>

			<div className="input-group">
				<div className="input-block">
					<label htmlFor="latitude">Latitude</label>
					<input
						type="number"
						name="latitude"
						id="latitude"
						required
						value={latitude}
						onChange={e => setLatitude(e.target.value)}
					/>
				</div>

				<div className="input-block">
					<label htmlFor="longitude">Longitude</label>
					<input
						type="number"
						name="longitude"
						id="longitude"
						required
						value={longitude}
						onChange={e => setLongitude(e.target.value)}
					/>
				</div>
			</div>

			<button type="submit">Salvar</button>
		</form>
	);
};
