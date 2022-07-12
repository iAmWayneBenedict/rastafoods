import Card from "../home_components/discover_foods_components/Card.component";
import { Link } from "react-router-dom";
import useWindowWidthSize from "../../custom_hooks/useWindowWidthSize";

const DiscoverFoods = () => {
	const cardData = {
		burger: {
			name: "Burgers",
			src: "img/t-mcdonalds-qpc-deluxe-burger 1.png",
		},
		drinks: {
			name: "Drinks",
			src: "img/Rectangle 15.png",
		},
		fried_chicken: {
			name: "Fried Chicken",
			src: "img/Fried Chicken.png",
		},
		sisig: {
			name: "Sisig",
			src: "img/Sisig.png",
		},
		bundle_meals: {
			name: "Bundle Meals",
			src: "img/Inasal.png",
		},
		halohalo: {
			name: "Halo Halo",
			src: "img/halo halo.png",
		},
	};
	const windowSize = useWindowWidthSize();
	let itr = 0;
	return (
		<div className="current flex flex-col mt-[8rem] py-10 relative">
			<div className="title flex flex-col items-center">
				<h1 className="font-semibold xl:text-4xl text-4xl leading-snug text-center mb-5">
					Discover Foods
				</h1>
				<p className="text-center max-w-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<div className="flex items-center sm:justify-center mt-20 flex-col sm:flex-row flex-wrap">
				{Object.entries(cardData).map(([key, value]) => {
					itr += 1;
					if (windowSize >= 638) return <Card data={value} key={key} />;
					else if (windowSize < 638 && itr <= 3) return <Card data={value} key={key} />;
					return "";
				})}
			</div>
			<div className="find-out-more flex text-primary justify-center mt-10">
				<Link to={"/"} className="flex">
					<h2 className="mr-3 text-xs sm:text-base flex items-center">Find out more</h2>
					<i className="bi bi-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default DiscoverFoods;
