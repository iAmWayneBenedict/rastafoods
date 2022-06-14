const GetInTouch = () => {
	return (
		<div className="flex py-28 justify-between gap-10 flex-col md:flex-row items-center">
			<div className="left w-full md:w-1/2 sm:w-3/4 flex flex-col">
				<div className="section-title mb-8">
					<h1 className="font-semibold text-4xl">Get In Touch</h1>
				</div>
				<div className="section-description mb-10">
					<p className="leading-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores,
						cumque cupiditate suscipit officiis veniam doloremque necessitatibus quas.
						Doloremque maiores temporibus tempore veritatis commodi.
					</p>
				</div>
				<div className="contacts flex flex-col ml-10 gap-5">
					<span className="flex">
						<i className="icon text-primary">o</i>
						<span className="ml-8">example@example.com</span>
					</span>
					<span className="flex">
						<i className="icon text-primary">o</i>
						<span className="ml-8">+63 912 3456 789</span>
					</span>
					<span className="flex">
						<i className="icon text-primary">o</i>
						<span className="ml-8">Magallano Highway, San Francisco, Philippines</span>
					</span>
				</div>
			</div>
			<div className="right w-full md:w-1/2 sm:w-3/4 rounded-xl shadow-lg">
				<div className="say-something-con m-12">
					<div className="title mb-10">
						<h1 className="font-semibold text-3xl">Say Something</h1>
					</div>
					<div className="contact-form">
						<form action="" className="flex flex-col gap-7">
							<input
								type="text"
								className="border-2 border-red-300 py-2 px-5 outline-none rounded-lg font-semibold"
								placeholder="Your Name"
							/>
							<input
								type="email"
								className="border-2 border-red-300 py-2 px-5 outline-none rounded-lg font-semibold"
								placeholder="Your Email"
							/>
							<textarea
								name=""
								id=""
								rows="7"
								className="border-2 border-red-300 py-2 px-5 outline-none rounded-lg font-semibold"
								placeholder="Your Message"
							></textarea>
							<button
								type="submit"
								className="bg-primary rounded-lg text-slate-50 font-semibold text-lg py-2"
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
