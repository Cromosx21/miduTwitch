import { SearchIcon } from "./Icons";

export default function Search() { 
    return (
		<>
			<form
				action=""
				className="max-w-sm flex flex-row items-center w-full"
			>
				<input
					type="text"
					name=""
					id=""
					placeholder="Buscar..."
					className=" border border-neutral-700 px-3 py-2.5 rounded-l-lg text-sm outline-none focus:border-sky-400 w-full"
				/>
				<button type="submit" className="bg-neutral-700 px-3 py-2 rounded-r-lg hover:bg-sky-500 cursor-pointer transition-colors duration-300 ease-in-out">
					<SearchIcon Styles={"size-7 text-gray-100 h-full"} />
				</button>
			</form>
		</>
	);
}