import { useEffect, useRef, useState } from "react";
import usePreloader from "../custom_hooks/usePreloader";
import CartCard from "./card_components/CartCard.component";
import Footer from "./Footer";
import Preloader from "./preloader_component/Preloader.component";

const CartSection = () => {
	const deleteBtn = useRef();
	const [isEdit, setIsEdit] = useState(false);
	const [editData, setEditData] = useState([]);
	let hasSameEditData = false;
	const pull_data = (data) => {
		setEditData(
			editData.filter((value) => {
				if (value === data) {
					hasSameEditData = true;
					return false;
				}
				return value;
			})
		);
		if (hasSameEditData) {
			hasSameEditData = false;
			return 0;
		}
		setEditData((value) => [...value, data]);
	};
	const edit = () => {
		if (isEdit) setIsEdit(false);
		else setIsEdit(true);
	};
	useEffect(() => {
		if (deleteBtn.current === undefined || deleteBtn.current === null) return;
		if (!editData.length) {
			deleteBtn.current.classList.add("opacity-25");
			deleteBtn.current.setAttribute("disabled", true);
		} else {
			deleteBtn.current.classList.remove("opacity-25");
			deleteBtn.current.removeAttribute("disabled");
		}
	}, [editData, isEdit]);
	const deleteItems = (event) => {
		console.log(event.target.classList);
	};

	let loaderValue = usePreloader();
	return (
		<div>
			<Preloader loaderValue={loaderValue} />
			{loaderValue === 2 && (
				<div>
					<div className="flex flex-col md:flex-row mt-24 md:mt-32 gap-10 sm:gap-5 md:gap-5 lg:gap-10 items-stretch mx-2 sm:mx-3 md:mx-5 lg:mx-8 2xl:mx-24">
						<div className="left w-full md:w-[55%] lg:w-[65%]">
							<h1 className="title font-semibold text-xl xl:text-2xl mb-5">
								Your Cart
							</h1>
							<main>
								<div className="flex w-full justify-between mb-3">
									<h4 className="text-sm font-semibold my-2">2 items</h4>
									<div className="flex items-center">
										{isEdit && (
											<button
												ref={deleteBtn}
												type="button"
												className="bg-primary text-white px-3 mr-3 py-1 rounded-md font-semibold"
												onClick={deleteItems}
											>
												Delete
											</button>
										)}
										<button type="button" onClick={edit}>
											<p className="font-semibold link-animator w-fit">
												{isEdit ? "Cancel" : "Edit"}
											</p>
										</button>
									</div>
								</div>
								<div className="border-y border-gray-500 flex flex-col gap-2 py-5">
									<CartCard callback={pull_data} edit={isEdit} data={1} />
									<CartCard callback={pull_data} edit={isEdit} data={2} />
									<CartCard callback={pull_data} edit={isEdit} data={3} />
									<CartCard callback={pull_data} edit={isEdit} data={4} />
								</div>
							</main>
						</div>
						<div className="right md:mt-20 w-full md:w-[45%] lg:w-[35%] flex flex-col justify-between">
							<div className="payment flex flex-col mt-3">
								<div className="subtotal flex justify-between my-1">
									<div className="title font-semibold text-xs 2xl:text-sm text-gray-600">
										Subtotal
									</div>
									<div className="price font-semibold text-sm 2xl:font-base">
										₱105
									</div>
								</div>
								<div className="delivery flex justify-between my-1">
									<div className="title font-semibold text-xs 2xl:text-sm text-gray-600">
										Delivery
									</div>
									<div className="price font-semibold text-sm 2xl:font-base">
										₱105
									</div>
								</div>
								<div className="total flex justify-between my-3">
									<div className="title text-sm 2xl:text-lg font-semibold">
										Total
									</div>
									<div className="price font-bold text-base 2xl:text-xl">
										₱105
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<button
									type="button"
									className="bg-primary mt-5 w-full py-2 rounded-md text-base lg:text-lg font-semibold text-white"
								>
									Place Order
								</button>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default CartSection;
