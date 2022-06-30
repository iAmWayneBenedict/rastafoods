const CartSection = () => {
	return (
		<div className="fixed bottom-0 right-[10%] w-[30rem] bg-white shadow-2xl rounded-lg flex flex-col p-12 z-50 sm:z-0">
			<h1 className="title">Your Cart</h1>
			<main>
				<h4>2 items</h4>
				<div className="border-y-2">w</div>
			</main>
			<div className="payment">
				<div className="subtotal"></div>
				<div className="delivery"></div>
				<div className="total"></div>
			</div>
			<button type="button" className="bg-primary">
				Place Order
			</button>
		</div>
	);
};

export default CartSection;
