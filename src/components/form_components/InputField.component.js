const InputField = ({ type, id, name, placeholder, label, icon }) => {
	return (
		<div className="relative flex">
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				className="input-field w-full border border-slate-900 rounded-md text-sm md:text-base pl-5 pr-12 py-3 focus:border-red-500 transition-colors ease-in-out"
			/>
			<label
				htmlFor={id}
				className="absolute text-sm bg-white px-3 py-0 -top-2 left-2 transition-colors ease-in-out"
			>
				{label}
			</label>
			<span className="absolute top-1/2 -translate-y-1/2 right-4">
				<i className={`${icon} text-slate-400`}></i>
			</span>
		</div>
	);
};

export default InputField;
