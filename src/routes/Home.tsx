import AboutMe from "../sections/about-me/AboutMe";
import Motivation from "../sections/motivation/Motivation";
import PrincipalTechs from "../sections/principal-techs/PrincipalTechs";
import Projects from "../sections/projects/Projects";
import Layout from "./../layouts/Layout";
import Hero from "./../sections/hero/Hero";

function Home() {
	return (
		<Layout>
			<Hero />
			<PrincipalTechs />
			<AboutMe />
			<Motivation />
			<Projects />
		</Layout>
	);
}

export default Home;
