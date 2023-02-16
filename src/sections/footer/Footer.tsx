import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import style from "./footer.module.css";

function Footer() {
	return (
		<footer className={`smallcontainer ${style.background}`} id="contact">
			<div className={style.subcontainer}>
				<div className={style.divisor}>
					<a
						href="https://www.linkedin.com/in/rodriguezcadr/"
						target="_blank"
						rel="noreferrer">
						<AiFillLinkedin />
					</a>
					<a
						href="mailto:rodriguezcadr@gmail.com?subject=Contacto%20por%20portfolio"
						target="_blank"
						rel="noreferrer">
						<SiGmail />
					</a>
				</div>
				<div className={style.divisor}>
					<a
						href="https://github.com/2piradrian"
						target="_blank"
						rel="noreferrer">
						<AiFillGithub />
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=543516135462"
						target="_blank"
						rel="noreferrer">
						<BsWhatsapp />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
