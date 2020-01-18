import React, { useState } from "react";
import api from "../../services/api";

import "./styles.css";

export default function Update({ location, history }) {
	const {
		_id,
		full_name,
		avatar_url,
		specialties,
		phone,
		acting,
		biography,
		location: user_location
	} = location.state.local;

	const [newPhone, setPhone] = useState(phone);
	const [a, setSpecialties] = useState(specialties);
	const [newActing, setActing] = useState(acting);

	const [latitude, setLatitude] = useState(() => {
		const { coordinates } = user_location;

		return coordinates[1];
	});

	const [longitude, setLongitude] = useState(() => {
		const { coordinates } = user_location;

		return coordinates[0];
	});

	async function updateLocal(e) {
		e.preventDefault();

		await api.put(`/locals/${_id}/update`, {
			newPhone,
			a,
			newActing,
			latitude,
			longitude
		});

		history.push({
			pathname: "/"
		});
	}

	return (
		<div className="update-container">
			<section id="update-content">
				<img src={avatar_url} alt={full_name} />
				<strong>{full_name}</strong>
				{biography}
				<form id="update-form">
					<div id="update-block">
						<label htmlFor="acting">Area de Atuação</label>
						<input
							name="acting"
							value={newActing}
							onChange={e => setActing(e.target.value)}
							required
						/>
					</div>
					<div id="update-block">
						<label htmlFor="a">Novas tecnologias</label>
						<input
							name="a"
							value={a}
							onChange={e => setSpecialties(e.target.value)}
							required
						/>
					</div>
					<div id="update-block">
						<label htmlFor="phone">Telefone</label>
						<input
							type="number"
							name="phone"
							value={newPhone}
							onChange={e => setPhone(e.target.value)}
							required
						/>
					</div>
					<section id="update-group">
						<div id="update-block">
							<label htmlFor="latitude">Latitude</label>
							<input
								type="number"
								name="latitude"
								value={latitude}
								onChange={e => setLatitude(e.target.value)}
								required
							/>
						</div>
						<div id="update-block">
							<label htmlFor="longitude">Longitude</label>
							<input
								name="longitude"
								value={longitude}
								onChange={e => setLongitude(e.target.value)}
								required
							/>
						</div>
					</section>

					<button type="submit" onClick={updateLocal}>
						Atualizar
					</button>
				</form>
			</section>
		</div>
	);
}
