import CuisineCard from "../card_components/CuisineCard.component";
import FoodCard2 from "../card_components/FoodCard2.component";
import StoreCard from "../card_components/StoreCard.component";

const SectionComponent = ({ title, isCuisines, isShops, isFoods, currentLocation = "" }) => {
	const cardData = {
		burger: {
			name: "Burgers",
			src: "/img/t-mcdonalds-qpc-deluxe-burger 1.png",
		},
		drinks: {
			name: "Drinks",
			src: "/img/Rectangle 15.png",
		},
		fried_chicken: {
			name: "Fried Chicken",
			src: "/img/Fried Chicken.png",
		},
		sisig: {
			name: "Sisig",
			src: "/img/Sisig.png",
		},
		bundle_meals: {
			name: "Bundle Meals",
			src: "/img/Inasal.png",
		},
		halohalo: {
			name: "Halo Halo",
			src: "/img/halo halo.png",
		},
	};

	let myLink = currentLocation === "my" ? "/my" : "/stores";
	return (
		<div className="my-20">
			<h1 className="font-bold text-xl my-10">{title}</h1>
			<div className="flex flex-wrap gap-3 sm:gap-5">
				{isShops && (
					<div className="flex gap-3 md:gap-5 w-full">
						{[...Array(10)].map((k, val) => {
							if (val < 8) return <StoreCard event={false} key={val} />;
							return <StoreCard event={true} key={val} />;
						})}
					</div>
				)}
				{isCuisines && (
					<div className="flex gap-3 overflow-x-scroll w-full">
						{Object.entries(cardData).map(([key, value]) => {
							return <CuisineCard data={value} key={key} />;
						})}
					</div>
				)}
				{isFoods && (
					<div className="flex flex-wrap gap-3 w-full">
						{[...Array(10)].map((k, val) => {
							if (val < 8) return <FoodCard2 key={val} myLink={myLink} />;
							return <FoodCard2 key={val} myLink={myLink} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default SectionComponent;
