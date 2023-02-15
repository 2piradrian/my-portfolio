import Title from "../../components/title/Title";
import { projectsArray } from "../../database/Projects";
import ProjectCard from "./../../components/project-card/ProjectCard";
import style from "./projects.module.css";

function Projects() {
	return (
		<div className="bigcontainer" id="projects">
			<Title text="<Mis proyectos />" />
			<div className={style.subcontainer}>
				{projectsArray.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
