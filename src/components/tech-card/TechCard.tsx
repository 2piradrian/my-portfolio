import { Tech } from "../../database/Techs";
import TechView from "../tech-view/TechView";
import style from "./style.module.css";

type Props = {
	data: Tech[];
};

function TechCard({ data }: Props) {
	return (
		<div className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				{data.map((tech) => (
					<TechView key={tech.id} {...tech} />
				))}
			</div>
		</div>
	);
}

export default TechCard;
