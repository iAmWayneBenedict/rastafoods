import axios from "axios";

const BASE_USER_API = "api/users";

const fetchUserByToken = async (token) => {
	try {
		return await axios.get(`${process.env.REACT_APP_BASE_URL}/${BASE_USER_API}/token/${token}`);
	} catch (err) {
		return err;
	}
};

const loginPostRequest = (data) => {
	try {
		return axios.post(`${process.env.REACT_APP_BASE_URL}/${BASE_USER_API}/login`, data);
	} catch (err) {
		return err;
	}
};

export { fetchUserByToken, loginPostRequest };
