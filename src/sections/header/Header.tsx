import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/brand/Logo.svg";
import InvisibleAnchor from "./../../components/invisible-anchor/InvisibleAnchor";
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
				<InvisibleAnchor url="/home">
					<img src={logo} className={style.iso} />
				</InvisibleAnchor>

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
