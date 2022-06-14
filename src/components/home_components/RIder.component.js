import { Link } from "react-router-dom";

const Rider = () => {
	return (
		<div className="flex md:items-center justify-between mt-56 mb-32 flex-col md:flex-row">
			<div className="left max-w-sm xl:max-w-xl order-2 mt-10 md:mt-0 pr-14">
				<h1 className="title text-4xl font-semibold">RastaFoods for Riders</h1>
				<p className="mt-4 mb-10 leading-7">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorum commodi
					minus tempora facilis earum, consectetur aliquid voluptatum fugit perferendis?
				</p>
				<Link
					to={"/"}
					className="bg-primary rounded-md text-white px-5 py-3 text-sm font-bold"
				>
					<span className="mr-2">Learn more</span>
					<i className="bi bi-arrow-right text-md"></i>
				</Link>
			</div>
			<div className="right order-1">
				<img src="/img/kai-pilger-tL92LY152Sk-unsplash 1.png" alt="" />
			</div>
		</div>
	);
};

export default Rider;
