import React from "react";

import "./styles.css";

export default ({ local }) => {
	return (
		<li className="local-item">
			<header>
				<img src={local.avatar_url} alt={local.full_name} />
				<div className="user-info">
					<strong>{local.full_name}</strong>
					<span>{local.acting}</span>
					<br />
					<span>{local.specialties.join(", ")}</span>
					<br />
					<span>{local.phone}</span>
				</div>
			</header>
			<p>{local.biography}</p>
			<a href={`https://www.instagram.com/${local.instagram_username}/`}>
				Acessar perfil no Instagram
			</a>
		</li>
	);
};
