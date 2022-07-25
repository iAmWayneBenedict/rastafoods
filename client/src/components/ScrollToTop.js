import { useRef } from "react";
const ScrollToTop = ({ hasScrolled }) => {
	// event handler
	// back to top function
	const backToTop = (event) => {
		window.scrollTo(0, 0);
	};

	const backToTopBtn = useRef();

	const showBtn = () => {
		// return if null
		if (!backToTopBtn.current) return;

		backToTopBtn.current.classList.add("right-[5%]");
		backToTopBtn.current.classList.remove("right-[-50%]");
	};
	const hideBtn = () => {
		// return if null
		if (!backToTopBtn.current) return;

		backToTopBtn.current.classList.remove("right-[5%]");
		backToTopBtn.current.classList.add("right-[-50%]");
	};

	// if scrolled in specific range then show the button else hide
	if (hasScrolled) {
		showBtn();
	} else {
		hideBtn();
	}

	return (
		<div
			onClick={backToTop}
			ref={backToTopBtn}
			className="scroll-on-top-btn cursor-pointer z-10 fixed bottom-[3rem] right-[-50%] bg-primary w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out"
		>
			<i className="bi bi-arrow-up-short text-white text-2xl"></i>
		</div>
	);
};

export default ScrollToTop;
