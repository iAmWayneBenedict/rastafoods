const BannerContainer = ({ owner = false }) => {
	return (
		<div className="mt-20 flex flex-col">
			<div className="flex justify-end mb-5">
				{/*  */}
				{owner && (
					<button type="button">
						<p className="link-animator">Edit Banner</p>
					</button>
				)}
				{/*  */}
			</div>
			<div className="flex flex-col gap-1">
				<div className="banner-default">
					<img
						className="w-full h-full object-cover"
						src="/img/Default Background.svg"
						alt=""
					/>
				</div>
				<div className="banner-default">
					<img
						className="w-full h-full object-cover"
						src="/img/Default Background.svg"
						alt=""
					/>
				</div>
				<div className="banner-default">
					<img
						className="w-full h-full object-cover"
						src="/img/Default Background.svg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default BannerContainer;
