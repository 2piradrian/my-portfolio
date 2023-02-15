import Title from "../../components/title/Title";
import { ProjectArray } from "../../database/Projects";
import ProjectCard from "./../../components/project-card/ProjectCard";
import style from "./projects.module.css";

function Projects() {
	return (
		<div className="bigcontainer">
			<Title text="<Mis proyectos />" />
			<div className={style.subcontainer}>
				{ProjectArray.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
