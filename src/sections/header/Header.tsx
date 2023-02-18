import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/brand/Logo.svg";
import Navbar from "./../../components/nav-bar/Navbar";
import style from "./header.module.css";

function Header() {
	const [closed, setClosed] = useState<boolean>(window.innerWidth < 900);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => setClosed(window.innerWidth < 900),
			false
		);
	}, [window]);

	return (
		<header className={`smallcontainer ${style.background}`}>
			<div className={style.subcontainer}>
				<Link to="/home" aria-label="página principal">
					<img src={logo} className={style.iso} alt="isologotipo" />
				</Link>

				<RxHamburgerMenu
					className={style.burger}
					onClick={() => setClosed(false)}
				/>

				{!closed && <Navbar setClosed={setClosed} />}
			</div>
		</header>
	);
}

export default Header;
