import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<>
			<Navbar />
			<main className="px-6 mt-6">
				<Sidebar />
				
			</main>
		</>
	);
}

export default App;
