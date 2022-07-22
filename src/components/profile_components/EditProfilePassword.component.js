import InputField from "../form_components/InputField.component";

const EditProfilePassword = () => {
	return (
		<div className="md:mx-5 lg:mx-12 max-w-[40rem] w-full">
			<div>
				<h1 className="text-3xl font-semibold">Edit Password</h1>
				<p className="text-sm max-w-[25rem] mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem corrupti sequi
					illo consequatur.
				</p>
			</div>

			<form action="">
				<div className="flex flex-col gap-8 mt-12 w-full">
					<InputField
						type="password"
						id="current-password"
						name="current-password"
						label="Current Password"
						placeholder="Current password"
						icon=""
					/>
					<InputField
						type="password"
						id="new-password"
						name="new-password"
						label="New Password"
						placeholder="New password"
						icon=""
					/>
					<InputField
						type="password"
						id="confirm-password"
						name="confirm-password"
						label="Confirm Password"
						placeholder="Confirm password"
						icon=""
					/>
				</div>
				<div className="mt-14 flex gap-5 pointer-events-none opacity-60">
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
