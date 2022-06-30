const CartCard = () => {
	return (
		<div className="flex px-5 py-2">
			<div className="min-w-[4rem] h-[4rem]">
				<img
					src="/img/eggs-breakfast-avocado-1296x728-header.webp"
					className="w-full h-full object-cover"
					alt=""
				/>
			</div>
			<div className="content flex flex-col w-full ml-3">
				<div className="top flex">
					<div className="name font-semibold">Vegetable Salad</div>
				</div>
				<div className="bot flex justify-between mt-2">
					<div className="price font-semibold">₱105</div>
					<div className="flex justify-between">
						<div className="item-counter flex items-center">
							<button
								type="button"
								className="w-6 h-6 bg-gray-300 rounded"
								// onClick={() => setItemCounter(itemCounter - 1)}
							>
								<i className="bi bi-dash"></i>
							</button>
							<span className="w-[2rem] text-center font-bold text-sm">
								{/* {itemCounter} */}1
							</span>
							<button
								type="button"
								className="w-6 h-6 bg-primary text-white rounded"
								// onClick={() => setItemCounter(itemCounter + 1)}
							>
								<i className="bi bi-plus font-bold"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
