import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ListChannels from "./components/ListChannels";
import ListCategory from "./components/ListCategory";
import FormLogin from "./components/formLogin";
import { useState } from "react";

function App() {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<>
			<Navbar onClick={() => setShowLogin(!showLogin)} />
			<main className=" flex flex-row gap-6">
				<Sidebar />
				<div className="flex flex-col gap-6 py-3">
					<ListChannels />
					<ListChannels />
					<ListCategory />
					<ListChannels />
				</div>
				{showLogin && (
					<FormLogin onClick={() => setShowLogin(!showLogin)} />
				)}
			</main>
		</>
	);
}

export default App;
