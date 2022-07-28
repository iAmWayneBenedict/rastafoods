import InputField from "../form_components/InputField.component";
import SelectField from "../form_components/SelectField.component";
import { useEffect, useState } from "react";
import { regions, provinces, cities, barangays } from "select-philippines-address";
import axios from "axios";

const BASE_URl = "http://localhost:8000/api/users";

const getCurrentUserRequest = async (action, identifier) => {
	return await axios.get(`${BASE_URl}${action}/${identifier}`);
};

const getAddressRequest = async (url) => {
	return await axios.get(url);
};

const postRequest = async (data) => {
	return await axios.post("http://localhost:8000/api/users/login", data);
};

const getRegion = async () => {
	return await regions();
};

const getProvince = async (code) => {
	return await provinces(code);
};

const getCity = async (code) => {
	return await cities(code);
};

const getBarangay = async (code) => {
	return await barangays(code);
};

const EditUserProfile = ({ userData }) => {
	const [regions, setRegions] = useState();
	const [regionCode, setRegionCode] = useState("0");

	const [provinces, setProvinces] = useState();
	const [provinceCode, setProvinceCode] = useState("0");

	const [cities, setCities] = useState();
	const [cityCode, setCityCode] = useState("0");

	const [barangays, setBarangays] = useState();
	const [barangayCode, setBarangayCode] = useState("0");

	useEffect(() => {
		async function getRegion1() {
			setRegions(await getRegion());
		}
		getRegion1();
	}, []);

	useEffect(() => {
		const getProvinceByRegion = async (code) => {
			let responseProvinces = await getProvince(code);
			setProvinces(responseProvinces);
		};
		getProvinceByRegion(regionCode);
	}, [regionCode]);

	useEffect(() => {
		const getCityByProvince = async (code) => {
			let responseCities = await getCity(code);
			setCities(responseCities);
		};
		getCityByProvince(provinceCode);
	}, [provinceCode]);

	useEffect(() => {
		const getBarangayByProvince = async (code) => {
			let responseBarangays = await getBarangay(code);
			setBarangays(responseBarangays);
		};
		getBarangayByProvince(cityCode);
	}, [cityCode]);

	const callback = ([location, code]) => {
		if (location === "region") {
			setRegionCode(code);
		}
		if (location === "province") {
			setProvinceCode(code);
		}

		if (location === "city") {
			setCityCode(code);
		}
	};

	const submitUserProfile = (event) => {
		event.preventDefault();
		let formData = new FormData(event.target);
		console.log(Object.fromEntries(formData.entries()));
	};

	return (
		<div className="mx-12 max-w-[40rem] w-full">
			<div>
				<h1 className="text-3xl font-semibold">Edit Profile</h1>
				<p className="text-sm max-w-[25rem] mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem corrupti sequi
					illo consequatur.
				</p>
			</div>
			<div className="mt-10 flex items-center gap-5">
				<div className="w-20 h-20">
					<img
						className="w-full h-full object-cover"
						src="/img/sample-Profile.svg"
						alt=""
					/>
				</div>
				<div>
					<label htmlFor="change-profile" className="cursor-pointer">
						<p className="link-animator">Change Profile</p>
					</label>
					<input type="file" id="change-profile" hidden />
				</div>
			</div>
			<form onSubmit={submitUserProfile} action="">
				<div className="flex flex-col gap-8 mt-12 w-full">
					<div className="flex gap-3 w-full">
						<InputField
							type="text"
							id="firstName"
							name="firstName"
							label="First Name"
							icon=""
							value={userData.name.firstName}
						/>
						<InputField
							type="text"
							id="lastName"
							name="lastName"
							label="Last Name"
							icon=""
							value={userData.name.lastName}
						/>
					</div>
					<InputField
						type="text"
						id="username"
						name="username"
						label="Username"
						placeholder="@jollibee"
						icon=""
						value={userData.username}
					/>
					<InputField
						type="text"
						id="contact"
						name="contact"
						label="Contact"
						placeholder="8700"
						icon=""
					/>
					<SelectField
						id="region"
						name="region"
						label="Region"
						placeholder="-- Region --"
						data={regions}
						callback={callback}
					/>
					<div className="flex gap-3 w-full">
						<SelectField
							id="province"
							name="province"
							label="Province"
							placeholder="-- Province --"
							data={provinces}
							callback={callback}
						/>
						<SelectField
							id="city"
							name="city"
							label="City"
							placeholder="-- City --"
							data={cities}
							callback={callback}
						/>
					</div>
					<div className="flex gap-3 w-full">
						<SelectField
							id="barangay"
							name="barangay"
							label="Barangay"
							placeholder="-- Barangay --"
							data={barangays}
							callback={callback}
						/>
						<InputField
							type="text"
							id="street"
							name="street"
							label="Street"
							placeholder="Zone 4"
							icon=""
						/>
					</div>
				</div>
				<div className="mt-14 flex gap-5 opacity-60">
					<button className="">Cancel</button>
					<button className="bg-gray-400 text-white rounded-md font-semibold px-5 py-2">
						Done
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditUserProfile;
