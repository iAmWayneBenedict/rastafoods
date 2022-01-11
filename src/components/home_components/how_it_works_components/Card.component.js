const Card = ({ data }) => {
	const { icon, step, title, description } = data;
	return (
		<div className="max-w-[19rem] w-full flex flex-col m-5 group hover:bg-primary transition-all duration-100 ease-in cursor-default rounded-lg p-5">
			<i
				className={`${icon} text-primary text-5xl group-hover:text-white transition-all duration-100 ease-in`}
			></i>
			<span className="font-bold text-base text-slate-600 mt-7 group-hover:text-white transition-all duration-100 ease-in">
				Step {step}
			</span>
			<h1 className="font-bold text-2xl mt-2 group-hover:text-white transition-all duration-100 ease-in">
				{title}
			</h1>
			<p className="mt-5 group-hover:text-white transition-all duration-100 ease-in">
				{description}
			</p>
		</div>
	);
};

export default Card;
