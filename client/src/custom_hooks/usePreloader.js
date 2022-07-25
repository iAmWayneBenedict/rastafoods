import { useState, useEffect } from "react";

const usePreloader = () => {
	let [isLoading, setIsLoading] = useState(0);
	useEffect(() => {
		function setLoadingValue(status) {
			setIsLoading(status);
		}
		setLoadingValue(1);

		setTimeout(() => {
			setLoadingValue(2);
		}, 1000);
	}, []);
	return isLoading;
};

export default usePreloader;
