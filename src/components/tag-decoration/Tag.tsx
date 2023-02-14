import style from "./style.module.css";

type Props = {
	customStyle: object;
	content: string;
};

function Tag({ content, customStyle }: Props) {
	return (
		<div className={style.decoration} style={{ ...customStyle }}>
			{content}
		</div>
	);
}

export default Tag;
