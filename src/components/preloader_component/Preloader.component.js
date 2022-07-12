import { useEffect, useState } from "react";

const Preloader = ({ loaderValue }) => {
	let loader = loaderValue;
	let [loaderFinishClassList, setLoaderFinishClassList] = useState("");
	useEffect(() => {
		if (loader === 2) {
			setLoaderFinishClassList("done-preloader");
			setTimeout(() => {
				setLoaderFinishClassList("");
			}, 150);
		}
	}, [loader]);

	return (
		<div
			className={`navbar-preloader-container ${
				loader === 1 ? "active-preloader" : ""
			} ${loaderFinishClassList} fixed w-0 h-[2px] lg:h-[3px] bg-red-600 left-0 bottom-0 top-11 2xl:top-16`}
		></div>
	);
};

export default Preloader;
