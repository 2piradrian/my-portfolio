import CircleTech from "./../../components/circle-tech/CircleTech";
import style from "./principal-techs.module.css";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

function PrincipalTechs() {
	return (
		<div className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<div className={style.techDivisor}>
					<CircleTech name="HTML">
						<AiFillHtml5 />
					</CircleTech>
					<CircleTech name="CSS">
						<DiCss3 />
					</CircleTech>
					<CircleTech name="JavaScript">
						<IoLogoJavascript />
					</CircleTech>
				</div>
				<div className={style.techDivisor}>
					<CircleTech name="Git">
						<FaGitAlt />
					</CircleTech>
					<CircleTech name="TypeScript">
						<SiTypescript />
					</CircleTech>
					<CircleTech name="React.JS">
						<FaReact />
					</CircleTech>
				</div>
			</div>
		</div>
	);
}

export default PrincipalTechs;
