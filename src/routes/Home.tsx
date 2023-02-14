import PrincipalTechs from "../sections/principal-techs/PrincipalTechs";
import Layout from "./../layouts/Layout";
import Hero from "./../sections/hero/Hero";

function Home() {
	return (
		<Layout>
			<Hero />
			<PrincipalTechs />
		</Layout>
	);
}

export default Home;
