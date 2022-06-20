import useScroll from "./custom_hooks/useScroll";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./Navbar";
import Footer from "./Footer";
import SectionContainer from "./section_components/SectionContainer";

const Stores = () => {
	const { scrolledOverHundred, scrolledOverTen } = useScroll();
	const data = "";
	return (
		<div>
			<NavBar hasScrolled={scrolledOverTen} />
			<ScrollToTop hasScrolled={scrolledOverHundred} />

			<div className="mx-10 mt-28">
				<div className="banner w-full h-[5rem] bg-gray-400 flex items-center justify-center mb-20">
					<p className="text-sm">Banner</p>
				</div>
				<div className="filter flex flex-col gap-10">
					<div className="inline-flex gap-3">
						<input
							type="email"
							id="email"
							className="border border-gray-500 text-gray-900 text-sm rounded-lg block w-[20rem] p-2.5 focus:outline-none"
							placeholder="Search"
						/>
						<button
							type="submit"
							className="text-white bg-primary focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
						>
							Submit
						</button>
					</div>
					<button className="filter flex gap-1 align-middle">
						<h6 className="font-semibold text-primary underline">Filter</h6>
						<i className="bi bi-chevron-down text-primary font-semibold"></i>
					</button>
				</div>
				<div className="shops">
					<SectionContainer data={data} />
				</div>
				<div className="cuisines"></div>
				<div className="foods"></div>
			</div>

			<Footer />
		</div>
	);
};

export default Stores;
