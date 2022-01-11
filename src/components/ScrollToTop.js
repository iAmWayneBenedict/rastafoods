const ScrollToTop = ({ hasScrolled }) => {
	// event handler
	// back to top function
	const backToTop = (event) => {
		window.scrollTo(0, 0);
	};

	const showBtn = () => {
		const backToTopBtn = document.querySelector(".scroll-on-top-btn");

		// return if null
		if (!backToTopBtn) return;

		backToTopBtn.classList.add("right-[5%]");
		backToTopBtn.classList.remove("right-[-50%]");
	};
	const hideBtn = () => {
		const backToTopBtn = document.querySelector(".scroll-on-top-btn");

		// return if null
		if (!backToTopBtn) return;

		backToTopBtn.classList.remove("right-[5%]");
		backToTopBtn.classList.add("right-[-50%]");
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
			className="scroll-on-top-btn z-10 fixed bottom-[3rem] right-[-50%] bg-primary w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-700 ease-in-out"
		>
			<i className="bi bi-arrow-up-short text-white text-2xl"></i>
		</div>
	);
};

export default ScrollToTop;
