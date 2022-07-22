import InputField from "../form_components/InputField.component";
import SelectField from "../form_components/SelectField.component";

const EditUserProfile = () => {
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
			<form action="">
				<div className="flex flex-col gap-8 mt-12 w-full">
					<div className="flex gap-3 w-full">
						<InputField
							type="text"
							id="name"
							name="name"
							label="Name"
							placeholder="Jollibee"
							icon=""
						/>
						<InputField
							type="text"
							id="username"
							name="username"
							label="Username"
							placeholder="@jollibee"
							icon=""
						/>
					</div>
					<InputField
						type="text"
						id="contact"
						name="contact"
						label="Contact"
						placeholder="8700"
						icon=""
					/>
					<div className="flex gap-3 w-full">
						<SelectField
							id="city"
							name="province"
							label="Province"
							placeholder="-- Province --"
						/>
						<SelectField id="city" name="city" label="City" placeholder="-- City --" />
					</div>
					<div className="flex gap-3 w-full">
						<SelectField
							id="barangay"
							name="barangay"
							label="Barangay"
							placeholder="-- Barangay --"
							data={[]}
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

export default EditUserProfile;
