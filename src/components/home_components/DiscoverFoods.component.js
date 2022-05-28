import Card from "../home_components/discover_foods_components/Card.component";

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

	return (
		<div className="current flex flex-col mt-[8rem] py-10 relative">
			<span className="absolute top-0 left-0 w-screen h-full z-[-1]"></span>
			<div className="title flex flex-col items-center">
				<h1 className="font-semibold xl:text-4xl text-4xl leading-snug text-center mb-5">
					Discover Foods
				</h1>
				<p className="text-center max-w-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<div className="flex items-center md:justify-center mt-20 flex-col md:flex-row flex-wrap">
				{Object.entries(cardData).map(([key, value]) => {
					return <Card data={value} key={key} />;
				})}
			</div>
		</div>
	);
};

export default DiscoverFoods;
