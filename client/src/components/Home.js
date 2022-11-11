import About from "./home_components/About.component";
import Banner from "./home_components/Banner.component";
import Business from "./home_components/Business.component";
import DiscoverFoods from "./home_components/DiscoverFoods.component";
import GetInTouch from "./home_components/GetInTouch.component";
import HowItWorks from "./home_components/HowItWorks.component";
import Rider from "./home_components/RIder.component";
import RowMenu from "./home_components/RowMenu.component";
import Preloader from "./preloader_component/Preloader.component";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, [isLoading]);

	return (
		<div>
			<Preloader loaderValue={isLoading} />
			{!isLoading && (
				<div>
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
			)}
		</div>
	);
};

export default Home;
