import ProjectTechs from "../project-tech/ProjectTech";
import style from "./style.module.css";

type Props = {
	id: number;
	img: string;
	title: string;
	description: string;
	github: string;
	techs: Array<string>;
};

function ProjectCard({ img, title, description, github, techs }: Props) {
	return (
		<a href={github} className={style.box}>
			<img src={img} alt={title} />
			<div className={style.boxData}>
				<h3>{title}</h3>
				<p>{description}</p>
				<div className={style.iconContainer}>
					{techs.map((tech) => (
						<ProjectTechs tech={tech} />
					))}
				</div>
			</div>
		</a>
	);
}

export default ProjectCard;
