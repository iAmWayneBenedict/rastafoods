import { Link } from "react-router-dom";
import StoreCard from "../card_components/StoreCard.component";
const RowMenu = () => {
	return (
		<div className="mt-20 flex flex-col md:flex-row items-center md:items-start">
			<div className="max-w-[20rem] md:max-w-[15rem] flex flex-col items-center md:items-start mb-10 md:mb-0 pt-10">
				<h1 className="text-3xl font-semibold mb-5 text-center md:text-left">
					Choose from your Favorite Stores
				</h1>
				<Link
					to={"/"}
					className="text-primary text-sm font-semibold text-center md:text-left"
				>
					Learn more <i className="bi bi-arrow-right-short"></i>
				</Link>
			</div>
			<div className="flex md:ml-10 px-5 overflow-x-scroll w-full pb-5">
				<StoreCard />
				<StoreCard />
				<StoreCard />
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

export default RowMenu;
