import { delay } from "../../../utils/delay";

const whoamiText = [
	"Hola! Soy Óscar, desde marzo estoy en Gyrus desarrollando parte del front-end del portal privado de Imagina.",
	"Soy de Talavera de la Reina aunque en los últimos 5 años me vine a Madrid y me encanta lo que me ha ofrecido esta ciudad! (este verano me he vuelto a Talavera a vivir).",
	"En mis ratos libres (a parte de trastear con tecnologías), me gusta la música y el diseño tanto gráfico, de producto o 3D (o cualquiera que me potencie la creatividad), aunque me frustra un poco porque no se me da del todo bien.",
	"Dentro de la programación, algo que me divierte mucho es el scrapping web y el RegExp.",
	"No solo estoy interesado en el mundo web, también estoy interesado y abierto a aprender sobre el mundo del big data, la ciberseguridad, videojuegos y cualquier otra cosa que vaya descubriendo.",
	"Un saludo y espero seguir aprendiendo mucho de vosotros!",
];

export const whoamiApp = async (domEl) => {
	for (let line of whoamiText) {
		for (let letter of line) {
			domEl.innerHTML += letter;
			await delay(50);
			domEl.scrollTop = domEl.scrollHeight;
		}
		domEl.innerHTML += "<br><br>";
		await delay(100);
	}
	return "";
};
