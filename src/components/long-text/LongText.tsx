import style from "./style.module.css";

type Props = {
	text: string;
};

function LongText({ text }: Props) {
	return <p className={style.text}>{text}</p>;
}

export default LongText;
