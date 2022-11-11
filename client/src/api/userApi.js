import axios from "axios";

const BASE_USER_API = "api/users";

const fetchUserByToken = async () => {
	let tokenData = localStorage.getItem("user_token")
		? localStorage.getItem("user_token").replaceAll('"', "")
		: null;

	if (tokenData) {
		let response = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/${BASE_USER_API}/token/${tokenData}`
		);
		return response;
	}
	return {
		status: "No user",
	};
};

const loginPostRequest = (data) => {
	try {
		return axios
			.post(`${process.env.REACT_APP_BASE_URL}/${BASE_USER_API}/login`, data)
			.then((res) => res);
	} catch (err) {
		return err;
	}
};

export { fetchUserByToken, loginPostRequest };
