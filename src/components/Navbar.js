import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NavBar = ({ hasScrolled }) => {
	const button = useRef();

	// toggle hamburger
	const navBarBtn = (event) => {
		button.current.classList.toggle("rotate-90");
		button.current.children[0].classList.toggle("active");
		button.current.children[1].classList.toggle("opacity-0");
		button.current.children[2].classList.toggle("active");
		button.current.children[0].classList.toggle("active-line1");
		button.current.children[2].classList.toggle("active-line2");
	};
	// if scrolled to a specific range then set a shadow string that will be used dynamically in the nav bar
	const shadow = hasScrolled ? "shadow-md" : "";
	return (
		<nav
			className={`fixed top-0 ${shadow} left-0 w-full bg-white transition-all duration-300 z-[100]`}
		>
			<div className="flex justify-between items-center 2xl:px-[14rem] lg:px-[5rem] px-5 py-2 2xl:py-4">
				<button
					ref={button}
					className="flex md:hidden w-[25px] h-[15px] flex-col justify-between transition-all duration-300 ease-in-out"
					onClick={navBarBtn}
				>
					<span className="line self-end right-line"></span>
					<span className="mid-line"></span>
					<span className="line left-line"></span>
				</button>
				<Link
					to={"/"}
					className="font-bold text-primary 2xl:text-2xl md:text-xl text-lg cursor-pointer"
				>
					RastaFoods
				</Link>
				<div className="center-element w-fit hidden md:flex">
					{[
						["Home", "/"],
						["Stores", "/stores"],
						["Delivery", "/"],
						["Contact", "/"],
						["About", "/"],
					].map(([title, link]) => {
						return (
							<Link
								to={link}
								className="px-2 lg:px-4 font-medium text-sm 2xl:text-base"
								key={title}
							>
								{title}
							</Link>
						);
					})}
				</div>
				<div className="">
					<Link to={"/cart"}>
						<i className="bi bi-bag text-base md:text-lg"></i>
					</Link>
					<Link
						to={"/login"}
						className="bg-primary text-white ml-5 md:ml-8 px-3 md:px-4 py-1 md:py-[.35rem] rounded-[.35rem] font-medium text-sm 2xl:text-base"
					>
						Sign in
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
