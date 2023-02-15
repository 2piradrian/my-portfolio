import { Tech } from "./../../database/Techs";
import style from "./style.module.css";

function TechView({ name, img }: Tech) {
	return (
		<div className={style.box}>
			<img src={img} alt={name} />
			<p>{name}</p>
		</div>
	);
}

export default TechView;
