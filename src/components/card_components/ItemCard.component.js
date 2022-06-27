import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating.component";
import AddOnSection from "../shop_components/AddOnSection.component";

const ItemCard = ({ data }) => {
	const [conHeight, setConHeight] = useState(0);
	const [itemCounter, setItemCounter] = useState(1);
	const heartBtn = (event) => {
		event.target.classList.toggle("bi-suit-heart");
		event.target.classList.toggle("bi-suit-heart-fill");
	};
	useEffect(() => {
		if (itemCounter < 1) setItemCounter(1);
		if (itemCounter > 20) setItemCounter(20);
	}, [itemCounter]);
	const itemCard = useRef();
	useEffect(() => {
		setConHeight(itemCard.current.clientHeight - 120);
	}, []);
	window.onresize = () => {
		setConHeight(itemCard.current.clientHeight - 120);
	};

	return (
		<div
			ref={itemCard}
			className="fixed max-h-[95%] md:max-h-[90%] h-full bottom-0 left-[50%] translate-x-[-50%] z-50 cursor-auto w-full md:w-[50rem] p-3 py-10 md:p-10 pb-5 bg-white shadow-xl rounded-tl-2xl rounded-tr-2xl"
		>
			<div className="relative p-3 py-5 md:p-10 pb-0 h-full">
				<Link
					to={"/stores"}
					className="close-btn fixed top-7 md:top-10 right-5 md:right-10 cursor-pointer"
				>
					<i className="bi bi-x-lg md:text-xl"></i>
				</Link>
				<div className="con overflow-y-scroll px-2" style={{ height: conHeight + "px" }}>
					<div className="details">
						<div className="top w-full h-[7rem] md:h-[10rem] flex gap-3 md:gap-10">
							<div className="left h-full max-w-[7rem] md:max-w-[13rem] flex-1">
								<img
									src="/img/eggs-breakfast-avocado-1296x728-header.webp"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="right flex flex-1 flex-col py-5 justify-between h-full">
								<div className="top flex justify-between items-center mr-10">
									<div className="price">
										<h3 className="font-bold text-sm sm:text-2xl">₱105</h3>
									</div>
									<div className="heart">
										<i
											className="bi bi-suit-heart mt-1 text-primary text-base md:text-2xl cursor-pointer"
											onClick={heartBtn}
										></i>
									</div>
								</div>
								<div className="bot flex flex-col gap-2">
									<div className="name font-bold text-lg md:text-2xl">
										Vegetable Salad
									</div>
									<Rating size="w-3 md:w-4" />
								</div>
							</div>
						</div>
						<div className="bottom mt-10 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
							labore? Itaque earum, porro excepturi perspiciatis harum vitae, expedita
							quaerat possimus fugit aliquid eaque aliquam provident molestiae
							necessitatibus tempora ad voluptas!
						</div>
					</div>

					<form action="">
						<div className="add-ons">
							{Object.entries(data).map(([key, value]) => {
								return <AddOnSection data={value} key={key} />;
							})}
						</div>
						<div className="flex justify-between my-14">
							<div className="item-counter flex">
								<button
									type="button"
									className="w-8 h-8 bg-gray-300 rounded"
									onClick={() => setItemCounter(itemCounter - 1)}
								>
									<i className="bi bi-dash-lg"></i>
								</button>
								<span className="w-[3rem] text-center mx-3 font-bold text-lg">
									{itemCounter}
								</span>
								<button
									type="button"
									className="w-8 h-8 bg-primary text-white rounded"
									onClick={() => setItemCounter(itemCounter + 1)}
								>
									<i className="bi bi-plus-lg font-bold"></i>
								</button>
							</div>
							<div className="item-price">
								<span className="text-xs mr-5">Total</span>
								<span className="font-bold text-lg">₱150</span>
							</div>
						</div>
						<button
							type="submit"
							className="mb-10 font-semibold text-center w-full bg-primary text-white py-2 rounded-md"
						>
							Add to Cart
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
