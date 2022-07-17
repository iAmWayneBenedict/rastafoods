const BannerContainer = () => {
	return (
		<div className="mt-20 flex flex-col">
			<div className="flex justify-end mb-5">
				<button type="button">
					<p className="link-animator">Edit Banner</p>
				</button>
			</div>
			<div className="flex flex-col gap-1">
				<div className="banner-default">Banner</div>
				<div className="banner-default">Banner</div>
				<div className="banner-default">Banner</div>
			</div>
		</div>
	);
};

export default BannerContainer;
