import { Link } from "react-router-dom";
import InputField from "./form_components/InputField.component";

const Login = () => {
	return (
		<div className="md:mx-10 mt-24 md:mt-32 lg:mt-40 mb-80 flex justify-center items-center">
			<div className="login-con w-[30rem] flex flex-col">
				<div className="title text-primary font-bold text-lg">RastaFoods</div>
				<div className="error my-10 text-sm font-semibold py-2 text-center rounded-md">
					Incorrect email or password
				</div>
				<form action="" className="w-full flex">
					<div className="relative flex flex-col w-full">
						<div className="flex flex-col gap-10">
							<InputField
								type="text"
								id="email"
								name="email"
								label="Email"
								placeholder="example@gmail.com"
								icon="bi bi-envelope"
							/>

							<InputField
								type="password"
								id="password"
								name="password"
								label="Password"
								placeholder="●●●●●●●●●●"
								icon="bi bi-lock"
							/>
						</div>
						<div className="flex justify-between mt-2">
							<Link to={"/"} className="text-gray-800 text-sm">
								Forgot Password
							</Link>
							<div>
								<input
									type="checkbox"
									name="show-password"
									id="show-password"
									className="accent-primary select-none"
								/>
								<label htmlFor="show-password" className="text-sm ml-2">
									Show Password
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="mt-10 bg-primary text-white text-base font-semibold py-3 rounded-md"
						>
							Sign in
						</button>
						{/* test */}
						<span className="text-sm text-center mt-3">
							Don't have an account?{" "}
							<Link to={"/"} className="text-primary font-medium">
								Sign up
							</Link>
						</span>
						<span className="text-sm text-center my-10 text-slate-700 relative after:absolute before:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1/3 after:h-[1px] after:bg-slate-400 before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1/3 before:h-[1px] before:bg-slate-400">
							or Sign in with
						</span>
						<div className="flex justify-evenly">
							<button className="w-[2rem] sm:w-[3rem] rounded-md">
								<img
									src="/img/search.png"
									className="w-full h-full object-contain"
									alt=""
								/>
							</button>
							<button className="w-[2rem] sm:w-[3rem] rounded-md">
								<img
									src="/img/facebook.png"
									className="w-full h-full object-contain"
									alt=""
								/>
							</button>
							<button className="w-[2rem] sm:w-[3rem] rounded-md">
								<img
									src="/img/twitter.png"
									className="w-full h-full object-contain"
									alt=""
								/>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
