import SectionContainer from "./section_components/SectionContainer";
import { useEffect, useState } from "react";
import ItemCard from "./card_components/ItemCard.component";
import { useParams } from "react-router-dom";
import CartSection from "./card_components/CartSection.component";

const Stores = () => {
	const [itemPopUpStatus, setItemPopUpStatus] = useState(false);
	const params = useParams();
	const data = {
		shops: [
			{ title: "Free Deliveries" },
			{ title: "Hot Deals Up to 40% Off" },
			{ title: "New Restaurants Near You" },
			{ title: "Popular Restaurants" },
		],
		cuisines: [{ title: "Discover Interesting Cuisines" }],
		foods: [{ title: "Discover New Foods" }, { title: "Popular Foods" }],
	};
	useEffect(() => {
		let paramsLen = Object.keys(params).length;
		if (!!paramsLen) {
			setItemPopUpStatus(true);
		} else {
			setItemPopUpStatus(false);
		}
	}, [params]);

	const addOnData = [
		{
			title: "Add On",
			required: false,
			data: [
				{ name: "Checkbox 1", additionalPrice: 150 },
				{ name: "Checkbox 2", additionalPrice: 150 },
				{ name: "Checkbox 3", additionalPrice: 150 },
			],
		},
		{
			title: "Additional Add On",
			required: false,
			data: [
				{ name: "Checkbox 1", additionalPrice: 150 },
				{ name: "Checkbox 2", additionalPrice: 150 },
				{ name: "Checkbox 3", additionalPrice: 150 },
			],
		},
		{
			title: "Free Add On",
			required: true,
			data: [
				{ name: "Checkbox 1", additionalPrice: 150 },
				{ name: "Checkbox 2", additionalPrice: 150 },
				{ name: "Checkbox 3", additionalPrice: 150 },
			],
		},
	];

	return (
		<div>
			<div className="md:mx-10 mt-28">
				<div className="banner w-full h-[5rem] bg-gray-400 flex items-center justify-center mb-20">
					<p className="text-sm">Banner</p>
				</div>
				<div className="filter flex flex-col gap-10">
					<div className="inline-flex gap-1 sm:gap-3">
						<input
							type="email"
							id="email"
							className="border border-gray-500 text-gray-900 text-sm rounded-lg block w-full sm:w-[20rem] p-2.5 focus:outline-none focus:border"
							placeholder="Search"
						/>
						<button
							type="submit"
							className="text-white bg-primary focus:outline-none font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center"
						>
							Search
						</button>
					</div>
					<button className="filter inline-flex gap-1 align-middle">
						<h6 className="font-semibold text-primary underline sm:text-base text-xs flex items-center">
							Filter
						</h6>
						<i className="bi bi-chevron-down text-primary font-semibold sm:text-base text-xs flex items-center mt-[2px]"></i>
					</button>
				</div>
				<div className="shops">
					{data.shops.map(({ title }, key) => {
						return (
							<SectionContainer data={{ title, key, section: "shops" }} key={key} />
						);
					})}
				</div>
				<div className="cuisines">
					{data.cuisines.map(({ title }, key) => {
						return (
							<SectionContainer
								data={{ title, key, section: "cuisines" }}
								key={key}
							/>
						);
					})}
				</div>
				<div className="foods">
					{data.foods.map(({ title }, key) => {
						return (
							<SectionContainer data={{ title, key, section: "foods" }} key={key} />
						);
					})}
				</div>
			</div>
			{itemPopUpStatus && <ItemCard data={addOnData} />}
		</div>
	);
};

export default Stores;
