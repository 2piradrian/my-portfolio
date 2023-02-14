import "./global/global.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
