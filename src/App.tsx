import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ListChannels from "./components/ListChannels";
import ListCategory from "./components/ListCategory";

function App() {
	return (
		<>
			<Navbar />
			<main className="px-6 mt-6 flex flex-row gap-6">
				<Sidebar />
				<div className="flex flex-col gap-6">
					<ListChannels />
					<ListChannels />
					<ListCategory />
					<ListChannels />
				</div>
			</main>
		</>
	);
}

export default App;
