import React from "react";
import Header from "../sections/header/Header";

type Props = {
	children: React.ReactNode;
};

function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>;
		</>
	);
}

export default Layout;
