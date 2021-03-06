import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex flex-col sm:px-10 mb-10 mt-20">
			<div className="flex md:flex-row flex-col gap-10 justify-between">
				<div className="left max-w-[30rem]">
					<div className="footer-title mb-5">
						<h1 className="text-primary font-bold text-xl">RastaFoods</h1>
					</div>
					<div className="footer-description leading-6 text-sm md:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						temporibus repellat necessitatibus blanditiis culpa incidunt ipsa minus
						doloremque omnis at?
					</div>
					<div className="footer-socials flex gap-5 mt-5 bg">
						{[
							["bi bi-facebook", "/"],
							["bi bi-twitter", "/"],
							["bi bi-google", "/"],
							["bi bi-instagram", "/"],
						].map(([icon, link], itr) => {
							return (
								<Link
									to={link}
									className="bg-zinc-700 text-slate-50 px-4 py-2"
									key={itr}
								>
									<i className={icon}></i>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="right flex max-w-[55rem] w-full">
					<div className="left max-w-[20rem] w-full flex flex-col gap-3">
						<h1 className="font-bold text-zinc-700 md:text-lg">Products</h1>
						{[
							["Burger", "/"],
							["Drinks", "/"],
							["Fried Chicken", "/"],
							["Combo Meals", "/"],
						].map(([title, link]) => {
							return (
								<Link to={link} className="w-fit text-sm" key={title}>
									{title}
								</Link>
							);
						})}
					</div>
					<div className="right max-w-[20rem] w-full flex flex-col gap-3">
						<h1 className="font-bold text-gray-700 md:text-lg">Useful Links</h1>
						{[
							["Menu", "/"],
							["Delivery", "/"],
							["Contact", "/"],
							["About", "/"],
						].map(([title, link]) => {
							return (
								<Link to={link} className="w-fit text-sm" key={title}>
									{title}
								</Link>
							);
						})}
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
