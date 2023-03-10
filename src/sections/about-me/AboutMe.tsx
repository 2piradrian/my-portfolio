import cv from "../../assets/curriculum/cv_rodriguez.pdf";
import Decoration from "../../components/decoration/Decoration";
import Tag from "../../components/tag-decoration/Tag";
import Title from "../../components/title/Title";
import LongText from "./../../components/long-text/LongText";
import style from "./aboutme.module.css";

function AboutMe() {
	return (
		<div className={`smallcontainer ${style.background}`} id="about">
			<div className={style.subcontainer}>
				<div className={style.firstbox}>
					<Title text="<Sobre Mi />" />
					<LongText
						text="Soy estudiante de ingeniería en sistemas. Me encanta la
						tecnología y el valor agregado que encuentro en ella. Se
						me da muy bien trabajar en equipo, y la comunicación con
						el mismo. Me gustan los desafíos."
					/>
				</div>
				<div className={style.secondbox}>
					<Title text="<Mis Pasiones />" />
					<LongText
						text="No encuentro nada más apasionante que aportar valor. Amo
						la educación y soy admirador de gente con el deseo y las
						ganas de compartir, ayudar, que educa con pasión y sobre
						todo con respeto. Sueño profundamente convertirme algún
						dia en una de esas personas."
					/>
				</div>
				<div className={style.btnContainer}>
					<a
						href={cv}
						target="_blank"
						rel="noopener noreferrer"
						download="cv_rodriguez.pdf"
						aria-label="descargar cv"
						className={style.button}>
						Descargar CV
					</a>
					<a href="/blogs" className={style.button} aria-label="mi blog">
						Mi Blog
					</a>
				</div>
				<Decoration />
			</div>
		</div>
	);
}

export default AboutMe;
