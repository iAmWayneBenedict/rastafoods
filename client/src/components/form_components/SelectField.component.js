const SelectField = ({ id, name, label, placeholder, data }) => {
	return (
		<div className="relative flex w-full">
			<select
				name={name}
				id={id}
				className="input-field appearance-none w-full border border-slate-900 rounded-md text-sm md:text-base pl-5 pr-8 py-3 focus:border-red-500 transition-colors ease-in-out bg-white"
			>
				<option>{placeholder}</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</select>
			<label
				htmlFor={id}
				className="absolute text-sm bg-white px-3 py-0 -top-2 left-2 transition-colors ease-in-out"
			>
				{label}
			</label>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</div>
		</div>
	);
};

export default SelectField;
