import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const StoreCard = ({ event }) => {
	const [isClosed, setIsClosed] = useState(event);
	const closeClass = event ? "closed" : "open";

	const heartBtn = useRef();

	const favoriteClick = (event) => {
		// console.log();
		if (heartBtn.current === null) return;

		heartBtn.current.classList.toggle("bi-suit-heart");
		heartBtn.current.classList.toggle("bi-suit-heart-fill");
	};

	return (
		<div
			className={`${closeClass} sm:max-w-[12rem] sm:min-w-[9.15rem] md:max-w-[15rem] md:min-w-[13rem] min-w-[9rem] max-w-[9.15rem] w-full p-3 sm:p-5 rounded-lg border border-gray-300 min-h-[14.25rem] relative`}
		>
			<div className="event absolute top-10 right-0 min-w-[40%] max-w-[50%] p-1 px-2">
				<h3 className="text-white text-center font-semibold text-xs sm:text-sm">20% off</h3>
			</div>
			<div
				className="heart absolute top-24 right-5 w-8 h-8 rounded-full shadow flex items-center justify-center"
				onClick={favoriteClick}
			>
				<i className="bi bi-suit-heart mt-1 text-primary" ref={heartBtn}></i>
			</div>
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
				className="card-link font-bold underline underline-offset-2 decoration-primary decoration-2 text-xs md:text-sm"
			>
				Visit Store
			</Link>
		</div>
	);
};

export default StoreCard;
