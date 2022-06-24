import { useState, useLayoutEffect } from "react";

// gets the width of the window
const useWindowWidthSize = () => {
	const [windowWidthSize, setWindowWidthSize] = useState(window.innerWidth);
	useLayoutEffect(() => {
		const updateSize = () => {
			setWindowWidthSize(window.innerWidth);
		};
		window.addEventListener("resize", updateSize);
		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return windowWidthSize;
};

export default useWindowWidthSize;
