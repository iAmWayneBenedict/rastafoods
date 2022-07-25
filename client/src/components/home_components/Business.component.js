import { Link } from "react-router-dom";

const Business = () => {
	return (
		<div className="flex md:items-center justify-between mb-40 mt-32 flex-col md:flex-row w-full">
			<div className="left pr-5 w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
				<h1 className="title text-4xl font-semibold">RastaFoods for Business</h1>
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
			<div className="right md:pl-5 order-1 w-full md:w-1/2 md:order-2">
				<img
					src="/img/nicolas-j-leclercq-KwenPL21-bY-unsplash 1.png"
					className="w-full h-full object-contain"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Business;
