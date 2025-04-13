export default function CardChannels({ NameChannel, TitleVideo, TotalViwers }: { NameChannel: string; TitleVideo: string; TotalViwers: string }) {
    
    return (
		<>
			<div className="flex flex-row items-center justify-between gap-6 w-full px-2.5 py-1.5 cursor-pointer hover:bg-neutral-800 transition-colors duration-300 ease-in-out">
				<div className="flex flex-row items-center gap-3">
					<img
						src="../../src/assets/images_Channels/Profile.png"
						alt="Perfil del canal"
					/>
					<div className="text-sm">
                        <h3 className="font-semibold">{ NameChannel}</h3>
                        <p className="text-gray-400">{TitleVideo }</p>
					</div>
				</div>
				<div className="flex flex-row items-center gap-2">
					<span className="bg-red-600 w-3 h-3 p-1 rounded-full"></span>
                    <span className="">{TotalViwers }</span>
				</div>
			</div>
		</>
	);
}