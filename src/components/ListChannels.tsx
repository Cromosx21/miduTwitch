import CardChannel from "./ui/CardChannel";
import { DownIcon } from "./ui/Icons";
import useWindowWidth from "../hooks/useWindowWidth";

export default function ListChannels(){
	const widthScreen = useWindowWidth();
    return (
		<>
			<section className="text-gray-100 flex flex-col gap-2.5">
				<p className="text-lg font-semibold">
					<span className="text-sky-500">Live Channels</span> We think
					you'll like
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
					<CardChannel
						NameThumbnail="Screen_1.png"
						TitleVideo="Aprende a programar"
						NameChannel="MiduDev"
						LinkCategory="Debugging"
						NameTag="Programming"
					/>
					<CardChannel
						NameThumbnail="Screen_1.png"
						TitleVideo="Aprende a programar"
						NameChannel="MiduDev"
						LinkCategory="Debugging"
						NameTag="Programming"
					/>
					<CardChannel
						NameThumbnail="Screen_1.png"
						TitleVideo="Aprende a programar"
						NameChannel="MiduDev"
						LinkCategory="Debugging"
						NameTag="Programming"
					/>
					{widthScreen >= 1536 && (
						<CardChannel
							NameThumbnail="Screen_1.png"
							TitleVideo="Aprende a programar"
							NameChannel="MiduDev"
							LinkCategory="Debugging"
							NameTag="Programming"
						/>
					)}

					{widthScreen >= 1280 && (
						<CardChannel
							NameThumbnail="Screen_1.png"
							TitleVideo="Aprende a programar"
							NameChannel="MiduDev"
							LinkCategory="Debugging"
							NameTag="Programming"
						/>
					)}

				</div>
				<div className="flex flex-row gap-6 items-center justify-center relative ">
					<button className="text-sm flex flex-row items-center gap-2 text-sky-500 cursor-pointer py-1 px-2 hover:bg-neutral-800 rounded-sm before:content[''] before:absolute before:w-full before:h-[1px] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-neutral-700 before:-z-10 bg-neutral-950">
						Show more
						<span>
							<DownIcon
								Styles={
									"size-4 text-gray-100 h-full text-sky-500"
								}
							/>
						</span>
					</button>
				</div>
			</section>
		</>
	);
}