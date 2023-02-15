import TechCard from "../../components/tech-card/TechCard";
import Title from "../../components/title/Title";
import { frontendArray } from "../../database/Techs";
import { backendArray, toolsArray } from "./../../database/Techs";

function AllTechs() {
	return (
		<div className="bigcontainer">
			<Title text="<Tecnologías />" />
			<TechCard data={frontendArray} />
			<TechCard data={backendArray} />
			<TechCard data={toolsArray} />
		</div>
	);
}

export default AllTechs;
