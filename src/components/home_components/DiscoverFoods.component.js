const DiscoverFoods = () => {
	return (
		<div className="current flex flex-col mt-[8rem] py-10 relative">
			<span className="absolute top-0 left-0 w-screen h-full bg-accent z-[-1]"></span>
			<div className="title flex flex-col items-center">
				<h1 className="font-semibold xl:text-4xl text-4xl leading-snug text-center mb-5">
					Discover Foods
				</h1>
				<p className="text-center max-w-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<div className="flex items-center md:justify-center mt-20 flex-col md:flex-row">
				{/* {Object.entries(cardData).map(([key, value]) => {
					return <Card data={value} key={key} />;
				})} */}
			</div>
		</div>
	);
};

export default DiscoverFoods;
