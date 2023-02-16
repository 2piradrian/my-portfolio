import { AiOutlineClose } from "react-icons/ai";
import InvisibleAnchor from "./../invisible-anchor/InvisibleAnchor";
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
					<InvisibleAnchor url="/home#about" label="sobre mi">
						Sobre Mi
					</InvisibleAnchor>
				</li>
				<li className={style.navRoutes}>
					<InvisibleAnchor url="/home#projects" label="mis proyectos">
						Proyectos
					</InvisibleAnchor>
				</li>
				<li className={style.navRoutes}>
					<InvisibleAnchor url="/blogs" label="mi blog">
						Blog
					</InvisibleAnchor>
				</li>
				<li className={style.navRoutes}>
					<InvisibleAnchor url="/home#contact" label="contáctame">
						Contacto
					</InvisibleAnchor>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
