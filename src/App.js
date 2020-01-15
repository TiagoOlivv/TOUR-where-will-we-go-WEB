import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

// Componente é um bolco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Estado é uma informação mantida pelo componente (Imutabilidade)
// Propriedade são informações que um componente PAI passa para um componente FILHO

export default () => {
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

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

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<form>
					<div className="input-block">
						<label htmlFor="instagram_username">
							Usuário do Instagram
						</label>
						<input
							name="instagram_username"
							id="instagram_username"
							required
						/>
					</div>

					<div className="input-block">
						<label htmlFor="acting">Área de Atuação</label>
						<input name="acting" id="acting" required />
					</div>

					<div className="input-block">
						<label htmlFor="specialties">Especialidades</label>
						<input name="specialties" id="specialties" required />
					</div>

					<div className="input-block">
						<label htmlFor="phone">Telefone</label>
						<input name="phone" id="phone" required />
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
							/>
						</div>
					</div>

					<button type="submit">Salvar</button>
				</form>
			</aside>
			<main>
				<ul>
					<li className="local-item">
						<header>
							<img
								src="https://instagram.fflb1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/54247517_298321750846108_3712138326967320576_n.jpg?_nc_ht=instagram.fflb1-1.fna.fbcdn.net&_nc_ohc=q2FWcN9SYf8AX-3WNJY&oh=4a9a69739885cdf132971c00b181d6a3&oe=5ED534C2"
								alt="Tiago de Moura Oliveira"
							/>
							<div className="user-info">
								<strong>Tiago de Moura Oliveira</strong>
								<span>Programador Junior</span>
								<br />
								<span>ReactJS, React Native e NodeJS</span>
								<br />
								<span>(89)99919-1275</span>
							</div>
						</header>
						<p>God’s plan. ✞</p>
						<a href="https://www.instagram.com/tiagoolivv/">
							Acessar perfil no Instagram
						</a>
					</li>
					<li className="local-item">
						<header>
							<img
								src="https://instagram.fflb1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/54247517_298321750846108_3712138326967320576_n.jpg?_nc_ht=instagram.fflb1-1.fna.fbcdn.net&_nc_ohc=q2FWcN9SYf8AX-3WNJY&oh=4a9a69739885cdf132971c00b181d6a3&oe=5ED534C2"
								alt="Tiago de Moura Oliveira"
							/>
							<div className="user-info">
								<strong>Tiago de Moura Oliveira</strong>
								<span>Programador Junior</span>
								<br />
								<span>ReactJS, React Native e NodeJS</span>
								<br />
								<span>(89)99919-1275</span>
							</div>
						</header>
						<p>God’s plan. ✞</p>
						<a href="https://www.instagram.com/tiagoolivv/">
							Acessar perfil no Instagram
						</a>
					</li>
					<li className="local-item">
						<header>
							<img
								src="https://instagram.fflb1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/54247517_298321750846108_3712138326967320576_n.jpg?_nc_ht=instagram.fflb1-1.fna.fbcdn.net&_nc_ohc=q2FWcN9SYf8AX-3WNJY&oh=4a9a69739885cdf132971c00b181d6a3&oe=5ED534C2"
								alt="Tiago de Moura Oliveira"
							/>
							<div className="user-info">
								<strong>Tiago de Moura Oliveira</strong>
								<span>Programador Junior</span>
								<br />
								<span>ReactJS, React Native e NodeJS</span>
								<br />
								<span>(89)99919-1275</span>
							</div>
						</header>
						<p>God’s plan. ✞</p>
						<a href="https://www.instagram.com/tiagoolivv/">
							Acessar perfil no Instagram
						</a>
					</li>
					<li className="local-item">
						<header>
							<img
								src="https://instagram.fflb1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/54247517_298321750846108_3712138326967320576_n.jpg?_nc_ht=instagram.fflb1-1.fna.fbcdn.net&_nc_ohc=q2FWcN9SYf8AX-3WNJY&oh=4a9a69739885cdf132971c00b181d6a3&oe=5ED534C2"
								alt="Tiago de Moura Oliveira"
							/>
							<div className="user-info">
								<strong>Tiago de Moura Oliveira</strong>
								<span>Programador Junior</span>
								<br />
								<span>ReactJS, React Native e NodeJS</span>
								<br />
								<span>(89)99919-1275</span>
							</div>
						</header>
						<p>God’s plan. ✞</p>
						<a href="https://www.instagram.com/tiagoolivv/">
							Acessar perfil no Instagram
						</a>
					</li>
				</ul>
			</main>
		</div>
	);
};
