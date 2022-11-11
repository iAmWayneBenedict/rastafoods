import { useState, useEffect } from "react";

const CartCard = ({ checkedDelete, changeQuantity, edit, data, price }) => {
	// props.callback("asd");
	const [editClass, setEditClass] = useState("hidden");
	useEffect(() => {
		if (edit) setEditClass("block");
		else setEditClass("hidden");
	}, [edit]);
	const [itemCounter, setItemCounter] = useState(0);

	useEffect(() => {
		if (itemCounter < 1) setItemCounter(1);
		if (itemCounter > 20) setItemCounter(20);
		changeQuantity(itemCounter * price);
	}, [changeQuantity, itemCounter, price]);
	return (
		<div className="px-2 md:px-5 py-2 flex items-center">
			<div className={`mr-5 ${editClass}`}>
				<input
					type="checkbox"
					className="accent-primary cursor-pointer"
					value={data}
					onChange={() => checkedDelete(data)}
				/>
			</div>
			<div className="flex flex-1">
				<div className="min-w-[4rem] h-[4rem]">
					<img
						src="/img/eggs-breakfast-avocado-1296x728-header.webp"
						className="w-full h-full object-cover"
						alt=""
					/>
				</div>
				<div className="content flex flex-col w-full ml-3">
					<div className="top flex">
						<div className="name font-semibold text-lg">Vegetable Salad</div>
					</div>
					<div className="bot flex justify-between mt-2">
						<div className="flex gap-4 items-center">
							<div className="price font-semibold">₱{price}</div>
							<div className="item-quantity text-sm font-semibold">
								x{itemCounter}
							</div>
						</div>
						<div className="flex justify-between">
							<div className="item-counter flex items-center">
								<button
									type="button"
									className="w-6 h-6 bg-gray-200 rounded"
									onClick={() => setItemCounter(itemCounter - 1)}
								>
									<i className="bi bi-dash"></i>
								</button>
								<span className="w-[2rem] text-center font-bold text-sm">
									{itemCounter}
								</span>
								<button
									type="button"
									className="w-6 h-6 bg-primary text-white rounded"
									onClick={() => setItemCounter(itemCounter + 1)}
								>
									<i className="bi bi-plus font-bold"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
