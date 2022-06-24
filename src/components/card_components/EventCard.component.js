const EventCard = ({ data, card }) => {
	let topClass = "";
	if (card === "FoodCard") {
		topClass = "top-5";
	} else {
		topClass = "top-10";
	}
	return (
		<div className={`event absolute ${topClass} right-0 min-w-[40%] max-w-[50%] p-1 px-2`}>
			<h3 className="text-white text-center font-semibold text-xs sm:text-sm">{data}</h3>
		</div>
	);
};

export default EventCard;
