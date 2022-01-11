import Card from "./how_it_works_components/Card.component";
import { useEffect } from "react";
const HowItWorks = () => {
	// changes the position of the hwo it works background
	const backgroundPosition = () => {
		const app = document.querySelector(".App");
		const current = document.querySelector(".current");

		// gets the styles of the app element
		let appData = app.currentStyle || window.getComputedStyle(app);

		// gets the combined margin and padding value of the app element
		const data =
			parseInt(appData.marginLeft.replace("px", "")) +
			parseInt(appData.paddingLeft.replace("px", ""));

		// removes the existing left class
		current.children[0].classList.remove("left-0");
		current.children[0].classList.remove("left-[-20px]");
		current.children[0].classList.remove("left-[-100px]");
		current.children[0].classList.remove("left-[-180px]");

		// adds the new left class with the computed data
		current.children[0].classList.add("left-[-" + data + "px]");
	};

	// if DOM is loaded then execute the position of the background
	useEffect(() => {
		backgroundPosition();
	}, []);
	window.onresize = () => {
		backgroundPosition();
	};

	const cardData = {
		step1: {
			icon: "bi bi-file-earmark-text",
			step: 1,
			title: "Choose Menu",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis veritatis eligendi.",
		},
		step2: {
			icon: "bi bi-wallet2",
			step: 2,
			title: "Checkout",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis veritatis eligendi.",
		},
		step3: {
			icon: "bi bi-truck",
			step: 3,
			title: "Wait for Delivery",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis veritatis eligendi.",
		},
	};

	return (
		<div className="current flex flex-col mt-[8rem] py-10 relative">
			<span className="absolute top-0 left-0 w-screen h-full bg-accent z-[-1]"></span>
			<div className="title flex flex-col items-center">
				<h1 className="font-bold xl:text-5xl text-4xl leading-snug text-center mb-5">
					How it works
				</h1>
				<p className="text-center max-w-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quis numquam in placeat ipsum saepe odio?
				</p>
			</div>
			<div className="flex items-center md:justify-center mt-20 flex-col md:flex-row">
				{Object.entries(cardData).map(([key, value]) => {
					return <Card data={value} key={key} />;
				})}
			</div>
		</div>
	);
};

export default HowItWorks;
