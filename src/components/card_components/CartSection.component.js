import CartCard from "./CartCard.component";

const CartSection = () => {
	const pull_data = (data) => {
		console.log(data);
	};
	return (
		<div className="flex mt-20 gap-10 items-stretch">
			<div className="left w-[65%]">
				<h1 className="title font-semibold text-lg xl:text-2xl mb-5">Your Cart</h1>
				<main>
					<h4 className="text-sm font-semibold my-2">2 items</h4>
					<div className="border-y border-gray-500 flex flex-col gap-2">
						<CartCard callback={pull_data} />
						<CartCard callback={pull_data} />
						<CartCard callback={pull_data} />
						<CartCard callback={pull_data} />
					</div>
				</main>
			</div>
			<div className="right mt-20 w-[35%] flex flex-col justify-between">
				<div className="payment flex flex-col mt-3">
					<div className="subtotal flex justify-between my-1">
						<div className="title font-semibold text-xs 2xl:text-sm text-gray-600">
							Subtotal
						</div>
						<div className="price font-semibold text-sm 2xl:font-base">₱105</div>
					</div>
					<div className="delivery flex justify-between my-1">
						<div className="title font-semibold text-xs 2xl:text-sm text-gray-600">
							Delivery
						</div>
						<div className="price font-semibold text-sm 2xl:font-base">₱105</div>
					</div>
					<div className="total flex justify-between my-3">
						<div className="title text-sm 2xl:text-lg font-semibold">Total</div>
						<div className="price font-bold text-base 2xl:text-xl">₱105</div>
					</div>
				</div>
				<div className="flex justify-center">
					<button
						type="button"
						className="bg-primary mt-5 w-full py-2 rounded-md font-semibold text-white"
					>
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartSection;
