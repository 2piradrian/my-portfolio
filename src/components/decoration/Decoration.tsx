import Tag from "../tag-decoration/Tag";

function Decoration() {
	return (
		<>
			<Tag
				content="<"
				customStyle={{
					position: "absolute",
					top: 0,
					left: "15px",
				}}
			/>
			<Tag
				content="/>"
				customStyle={{
					position: "absolute",
					bottom: "-75px",
					right: "15px",
				}}
			/>
		</>
	);
}

export default Decoration;
