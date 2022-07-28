import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import usePreloader from "../custom_hooks/usePreloader";
import BannerContainer from "./banner_components/BannerContainer.component";
import Footer from "./Footer";
import Preloader from "./preloader_component/Preloader.component";
import SectionComponent from "./section_components/SectionComponent.component";
import ItemCard from "./card_components/ItemCard.component";

const StoreProfile = () => {
	let loaderValue = usePreloader();
	const [itemPopUpStatus, setItemPopUpStatus] = useState(false);
	const [currentLocation, setCurrentLocation] = useState(false);
	const params = useParams();

	const { store, food } = params;
	const navigate = useNavigate();

	useEffect(() => {
		if (!/\d+/.test(food) && food !== undefined) {
			navigate(-1);
		}
	}, [food, navigate]);

	useEffect(() => {
		if (window.location.pathname.split("/")[1] === "my") {
			setCurrentLocation("/my");
		} else {
			setCurrentLocation("/stores/" + store);
		}
	}, []);
	useEffect(() => {
		if (params.hasOwnProperty("food")) {
			setItemPopUpStatus(true);
		} else {
			setItemPopUpStatus(false);
		}
	}, [params]);

	const addOnData = [
		{
			title: "Add On",
			required: false,
			data: [
				{ name: "Checkbox 1", additionalPrice: 150 },
				{ name: "Checkbox 2", additionalPrice: 150 },
				{ name: "Checkbox 3", additionalPrice: 150 },
			],
		},
		{
			title: "Additional Add On",
			required: false,
			data: [
				{ name: "Checkbox 1", additionalPrice: 150 },
				{ name: "Checkbox 2", additionalPrice: 150 },
				{ name: "Checkbox 3", additionalPrice: 150 },
			],
		},
		{
			title: "Free Add On",
			required: true,
			data: [
				{ name: "Checkbox 1", additionalPrice: 150 },
				{ name: "Checkbox 2", additionalPrice: 150 },
				{ name: "Checkbox 3", additionalPrice: 150 },
			],
		},
	];

	return (
		<div>
			<Preloader loaderValue={loaderValue} />
			{loaderValue === 2 && (
				<>
					<div className="md:mx-10 mt-20">
						<div className="">
							<div className="relative w-full h-[18rem]">
								<img
									className="w-full h-full object-cover"
									src="/img/Default Background.svg"
									alt=""
								/>
								<div className="profile-pic absolute top-[60%] left-1/2 -translate-x-1/2">
									<div className="w-[10rem] h-[10rem] rounded-full">
										<img
											className="w-full h-full object-cover"
											src="/img/sample-Profile.svg"
											alt=""
										/>
									</div>
								</div>
							</div>

							<div className="personal-info flex flex-col items-center mt-20">
								<Link to={"/"} className="text-primary font-semibold">
									@jhond
								</Link>
								<h1 className="text-2xl font-semibold">Jhon Doe</h1>
								<span className="mt-2">San Miguel, Nabua</span>
								<span>Call 8700</span>
								<Link to={"/"} className="mt-6">
									<p className="link-animator">jollibee@jollibee.com</p>
								</Link>
								<Link
									to={"/my/store/edit-profile"}
									className="border border-red-600 rounded-md py-2 px-4 mt-16 text-sm font-semibold"
								>
									Change Profile <i className="bi bi-arrow-right ml-2"></i>
								</Link>
							</div>

							<BannerContainer />

							<SectionComponent
								title={"Discover Interesting Cousines"}
								isCuisines={true}
								currentLocation={currentLocation}
							/>

							<SectionComponent
								title={"Discover New Foods"}
								isFoods={true}
								currentLocation={currentLocation}
							/>
						</div>
					</div>
					{itemPopUpStatus && (
						<ItemCard data={addOnData} currentLocation={currentLocation} />
					)}
					<Footer />
				</>
			)}
		</div>
	);
};

export default StoreProfile;
