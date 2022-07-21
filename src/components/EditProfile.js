import { Link } from "react-router-dom";
import usePreloader from "../custom_hooks/usePreloader";
import Footer from "./Footer";
import Preloader from "./preloader_component/Preloader.component";

const EditProfile = () => {
	let preloaderValue = usePreloader();
	return (
		<>
			<Preloader loaderValue={preloaderValue} />
			{preloaderValue === 2 && (
				<div>
					<div className="md:mx-10 mt-28 flex xl:mx-40">
						<aside className="w-[20rem] flex justify-end">
							<div className="flex flex-col gap-3 px-10">
								<Link
									to={"/"}
									className="flex gap-3 aside-link-active items-center"
								>
									<img src="/img/edit-2.svg" className="h-3/4" alt="" />
									<span>Edit Profile</span>
								</Link>
								<Link to={"/"} className="flex gap-3 opacity-80 items-center">
									<img src="/img/lock.svg" className="h-3/4" alt="" />
									<span>Password and Security</span>
								</Link>
								<Link to={"/"} className="flex gap-3 opacity-80 items-center">
									<img src="/img/mail.svg" className="h-3/4" alt="" />
									<span>Change Email</span>
								</Link>
							</div>
						</aside>
						<div className="mx-12">
							<div>
								<h1 className="text-3xl font-semibold">Edit Profile</h1>
								<p className="text-sm max-w-[25rem] mt-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
									autem corrupti sequi illo consequatur.
								</p>
							</div>
							<div></div>
						</div>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
};

export default EditProfile;
