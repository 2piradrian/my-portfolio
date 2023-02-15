import style from "./style.module.css";

type Props = {
	post: string;
	title: string;
	content: string;
};

function BlogCard({ post, title, content }: Props) {
	return (
		<div className={style.box}>
			<img src={post} />
			<h3>{title}</h3>
			<p>{content.slice(0, 130) + "..."}</p>
		</div>
	);
}

export default BlogCard;
