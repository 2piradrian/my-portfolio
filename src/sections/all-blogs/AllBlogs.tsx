import BlogCard from "../../components/blog-card/BlogCard";
import Title from "../../components/title/Title";
import { BlogsArray } from "../../database/Blogs";
import InvisibleAnchor from "./../../components/invisible-anchor/InvisibleAnchor";
import style from "./blogs.module.css";

function AllBlogs() {
	return (
		<div className="bigcontainer">
			<Title text="<Mi Blog />" />
			<div className={style.subcontainer}>
				{BlogsArray.map((blog) => (
					<InvisibleAnchor url={`/blog/${blog.id}`}>
						<BlogCard {...blog} key={blog.id} />
					</InvisibleAnchor>
				))}
			</div>
		</div>
	);
}

export default AllBlogs;
