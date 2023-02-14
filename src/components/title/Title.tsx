import style from "./style.module.css";

type Props = {
	text: string;
};

function Title({ text }: Props) {
	return <h2 className={style.title}>{text}</h2>;
}

export default Title;
