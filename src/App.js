import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stores from "./components/Stores";
import ScrollToTop from "./components/ScrollToTop";
import useScroll from "./components/custom_hooks/useScroll";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSection from "./components/card_components/CartSection.component";
import Login from "./components/Login";

const App = () => {
	// custom hook useScroll
	let { scrolledOverHundred, scrolledOverTen } = useScroll();
	return (
		<div className="App font-sans 2xl:mx-[10rem] lg:mx-[5rem] md:mx-0 px-5 relative">
			<Router>
				{/* Navigation bar */}
				<NavBar hasScrolled={scrolledOverTen} />
				{/* Scroll To Top */}
				<ScrollToTop hasScrolled={scrolledOverHundred} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/stores" element={<Stores />} />
					<Route path="/stores/:store/:food" element={<Stores />} />
					<Route path="/cart" element={<CartSection />} />
					<Route path="/login" element={<Login />}></Route>
				</Routes>
				{/* Footer */}
				<Footer />
			</Router>
		</div>
	);
};

export default App;
