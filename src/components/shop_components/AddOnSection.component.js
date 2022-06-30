import AddOnCheckbox from "./AddOnCheckbox.component";

const AddOnSection = (values) => {
	const { title, required, data } = values.data;
	return (
		<div className=" mt-10">
			<div className="flex items-center">
				<h3 className="title mr-3 md:mr-5 font-bold text-sm md:text-base">{title}</h3>
				<span className="text-xs md:text-sm">({required ? "required" : "optional"})</span>
			</div>
			{Object.entries(data).map(([key, value]) => {
				return <AddOnCheckbox data={value} key={key} />;
			})}
		</div>
	);
};

export default AddOnSection;
