import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import useWindowWidthSize from "../../custom_hooks/useWindowWidthSize";

const AsideNavProfile = ({ currentParam }) => {
	const editProfile = useRef();
	const editPassword = useRef();
	const editEmail = useRef();
	useEffect(() => {
		if (currentParam === "edit-profile" && editProfile !== undefined) {
			editProfile.current.classList.remove("opacity-80");
			editProfile.current.classList.add("aside-link-active");
			editProfile.current.children[1].classList.remove("font-normal");
		}
		if (currentParam === "edit-password" && editPassword !== undefined) {
			editPassword.current.classList.remove("opacity-80");
			editPassword.current.classList.add("aside-link-active");
			editPassword.current.children[1].classList.remove("font-normal");
		}
		if (currentParam === "edit-email" && editEmail !== undefined) {
			editEmail.current.classList.remove("opacity-80");
			editEmail.current.classList.add("aside-link-active");
			editEmail.current.children[1].classList.remove("font-normal");
		}
	}, [currentParam]);

	// const windowWidthSize = useWindowWidthSize();
	// useEffect(() => {
	// 	if (windowWidthSize < 768) {
	// 		editProfile.current.children[1].classList.add("link-animator");
	// 		editPassword.current.children[1].classList.add("link-animator");
	// 		editEmail.current.children[1].classList.add("link-animator");
	// 	} else {
	// 		editProfile.current.children[1].classList.remove("link-animator");
	// 		editPassword.current.children[1].classList.remove("link-animator");
	// 		editEmail.current.children[1].classList.remove("link-animator");
	// 	}
	// }, [currentParam, windowWidthSize]);
	return (
		<aside className="w-full md:w-[20rem] flex justify-center mb-10 md:mb-0">
			<div className="flex flex-row md:flex-col gap-3 sm:gap-10 md:gap-3 lg:px-10">
				<Link
					to={"/my/store/edit-profile"}
					className="flex opacity-80 gap-3 items-center"
					ref={editProfile}
				>
					<img src="/img/edit-2.svg" className="h-[1.15rem] hidden md:flex" alt="" />
					<span className="text-sm md:text-base font-normal">Edit Profile</span>
				</Link>
				<Link
					to={"/my/store/edit-password"}
					className="flex opacity-80 gap-3 items-center"
					ref={editPassword}
				>
					<img src="/img/lock.svg" className="h-[1.15rem] hidden md:flex" alt="" />
					<span className="text-sm md:text-base font-normal">Change Password</span>
				</Link>
				<Link
					to={"/my/store/edit-email"}
					className="flex gap-3 opacity-80 items-center"
					ref={editEmail}
				>
					<img src="/img/mail.svg" className="h-[1.15rem] hidden md:flex" alt="" />
					<span className="text-sm md:text-base font-normal">Change Email</span>
				</Link>
			</div>
		</aside>
	);
};

export default AsideNavProfile;
