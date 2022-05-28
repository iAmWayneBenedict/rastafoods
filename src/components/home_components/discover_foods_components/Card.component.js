const Card = ({ data }) => {
	const { name, src } = data;

	return (
		<>
			<div className="w-56 h-52 md:w-[17rem] md:h-[15rem] rounded-xl p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-[#ff25251a] m-2 md:m-5 cursor-pointer">
				<div className="img-con w-2/3 md:w-auto">
					<img src={src} alt={name} />
				</div>
				<div className="txt-con">
					<h1 className="font-semibold text-xl">{name}</h1>
				</div>
			</div>
		</>
	);
};

export default Card;
