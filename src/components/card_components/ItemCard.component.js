import { Link } from "react-router-dom";
import Rating from "../rating/Rating.component";

const ItemCard = () => {
	return (
		<div
			className="fixed bottom-0 left-[50%] translate-x-[-50%] z-50 cursor-auto w-2/5 p-10 bg-white shadow-xl rounded-tl-2xl rounded-tr-2xl"
			onClick={(event) => console.log(event.target)}
		>
			<div className="relative p-10">
				<Link to={"/stores"} className="close-btn absolute top-0 right-0">
					X
				</Link>
				<div className="">
					<div className="details">
						<div className="top w-full h-[15rem] flex gap-10">
							<div className="left h-full flex-1">
								<img
									src="/img/eggs-breakfast-avocado-1296x728-header.webp"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="right flex flex-1 flex-col py-10 justify-between h-full">
								<div className="top flex justify-between items-center">
									<div className="price">
										<h3 className="font-bold text-sm sm:text-2xl">₱105</h3>
									</div>
									<div className="heart">
										<i className="bi bi-suit-heart mt-1 text-primary text-2xl"></i>
									</div>
								</div>
								<div className="bot flex flex-col gap-5">
									<div className="name font-bold text-3xl">Vegetable Salad</div>
									<Rating size="w-5" />
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
					<div className="add-ons"></div>
					<div className="item-counter"></div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
