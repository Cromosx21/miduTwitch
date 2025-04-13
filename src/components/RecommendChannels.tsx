import { CollapseIcon } from "./ui/Icons";
import CardChannels from "./ui/CardChannels";

export default function RecommendChannels() {

    function CalcViwers(Viwers: number) {
        const number = Viwers / 1000;
        return number.toFixed(1).concat("k");
    }

    return (
		<>
			<aside className="text-gray-100">
				<div className="flex flex-col">
					<div className="flex flex-row items-center justify-between px-2.5 py-1.5">
						<h2 className="text-sm uppercase font-semibold">
							Recommends Channels
						</h2>
						<CollapseIcon Styles={"size-7 text-gray-100 h-full"} />
					</div>
					<div className="w-full">
                        <CardChannels 
                            NameChannel="MiduDev"
                            TitleVideo="Aprende a programar"
                            TotalViwers={CalcViwers(2780)}
                        />
                        <CardChannels 
                            NameChannel="MiduDev"
                            TitleVideo="Aprende a programar"
                            TotalViwers={CalcViwers(2948)}
                        />
                        <CardChannels 
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