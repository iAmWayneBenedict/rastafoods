import About from "./home_components/About.component";
import Banner from "./home_components/Banner.component";
import Business from "./home_components/Business.component";
import DiscoverFoods from "./home_components/DiscoverFoods.component";
import GetInTouch from "./home_components/GetInTouch.component";
import HowItWorks from "./home_components/HowItWorks.component";
import Rider from "./home_components/RIder.component";
import RowMenu from "./home_components/RowMenu.component";

const Home = () => {
	return (
		<div className="">
			<div className="2xl:mx-[10rem] lg:mx-[2rem]">
				{/*  Banner component */}
				<Banner />
				{/* About component */}
				<About />
			</div>
			{/* How It Works component */}
			<HowItWorks />
			<div className="2xl:mx-[10rem] lg:mx-[2rem]">
				{/* Row Menu Component */}
				<RowMenu />
				<DiscoverFoods />
				<Business />
				<Rider />
				<GetInTouch />
			</div>
		</div>
	);
};

export default Home;
