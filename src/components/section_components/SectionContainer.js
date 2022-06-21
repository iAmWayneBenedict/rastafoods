import { useEffect, useState } from "react";
import StoreCard from "../card_components/StoreCard.component";

const SectionContainer = ({ data }) => {
	// console.log(data, index, section);
	const [isShops, setIsShops] = useState(false);
	const [isCuisines, setIsCuisines] = useState(false);
	const [isFoods, setIsFoods] = useState(false);

	const { title, key, section } = data;

	useEffect(() => {
		if (section === "shops") setIsShops(true);
		else if (section === "cuisines") setIsCuisines(true);
		else if (section === "foods") setIsFoods(true);
	}, [section]);

	return (
		<div className="my-20">
			<h1 className="font-bold text-xl my-10">{title}</h1>
			<div className="flex flex-wrap gap-5">
				{isShops &&
					[...Array(10)].map((k, val) => {
						if (val < 8) return <StoreCard event={false} key={val} />;
						return <StoreCard event={true} key={val} />;
					})}
			</div>
		</div>
	);
};

export default SectionContainer;
