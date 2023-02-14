import circle from "../../assets/misc/roscaProg.svg";
import style from "./hero.module.css";
function Hero() {
	return (
		<div className={`bigcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<div className={style.titleContainer}>
					<p className={style.title}>¡Hola!</p>
					<p className={style.title}>
						Yo soy <span>Adrián</span>,
					</p>
					<h1 className={style.title}>Front end developer.</h1>
				</div>
				<img
					className={style.circleDecoration}
					alt="decoration"
					src={circle}
				/>
			</div>
		</div>
	);
}

export default Hero;
