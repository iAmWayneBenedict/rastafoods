import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex flex-col sm:px-10 mb-10 mt-20">
			<div className="flex md:flex-row flex-col gap-10 justify-between">
				<div className="left max-w-[30rem]">
					<div className="footer-title mb-5">
						<h1 className="text-primary font-bold text-xl">RastaFoods</h1>
					</div>
					<div className="footer-description leading-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						temporibus repellat necessitatibus blanditiis culpa incidunt ipsa minus
						doloremque omnis at?
					</div>
					<div className="footer-socials flex gap-5 mt-5 bg">
						<Link to={"/"} className="bg-zinc-700 text-slate-50 px-4 py-2">
							<i className="bi bi-facebook"></i>
						</Link>
						<Link to={"/"} className="bg-zinc-700 text-slate-50 px-4 py-2">
							<i className="bi bi-twitter"></i>
						</Link>
						<Link to={"/"} className="bg-zinc-700 text-slate-50 px-4 py-2">
							<i className="bi bi-google"></i>
						</Link>
						<Link to={"/"} className="bg-zinc-700 text-slate-50 px-4 py-2">
							<i className="bi bi-instagram"></i>
						</Link>
					</div>
				</div>
				<div className="right flex max-w-[55rem] w-full">
					<div className="left max-w-[20rem] w-full flex flex-col gap-3">
						<h1 className="font-bold text-zinc-700 md:text-lg">Products</h1>
						<Link to={"/"} className="w-fit text-sm">
							Burger
						</Link>
						<Link to={"/"} className="w-fit text-sm">
							Drinks
						</Link>
						<Link to={"/"} className="w-fit text-sm">
							Fried Chicken
						</Link>
						<Link to={"/"} className="w-fit text-sm">
							Combo Meals
						</Link>
					</div>
					<div className="right max-w-[20rem] w-full flex flex-col gap-3">
						<h1 className="font-bold text-gray-700 md:text-lg">Useful Links</h1>
						<Link to={"/"} className="w-fit text-sm">
							Menu
						</Link>
						<Link to={"/"} className="w-fit text-sm">
							Delivery
						</Link>
						<Link to={"/"} className="w-fit text-sm">
							Contact
						</Link>
						<Link to={"/"} className="w-fit text-sm">
							About
						</Link>
					</div>
				</div>
			</div>
			<div className="bottom flex self-center mt-24">
				<span className="text-center text-xs sm:text-base">
					All Rights Reserved by RastaFoods 2021
				</span>
			</div>
		</div>
	);
};

export default Footer;
