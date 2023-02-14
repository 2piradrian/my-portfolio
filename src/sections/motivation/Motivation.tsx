import screen from "../../assets/misc/AdsScreen.png";
import LongText from "../../components/long-text/LongText";
import Title from "../../components/title/Title";
import style from "./motivation.module.css";

function Motivation() {
	return (
		<div className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<div className={style.content}>
					<Title text="<Motivación />" />
					<LongText
						text="Ayudante de Santa es un proyecto propio de automatización de cultivos, que
						marcó mis inicios en la programación, llevandome a mejorar cada día mas,
						desde las peores prácticas, a tener un código cada vez más prolijo. Lo
						desarrollé en C++ y Kotlin, aunque aún está en etapa de pruebas."
					/>
					<a href="/blog">Conocé la historia completa.</a>
				</div>
				<img src={screen} alt="project" />
			</div>
		</div>
	);
}

export default Motivation;
