import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
	return (
		<div className="App font-sans 2xl:mx-[10rem] lg:mx-[5rem] md:mx-0 px-5 relative">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
