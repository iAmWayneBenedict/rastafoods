import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
	const isMobile = useMediaQuery({
		query: "(min-width: 640px)",
	});

	return (
		<div className="flex flex-col-reverse sm:flex-row mt-20 sm:mt-10">
			<div className="left 2xl:mt-32 xl:mt-28 sm:mt-24 mt-10 max-w-[70%] sm:max-w-[50%] pr-10">
				<h1 className="2xl:text-5xl lg:text-4xl text-3xl font-bold">
					Provides the best
					<span className="text-primary"> food </span>
					for you
				</h1>
				<p className="mt-6 mb-20 text-sm md:text-base">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur
					iste nobis non.
				</p>

				<Link
					to={"/stores"}
					className="bg-primary rounded-md text-white px-5 py-3 text-sm font-bold"
				>
					Order Now
				</Link>

				<div className="mt-12 flex sm:w-fit w-full">
					<div className="flex flex-col m-3">
						<b className="text-center">5 million+</b>
						<p className="text-center text-sm">Customers</p>
					</div>
					<div className="flex flex-col m-3">
						<b className="text-center">8 million+</b>
						<p className="text-center text-sm">Deliveries</p>
					</div>
					<div className="flex flex-col m-3">
						<b className="text-center">2 million+</b>
						<p className="text-center text-sm">Ratings</p>
					</div>
				</div>
			</div>
			<div className="right max-w-full sm:max-w-[50%] mt-[5rem] top-0 right-0 w-full absolute sm:relative z-[-1]">
				<div className="absolute bg-white items-center top-1/4 py-3 px-5 shadow-lg rounded-md hidden md:flex z-10">
					<img src="/img/17.jpg" alt="" className="rounded-full w-[3rem] h-[3rem]" />
					<div className="ml-5">
						<h1 className="font-bold">Jannet Lim</h1>
						<p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<div className="absolute bg-white items-center right-0 bottom-1/3 py-3 px-5 shadow-lg rounded-md hidden md:flex z-10">
					<img src="/img/12.jpg" alt="" className="rounded-full w-[3rem] h-[3rem]" />
					<div className="ml-5">
						<h1 className="font-bold">Milim Jones</h1>
						<p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>
				<img
					src={
						isMobile
							? "/img/intro.svg"
							: "/img/brooke-lark-08bOYnH_r_E-unsplash_ccexpress.png"
					}
					alt=""
					className="banner-img object-fit max-h-[25rem] sm:max-h-[45rem] w-full rotate-180 sm:rotate-0"
				/>
			</div>
		</div>
	);
};

export default Banner;
