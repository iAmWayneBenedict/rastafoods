import CartCard from "./CartCard.component";

const CartSection = () => {
	return (
		<div className="fixed bottom-0 right-[10%] lg:w-[20rem] xl:w-[23rem] 2xl:w-[28rem] bg-white shadow-2xl rounded-lg flex flex-col lg:p-6 xl:p-12 z-50 sm:z-0">
			<div className="relative">
				<h1 className="title font-semibold text-lg xl:text-xl mb-5">Your Cart</h1>
				<button
					type="button"
					className="close-btn absolute top-0 xl:top-[-5%] right-0 cursor-pointer"
				>
					<i className="bi bi-chevron-down"></i>
				</button>
				<main>
					<h4 className="text-sm font-semibold my-2">2 items</h4>
					<div className="border-y border-gray-500">
						<CartCard />
					</div>
				</main>
				<div className="payment flex flex-col">
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
