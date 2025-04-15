import { CollapseIcon } from "./ui/Icons";
import { useState } from "react";
import SuggestedAccount from "./ui/SuggestedAccount";

export default function RecommendChannels() {
	function CalcViwers(Viwers: number) {
		const number = Viwers / 1000;
		return number.toFixed(1).concat("k");
    }
    
    const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<aside className="text-gray-100">
				<div className="flex flex-col">
					<div className={`flex flex-row items-center px-2.5 py-1.5 justify-between    `} >
						{isOpen && (
							<h2 className="text-sm uppercase font-semibold">
								Recommends Channels
							</h2>
						)}
						<CollapseIcon
							Styles={`size-6 rounded-xs text-gray-100 transition-all duration-300 ease-in-out h-full cursor-pointer hover:bg-neutral-700 p-0.5 rotate-${
								isOpen ? "0" : "180"
							}`}
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
					<div
						className={` overflow-hidden transition-all duration-300 ease-in-out ${
							!isOpen ? "w-13" : "w-full"
						}`}
					>
						<SuggestedAccount
							NameChannel="MiduDev"
							TitleVideo="Aprende a programar"
							TotalViwers={CalcViwers(2780)}
						/>
						<SuggestedAccount
							NameChannel="MiduDev"
							TitleVideo="Aprende a programar"
							TotalViwers={CalcViwers(2948)}
						/>
						<SuggestedAccount
							NameChannel="MiduDev"
							TitleVideo="Aprende a programar"
							TotalViwers={CalcViwers(1347)}
						/>
					</div>
				</div>
			</aside>
		</>
	);
}
