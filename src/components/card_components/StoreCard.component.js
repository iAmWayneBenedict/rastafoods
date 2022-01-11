import { Link } from "react-router-dom";

const StoreCard = () => {
	return (
		<div className="max-w-[17rem] min-w-[10rem] sm:min-w-[15rem] p-5 rounded-lg border border-gray-300 mx-2">
			<img
				src="/img/1200px-McDonald's_Golden_Arches.svg.png"
				alt=""
				className="w-14 mt-2 mb-10"
			/>
			<h1 className="font-bold text-xl">McDonalds</h1>
			<p className="text-xs sm:text-sm mt-2 mb-5">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Architecto, magni!
			</p>
			<Link
				to={"/"}
				className="font-bold underline underline-offset-2 decoration-primary decoration-2"
			>
				Visit Store
			</Link>
		</div>
	);
};

export default StoreCard;
