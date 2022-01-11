import { Link } from "react-router-dom";

const NavBar = ({ hasScrolled }) => {
	// toggle hamburger
	const navBarBtn = (event) => {
		const button = document.querySelector("button");
		button.classList.toggle("rotate-90");
		button.children[0].classList.toggle("active");
		button.children[1].classList.toggle("opacity-0");
		button.children[2].classList.toggle("active");
		button.children[0].classList.toggle("active-line1");
		button.children[2].classList.toggle("active-line2");
	};

	// if scrolled to a specific range then set a shadow string that will be used dynamically in the nav bar
	const shadow = hasScrolled ? "shadow-md" : "";

	return (
		<nav
			className={`fixed top-0 ${shadow} left-0 w-full 2xl:px-[14rem] lg:px-[5rem] px-5 z-50 bg-white transition-all duration-300`}
		>
			<div className="flex justify-between items-center py-4">
				<button
					className="flex md:hidden w-[25px] h-[15px] flex-col justify-between transition-all duration-300 ease-in-out"
					onClick={navBarBtn}
				>
					<span className="line self-end right-line"></span>
					<span className="mid-line"></span>
					<span className="line left-line"></span>
				</button>
				<h1 className="font-bold text-primary md:text-2xl text-lg">
					RastaFoods
				</h1>
				<div className="center-element w-fit hidden md:flex">
					<Link
						to={"/"}
						className="px-2 lg:px-4 font-medium text-sm md:text-base text"
					>
						Home
					</Link>
					<Link
						to={"/"}
						className="px-2 lg:px-4 font-medium text-sm md:text-base"
					>
						Stores
					</Link>
					<Link
						to={"/"}
						className="px-2 lg:px-4 font-medium text-sm md:text-base"
					>
						Delivery
					</Link>
					<Link
						to={"/"}
						className="px-2 lg:px-4 font-medium text-sm md:text-base"
					>
						Contact
					</Link>
					<Link
						to={"/"}
						className="px-2 lg:px-4 font-medium text-sm md:text-base"
					>
						About
					</Link>
				</div>
				<div className="">
					<Link to={"/"}>
						<i className="bi bi-bag text-base md:text-lg"></i>
					</Link>
					<Link
						to={"/"}
						className="bg-primary text-white ml-5 md:ml-8 px-4 md:px-5 py-1.5 md:py-2 rounded-[.35rem] font-medium text-sm md:text-base"
					>
						Signin
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
