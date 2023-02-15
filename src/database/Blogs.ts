type Blog = {
	id: number;
	img: string;
	post: string;
	title: string;
	content: string;
};

export const BlogsArray: Blog[] = [
	{
		id: 0,
		post: require("../assets/blog/0/post.png"),
		img: require("../assets/blog/0/content.jpg"),
		title: "Ayudante de Santa",
		content: `Ayudante de Santa es un proyecto propio de automatización de cultivos, que marcó mis inicios en la programación, llevandome a mejorar cada día mas, desde las peores prácticas, a tener un código cada vez más prolijo. Lo desarrollé en C++ y Kotlin, aunque aún está en etapa de pruebas.
		\n ¿Cómo inició?
		\n Como un simple juego con un amigo, a ver hasta donde llegabamos. En cuanto le conte mi idea nos pusimos a escribir sobre que características debía tener el producto. Decidimos por centrarnos en invernaderos indoors, que no mucho después termino mutando a todo lo que tenga que ver con cultivos del hogar. Ninguno de los dos tenía idea en donde nos estabamos metiendo, él, contador público, y yo, con apenas saber que era programar. Nos tocó aprender electrónica, a soldar, a armar planos, a pelear con la poca memoria que traían los microcontroladores que necesitabamos, fui rebotando de lenguaje en lenguaje, de plataforma en plataforma en búsqueda de hacer un producto óptimo que logre convencernos.
		\nActualmente el producto cuenta con una app móvil, en donde el usuario puede parametrizar ajustes en modo manual, y modo automático, permitiendole elegir a que temperatura, a que hora y a que nivel de humedad se deberia activar el riego, cuando encender la luz y cuando no, cuando se debería refrigerar el mueble, entre muchas otras opciones, y, como nos gusta llamarlo, el robot que recibe todas las instrucciones del usuario. 
		\n Aunque el producto no está terminado, por mi parte estoy totalmente satisfecho, me introdujo a un mundo hermoso, y evidentemente cambió mi vida.
		\n A día de hoy seguimos estudiando y desarronallando el producto.`,
	},
];
