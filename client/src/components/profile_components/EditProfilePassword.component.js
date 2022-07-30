import { useState, useRef } from "react";
import InputField from "../form_components/InputField.component";
import axios from "axios";

const BASE_URl = "http://localhost:8000/api/users";

const updateUserData = async (action, token, value) => {
	return await axios.put(`${BASE_URl}${action}/${token}/edit-password`, value);
};

const EditProfilePassword = () => {
	const [showPassword, setShowPassword] = useState("password");
	const errorHandler = useRef();
	const onSubmitHandler = async (event) => {
		event.preventDefault();

		let formData = new FormData(event.target);

		try {
			let result = await updateUserData(
				"/token",
				localStorage.getItem("user_token"),
				Object.fromEntries(formData.entries())
			);
			if (result.status === 200) {
				console.log(result);
				errorHandler.current.textContent = result.data.success;
				errorHandler.current.classList.remove("hidden");
				errorHandler.current.classList.remove("error");
				errorHandler.current.classList.add("success");
			}
		} catch (error) {
			if (error.response.status === 400) {
				errorHandler.current.textContent = error.response.data.error;
				errorHandler.current.classList.remove("hidden");
				errorHandler.current.classList.add("error");
				errorHandler.current.classList.remove("success");
			}
		}
	};

	const onChangeShowPassword = (event) => {
		if (event.target.checked) {
			setShowPassword("text");
		} else {
			setShowPassword("password");
		}
	};
	return (
		<div className="mx-12 max-w-[40rem] w-full">
			<div>
				<h1 className="text-3xl font-semibold">Edit Password</h1>
				<p className="text-sm max-w-[25rem] mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem corrupti sequi
					illo consequatur.
				</p>
			</div>

			<form action="" onSubmit={onSubmitHandler}>
				<div className="flex flex-col gap-8 mt-12 w-full">
					<div
						ref={errorHandler}
						className="error text-sm font-semibold py-2 text-center rounded-md hidden"
					>
						Incorrect email or password
					</div>
					<InputField
						type={showPassword}
						id="current-password"
						name="currentPassword"
						label="Current Password"
						placeholder="Current password"
						icon=""
					/>
					<InputField
						type={showPassword}
						id="new-password"
						name="newPassword"
						label="New Password"
						placeholder="New password"
						icon=""
					/>
					<InputField
						type={showPassword}
						id="confirm-password"
						name="confirmPassword"
						label="Confirm Password"
						placeholder="Confirm password"
						icon=""
					/>
				</div>
				<div className="mt-5">
					<input
						type="checkbox"
						name="show-password"
						id="show-password"
						className="accent-primary select-none"
						onChange={onChangeShowPassword}
					/>
					<label htmlFor="show-password" className="text-sm ml-2">
						Show Password
					</label>
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

export default EditProfilePassword;
