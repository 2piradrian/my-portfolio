import style from "./style.module.css";

type Props = {
	children: any;
	name: string;
};

function CircleTech({ children, name }: Props) {
	return (
		<div className={style.icon}>
			{children}
			<span className={style.techName}>{name}</span>
		</div>
	);
}

export default CircleTech;
