import { useState, useLayoutEffect } from "react";
const useScroll = () => {
	const [scrolledOverHundred, setScrolledOverHundred] = useState(false);
	const [scrolledOverTen, setScrolledOverTen] = useState(false);
	const navScrollStatus = () => {
		let scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 100) {
			setScrolledOverHundred(true);
		} else {
			setScrolledOverHundred(false);
		}
		if (scrollTop > 50) {
			setScrolledOverTen(true);
		} else {
			setScrolledOverTen(false);
		}
	};
	useLayoutEffect(() => {
		navScrollStatus();
		window.addEventListener("scroll", navScrollStatus);
		return () => window.removeEventListener("scroll", navScrollStatus);
	}, []);
	return { scrolledOverHundred, scrolledOverTen };
};

export default useScroll;
