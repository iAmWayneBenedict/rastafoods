import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard.component";

const StoreCard = ({ event }) => {
	const [isClosed, setIsClosed] = useState(event);
	const closeClass = event ? "closed" : "open";
	const storeEvent = "hidden";

	const heartBtn = useRef();

	const favoriteClick = (event) => {
		// console.log();
		if (heartBtn.current === null) return;

		heartBtn.current.classList.toggle("bi-suit-heart");
		heartBtn.current.classList.toggle("bi-suit-heart-fill");
	};

	return (
		<div
			className={`${closeClass} sm:max-w-[12rem] md:min-w-[14rem] 2xl:max-w-[14rem] min-w-[9.15rem] w-[45%] lg:w-full p-3 md:p-5 rounded-lg border border-gray-300 min-h-[14.25rem] relative mb-5`}
		>
			{/* can implement storeEvent && element */}
			<EventCard data="20% off" />
			<img
				src="/img/1200px-McDonald's_Golden_Arches.svg.png"
				alt=""
				className="w-12 sm:w-14 mt-2 mb-2 sm:mb-4"
			/>
			<div
				className="heart w-8 h-8 rounded-full shadow flex items-center justify-center ml-auto cursor-pointer"
				onClick={favoriteClick}
			>
				<i className="bi bi-suit-heart mt-1 text-primary" ref={heartBtn}></i>
			</div>
			<h1 className="font-bold text-base md:text-lg">McDonalds</h1>
			<p className="text-xs md:text-sm mt-2 mb-3 sm:mb-5">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, magni!
			</p>
			<Link to={"/stores/store/"} className="card-link w-fit">
				<p className="link-animator w-fit">Visit Store</p>
			</Link>
		</div>
	);
};

export default StoreCard;
