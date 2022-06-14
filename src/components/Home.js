import About from "./home_components/About.component";
import Banner from "./home_components/Banner.component";
import Business from "./home_components/Business.component";
import DiscoverFoods from "./home_components/DiscoverFoods.component";
import Footer from "./Footer";
import GetInTouch from "./home_components/GetInTouch.component";
import HowItWorks from "./home_components/HowItWorks.component";
import NavBar from "./Navbar";
import Rider from "./home_components/RIder.component";
import RowMenu from "./home_components/RowMenu.component";
import ScrollToTop from "./ScrollToTop";
import useScroll from "./home_components/custom_hooks/useScroll";

const Home = () => {
	// custom hook useScroll
	let { scrolledOverHundred, scrolledOverTen } = useScroll();

	return (
		<div>
			{/* Navigation bar */}
			<NavBar hasScrolled={scrolledOverTen} />
			{/* Scroll To Top */}
			<ScrollToTop hasScrolled={scrolledOverHundred} />
			<div className="2xl:mx-[10%] lg:mx-[2rem]">
				{/*  Banner component */}
				<Banner />
				{/* About component */}
				<About />
			</div>
			{/* How It Works component */}
			<HowItWorks />
			<div className="2xl:mx-[10%] lg:mx-[2rem]">
				{/* Row Menu Component */}
				<RowMenu />
				{/* Discover Foods Component */}
				<DiscoverFoods />
				{/* Business Section Component */}
				<Business />
				{/* Rider Section Component */}
				<Rider />
				{/* Get In Touch Section Component */}
				<GetInTouch />
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Home;
