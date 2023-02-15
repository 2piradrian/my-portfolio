import "./global/global.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
