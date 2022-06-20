import { Link } from "react-router-dom";

const Card = ({ data }) => {
	const { name, src } = data;
	return (
		<Link to={"/"}>
			<div className="w-44 h-44 md:w-[17rem] md:h-[15rem] rounded-xl p-5 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-[#ff25251a] m-2 md:m-5 cursor-pointer">
				<div className="img-con w-[55%] sm:w-2/3 md:w-auto">
					<img src={src} alt={name} />
				</div>
				<div className="txt-con">
					<h1 className="font-semibold text-lg sm:text-xl">{name}</h1>
				</div>
			</div>
		</Link>
	);
};

export default Card;
