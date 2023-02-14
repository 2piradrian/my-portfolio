import React from "react";
import style from "./style.module.css";

type Props = {
	children: React.ReactNode;
	styles?: string;
	url: string;
	target?: string;
};

function InvisibleAnchor({ children, styles, url, target }: Props) {
	return (
		<a href={url} target={target} className={`${style.anchor} ${styles}`}>
			{children}
		</a>
	);
}

export default InvisibleAnchor;
