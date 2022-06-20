import StoreCard from "../card_components/StoreCard.component";

const SectionContainer = () => {
	return (
		<div className="my-20">
			<h1 className="font-bold text-xl my-10">Free Deliveries</h1>
			<div className="flex flex-wrap gap-5">
				<StoreCard />
				<StoreCard />
				<StoreCard />
				<StoreCard />
				<StoreCard />
				<StoreCard />
				<StoreCard />
			</div>
		</div>
	);
};

export default SectionContainer;
