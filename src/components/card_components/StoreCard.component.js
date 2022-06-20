import { Link } from "react-router-dom";

const StoreCard = () => {
	return (
		<div className="sm:max-w-[12rem] sm:min-w-[9.15rem] md:max-w-[15rem] md:min-w-[10rem] min-w-[9rem] max-w-[9.15rem] p-3 sm:p-5 rounded-lg border border-gray-300 min-h-[14.25rem]">
			<img
				src="/img/1200px-McDonald's_Golden_Arches.svg.png"
				alt=""
				className="w-12 sm:w-14 mt-2 mb-4 sm:mb-10"
			/>
			<h1 className="font-bold text-base md:text-lg">McDonalds</h1>
			<p className="text-xs md:text-sm mt-2 mb-3 sm:mb-5">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, magni!
			</p>
			<Link
				to={"/"}
				className="font-bold underline underline-offset-2 decoration-primary decoration-2 text-xs md:text-sm"
			>
				Visit Store
			</Link>
		</div>
	);
};

export default StoreCard;
