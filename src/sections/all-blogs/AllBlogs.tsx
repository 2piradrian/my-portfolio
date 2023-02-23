import { Link } from "react-router-dom";
import BlogCard from "../../components/blog-card/BlogCard";
import Title from "../../components/title/Title";
import { blogsArray } from "../../database/Blogs";
import style from "./blogs.module.css";

function AllBlogs() {
	return (
		<div className="bigcontainer">
			<Title text="<Mi Blog />" />
			<div className={style.subcontainer}>
				{blogsArray.map((blog) => (
					<Link aria-label="ir al blog" to={`/blog/${blog.id}`} key={blog.id}>
						<BlogCard {...blog} />
					</Link>
				))}
			</div>
		</div>
	);
}

export default AllBlogs;
