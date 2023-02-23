type Project = {
	id: number;
	img: string;
	title: string;
	description: string;
	github: string;
	techs: Array<string>;
};

export const projectsArray: Project[] = [
	{
		id: 0,
		img: require("../assets/projects/img1.png"),
		title: "Siete colores",
		description: "E-commerce con redux.",
		github: "https://github.com/2piradrian/siete-colores-web",
		techs: ["VERCEL", "TS", "REACT", "REDUX", "FIREBASE"],
	},
	{
		id: 1,
		img: require("../assets/projects/img0.png"),
		title: "Task manager",
		description: "Una app para organizar los tiempos de estudio/trabajo y descanso. ",
		github: "https://github.com/2piradrian/pomodoro-taskmanager",
		techs: ["VERCEL", "JS"],
	},
	{
		id: 2,
		img: require("../assets/projects/img4.png"),
		title: "C-Swap",
		description: "Portfolio de mi equipo freelance",
		github: "https://github.com/2piradrian/cswap-web",
		techs: ["VERCEL", "TS", "REACT"],
	},
	{
		id: 3,
		img: require("../assets/projects/img3.png"),
		title: "Search bar",
		description: "Barra de búsqueda implementada en lista de tareas.",
		github: "https://github.com/2piradrian/to-do-searchbar",
		techs: ["VERCEL", "JS", "REACT"],
	},
	{
		id: 4,
		img: require("../assets/projects/img2.png"),
		title: "Clima",
		description: "Una app para consultar el pronostico, con consumo de APIs.",
		github: "https://github.com/2piradrian/weather-webapp",
		techs: ["VERCEL", "JS"],
	},
];
