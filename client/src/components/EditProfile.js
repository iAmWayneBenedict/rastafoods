import { useEffect, useState } from "react";
import usePreloader from "../custom_hooks/usePreloader";
import Footer from "./Footer";
import Preloader from "./preloader_component/Preloader.component";
import AsideNavProfile from "./profile_components/AsideNavProfile.component";
import EditProfileEmail from "./profile_components/EditProfileEmail.component";
import EditProfilePassword from "./profile_components/EditProfilePassword.component";
import EditUserProfile from "./profile_components/EditUserProfile.component";
import axios from "axios";

const BASE_URl = "http://localhost:8000/api/users";

const getCurrentUserRequest = async (action, identifier) => {
	return await axios.get(`${BASE_URl}${action}/${identifier}`);
};

const postRequest = async (data) => {
	return await axios.post("http://localhost:8000/api/users/login", data);
};

const EditProfile = () => {
	let preloaderValue = usePreloader();
	const [currentParam, setCurrentParam] = useState();
	const [userData, setUserData] = useState({});
	const paramsArr = window.location.pathname.split("/");
	useEffect(() => {
		setCurrentParam(paramsArr[paramsArr.length - 1]);
	}, [paramsArr]);

	useEffect(() => {
		let hasSessionUser = !!localStorage.getItem("user_token");
		const getUserInfo = async (hasSessionUser) => {
			if (hasSessionUser) {
				let response = await getCurrentUserRequest(
					"/token",
					localStorage.getItem("user_token")
				);
				setUserData(response.data);
			} else {
				console.log("No user");
			}
		};
		getUserInfo(hasSessionUser);
	}, []);
	return (
		<>
			<Preloader loaderValue={preloaderValue} />
			{preloaderValue === 2 && (
				<div>
					<div className="md:mx-10 mt-28 flex xl:mx-40 mb-96">
						{currentParam === "edit-profile" && (
							<>
								<AsideNavProfile currentParam={currentParam} />
								<EditUserProfile userData={userData} />
							</>
						)}

						{currentParam === "edit-password" && (
							<>
								<AsideNavProfile currentParam={currentParam} />
								<EditProfilePassword />
							</>
						)}

						{currentParam === "edit-email" && (
							<>
								<AsideNavProfile currentParam={currentParam} />
								<EditProfileEmail />
							</>
						)}
					</div>
					<Footer />
				</div>
			)}
		</>
	);
};

export default EditProfile;
