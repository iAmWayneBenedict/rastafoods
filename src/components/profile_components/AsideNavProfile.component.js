import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AsideNavProfile = ({ currentParam }) => {
	const editProfile = useRef();
	const editPassword = useRef();
	const editEmail = useRef();
	useEffect(() => {
		if (currentParam === "edit-profile" && editProfile !== undefined) {
			editProfile.current.classList.remove("opacity-80");
			editProfile.current.classList.add("aside-link-active");
		}
		if (currentParam === "edit-password" && editPassword !== undefined) {
			editPassword.current.classList.remove("opacity-80");
			editPassword.current.classList.add("aside-link-active");
		}
		if (currentParam === "edit-email" && editEmail !== undefined) {
			editEmail.current.classList.remove("opacity-80");
			editEmail.current.classList.add("aside-link-active");
		}
	}, [currentParam]);

	return (
		<aside className="w-[20rem] flex ">
			<div className="flex flex-col gap-3 px-10">
				<Link
					to={"/my/store/edit-profile"}
					className="flex opacity-80 gap-3 items-center"
					ref={editProfile}
				>
					<img src="/img/edit-2.svg" className="h-3/4" alt="" />
					<span>Edit Profile</span>
				</Link>
				<Link
					to={"/my/store/edit-password"}
					className="flex opacity-80 gap-3 items-center"
					ref={editPassword}
				>
					<img src="/img/lock.svg" className="h-3/4" alt="" />
					<span>Password and Security</span>
				</Link>
				<Link
					to={"/my/store/edit-email"}
					className="flex gap-3 opacity-80 items-center"
					ref={editEmail}
				>
					<img src="/img/mail.svg" className="h-3/4" alt="" />
					<span>Change Email</span>
				</Link>
			</div>
		</aside>
	);
};

export default AsideNavProfile;
