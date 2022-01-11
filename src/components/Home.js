import About from "./home_components/About.component";
import Banner from "./home_components/Banner.component";
import HowItWorks from "./home_components/HowItWorks.component";
import RowMenu from "./home_components/RowMenu.component";

const Home = () => {
	return (
		<div className="">
			<div className="2xl:mx-[5rem] lg:mx-[2rem]">
				{/*  Banner component */}
				<Banner />
				{/* About component */}
				<About />
			</div>
			{/* How It Works component */}
			<HowItWorks />
			<div className="2xl:mx-[5rem] lg:mx-[2rem]">
				{/* Row Menu Component */}
				<RowMenu />
			</div>
		</div>
	);
};

export default Home;
