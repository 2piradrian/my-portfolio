import { useParams } from "react-router-dom";
import Error from "../../components/error/Error";
import { BlogsArray } from "./../../database/Blogs";
import style from "./blogview.module.css";

function BlogView() {
	let { id } = useParams();
	const blog = BlogsArray.filter((blog) => blog.id === +id!);

	if (!blog.length) {
		return <Error />;
	}
	const { content, img, title } = blog[0];

	return (
		<div className="bigcontainer">
			<div className={style.view}>
				<img src={img} alt={title} />
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
}

export default BlogView;
