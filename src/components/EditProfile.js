import { useEffect, useState } from "react";
import usePreloader from "../custom_hooks/usePreloader";
import Footer from "./Footer";
import Preloader from "./preloader_component/Preloader.component";
import AsideNavProfile from "./profile_components/AsideNavProfile.component";
import EditProfileEmail from "./profile_components/EditProfileEmail.component";
import EditProfilePassword from "./profile_components/EditProfilePassword.component";
import EditUserProfile from "./profile_components/EditUserProfile.component";

const EditProfile = () => {
	let preloaderValue = usePreloader();
	const [currentParam, setCurrentParam] = useState();
	const paramsArr = window.location.pathname.split("/");

	useEffect(() => {
		setCurrentParam(paramsArr[paramsArr.length - 1]);
	}, [paramsArr]);
	return (
		<>
			<Preloader loaderValue={preloaderValue} />
			{preloaderValue === 2 && (
				<div>
					<div className="md:mx-0 mt-28 flex 2xl:mx-40 mb-96 flex-col md:flex-row">
						{currentParam === "edit-profile" && (
							<>
								<AsideNavProfile currentParam={currentParam} />
								<EditUserProfile />
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
