import { DiGithubBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiRedux,
	SiStyledcomponents,
	SiTypescript,
	SiVercel,
} from "react-icons/si";

type Props = {
	tech: string;
};

function ProjectTechs({ tech }: Props) {
	switch (tech) {
		case "JS":
			return <IoLogoJavascript />;
		case "REACT":
			return <FaReact />;
		case "TS":
			return <SiTypescript />;
		case "GITHUB":
			return <DiGithubBadge />;
		case "VERCEL":
			return <SiVercel />;
		case "REDUX":
			return <SiRedux />;
		case "STYLED":
			return <SiStyledcomponents />;
		default:
			return <p>{tech}</p>;
	}
}

export default ProjectTechs;
