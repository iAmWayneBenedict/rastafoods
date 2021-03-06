import { Link } from "react-router-dom";

const CuisineCard = ({ data }) => {
	const { name, src } = data;

	return (
		<Link
			to={"/"}
			className="border border-gray-300 rounded-md flex items-center py-1 xl:py-2 px-3 pr-5 xl:px-5 gap-3 sm:gap-5 min-w-fit cursor-pointer"
		>
			<img src={src} alt="" className="h-[2.5rem] 2xl:h-[3rem]" />
			<span className="font-semibold">{name}</span>
		</Link>
	);
};

export default CuisineCard;
