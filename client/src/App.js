import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Stores from "./components/Stores";
import ScrollToTop from "./components/ScrollToTop";
import useScroll from "./custom_hooks/useScroll";
import NavBar from "./components/Navbar";
import CartSection from "./components/CartSection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StoreProfile from "./components/StoreProfile";
import EditProfile from "./components/EditProfile";

const App = () => {
	// custom hook useScroll
	let { scrolledOverHundred, scrolledOverTen } = useScroll();

	return (
		<div className="App relative">
			<div className="font-sans 2xl:mx-[10rem] lg:mx-[5rem] md:mx-0 px-5 ">
				<Router>
					{/* Navigation bar */}
					<NavBar hasScrolled={scrolledOverTen} />

					{/* Scroll To Top */}
					<ScrollToTop hasScrolled={scrolledOverHundred} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/stores/discover" element={<Stores />} />
						<Route path="/stores/discover/:store/:food" element={<Stores />} />
						<Route path="/stores/:store/:food" element={<StoreProfile />} />
						<Route path="/stores/:store" element={<StoreProfile />} />
						<Route path="/cart" element={<CartSection />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/my/:store" element={<StoreProfile />} />
						<Route path="/my/:store/:food" element={<StoreProfile />} />
						<Route path="/my/:store/edit-profile" element={<EditProfile />} />
						<Route path="/my/:store/edit-password" element={<EditProfile />} />
						<Route path="/my/:store/edit-email" element={<EditProfile />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
};

export default App;
