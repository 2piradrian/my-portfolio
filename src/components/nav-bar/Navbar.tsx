import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import style from "./style.module.css";

type Props = {
	setClosed: Function;
};

function Navbar({ setClosed }: Props) {
	return (
		<div
			className={style.navBox}
			onClick={() => {
				if (window.innerWidth < 900) setClosed(true);
			}}>
			<AiOutlineClose className={style.close} />
			<ul className={style.navList}>
				<li className={style.navRoutes}>
					<Link to="/home#about" aria-label="sobre mi">
						Sobre Mi
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/home#projects" aria-label="mis proyectos">
						Proyectos
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/blogs" aria-label="mi blog">
						Blog
					</Link>
				</li>
				<li className={style.navRoutes}>
					<Link to="/home#contact" aria-label="contáctame">
						Contacto
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
