import React from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default ({ local }) => {
	async function deleteLocal() {
		await api.delete(`/locals/${local._id}/remove`);
		window.location.reload();
	}

	return (
		<li className="local-item">
			<header>
				<a href={`https://www.instagram.com/${local.instagram_username}/`}>
					<img src={local.avatar_url} alt={local.full_name} />
				</a>
				<div className="user-info">
					<strong>{local.full_name}</strong>
					<span>{local.acting}</span>
					<br />
					<span>{local.specialties.join(", ")}</span>
					<br />
					<span>{local.phone}</span>
				</div>
			</header>
			<p className="biography">{local.biography}</p>
			<div className="local-controll">
				{/* <Link
					id="update-local"
					to={{
						pathname: "/update",
						state: {
							local
						}
					}}
				>
					Atualizar
				</Link> */}
				<button id="remove-local" onClick={deleteLocal}>
					Remover
				</button>
			</div>
		</li>
	);
};
