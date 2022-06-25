import { useRef } from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating.component";
import EventCard from "./EventCard.component";

const FoodCard = ({ event }) => {
	const heartBtn = useRef();
	const foodCard = useRef();
	const closeClass = event ? "closed" : "open";
	const heartClick = () => {
		// console.log();
		heartBtn.current.firstElementChild.classList.toggle("bi-suit-heart");
		heartBtn.current.firstElementChild.classList.toggle("bi-suit-heart-fill");
		heartBtn.current.firstElementChild.classList.toggle("text-primary");
	};
	const foodCardClicked = (event) => {
		if (event.target.tagName === "I") {
			event.preventDefault();
			return;
		}
	};
	return (
		<Link
			to={"/stores/McDonalds/1"}
			onClick={foodCardClicked}
			ref={foodCard}
			className={`${closeClass} food-card-container`}
		>
			<div className="top h-1/2 w-full relative">
				<div className="status">Unavailable</div>
				<img
					src="/img/eggs-breakfast-avocado-1296x728-header.webp"
					className="rounded-tl-lg rounded-tr-lg object-cover w-full h-full"
					alt=""
				/>
			</div>
			<EventCard data="20% off" card="FoodCard" />
			<div className="bot p-2">
				<div id="prev-price" className=" flex justify-between">
					<span className="special-deal">special deal</span>
					<span className="prev-price">₱123</span>
				</div>
				<div className="food-name-con">
					<h1 className="order-2 md:order-1 font-semibold text-sm sm:text-base">
						Vegetable Salad
					</h1>
					<h3 className="order-1 md:order-2 font-semibold text-sm sm:text-base">₱105</h3>
				</div>
				<div className="mt-1">
					<Rating />
				</div>
				<div className="des flex justify-between items-center mt-2">
					<div className="des-info">
						<span className="text-xs">Salad, Vegetables</span>
					</div>
					<div className="heart" ref={heartBtn} onClick={heartClick}>
						<i className="bi bi-suit-heart mt-1 text-black"></i>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default FoodCard;
