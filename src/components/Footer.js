import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex flex-col mb-10 mt-20">
			<div className="flex flex-row gap-10 justify-between">
				<div className="left max-w-[30rem]">
					<div className="footer-title mb-5">
						<h1 className="text-red-500 font-bold text-xl">RastaFoods</h1>
					</div>
					<div className="footer-description leading-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						temporibus repellat necessitatibus blanditiis culpa incidunt ipsa minus
						doloremque omnis at?
					</div>
					<div className="footer-socials flex gap-5 mt-5 bg">
						<Link to={"/"} className=" bg-zinc-700 text-slate-50 px-5 py-3">
							<i className="facebook">o</i>
						</Link>
						<Link to={"/"} className=" bg-zinc-700 text-slate-50 px-5 py-3">
							<i className="facebook">o</i>
						</Link>
						<Link to={"/"} className=" bg-zinc-700 text-slate-50 px-5 py-3">
							<i className="facebook">o</i>
						</Link>
						<Link to={"/"} className=" bg-zinc-700 text-slate-50 px-5 py-3">
							<i className="facebook">o</i>
						</Link>
					</div>
				</div>
				<div className="right flex max-w-[55rem] w-full">
					<div className="left max-w-[20rem] w-full flex flex-col gap-3">
						<h1 className="font-bold text-zinc-700 text-lg">Products</h1>
						<Link to={"/"}>Burger</Link>
						<Link to={"/"}>Drinks</Link>
						<Link to={"/"}>Fried Chicken</Link>
						<Link to={"/"}>Combo Meals</Link>
					</div>
					<div className="right max-w-[20rem] w-full flex flex-col gap-3">
						<h1 className="font-bold text-gray-700 text-lg">Useful Links</h1>
						<Link to={"/"}>Menu</Link>
						<Link to={"/"}>Delivery</Link>
						<Link to={"/"}>Contact</Link>
						<Link to={"/"}>About</Link>
					</div>
				</div>
			</div>
			<div className="bottom flex self-center mt-24">
				<span>All Rights Reserved by RastaFoods 2021</span>
			</div>
		</div>
	);
};

export default Footer;
