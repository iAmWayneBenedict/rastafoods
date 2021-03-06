const AddOnCheckbox = ({ data }) => {
	const { name, additionalPrice } = data;
	return (
		<div className="flex justify-between mt-2 ml-3">
			<div className="flex items-center">
				<label htmlFor="name1" className="order-2 text-sm md:text-base">
					{name}
				</label>
				<input
					className="order-1 mr-2 accent-primary"
					type="checkbox"
					name="name1"
					id="name1"
				/>
			</div>
			<span>+ ₱{additionalPrice}</span>
		</div>
	);
};

export default AddOnCheckbox;
