import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ListChannels from "./components/ListChannels";
function App() {
	return (
		<>
			<Navbar />
			<main className="px-6 mt-6 flex flex-row gap-6">
				<Sidebar />
				<div className="flex flex-col gap-6">
					<ListChannels />
					<ListChannels />
					<ListChannels />
				</div>
			</main>
		</>
	);
}

export default App;
