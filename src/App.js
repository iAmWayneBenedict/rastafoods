import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useLayoutEffect } from "react";

const App = () => {
	const [scrolledOverHundred, setScrolledOverHundred] = useState(false);
	const [scrolledOverTen, setScrolledOverTen] = useState(false);
	const navScrollStatus = () => {
		let scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 100) {
			setScrolledOverHundred(true);
		} else {
			setScrolledOverHundred(false);
		}
		if (scrollTop > 50) {
			setScrolledOverTen(true);
		} else {
			setScrolledOverTen(false);
		}
	};
	useLayoutEffect(() => {
		navScrollStatus();
		window.addEventListener("scroll", navScrollStatus);
		return () => window.removeEventListener("scroll", navScrollStatus);
	}, []);

	return (
		<Router>
			<div className="App font-sans 2xl:mx-[10rem] lg:mx-[5rem] md:mx-0 px-5 relative">
				{/* Navigation bar */}
				<NavBar hasScrolled={scrolledOverTen} />
				{/* Scroll To Top */}
				<ScrollToTop hasScrolled={scrolledOverHundred} />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
