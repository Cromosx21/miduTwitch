export default function SuggestedAccount({ NameChannel, TitleVideo, TotalViwers }: { NameChannel: string; TitleVideo: string; TotalViwers: string }) {
    
    return (
		<>
			<div className="flex flex-row items-start justify-between gap-6 w-full px-2.5 py-1.5 cursor-pointer hover:bg-neutral-800 transition-colors duration-300 ease-in-out">
				<div className="flex flex-row items-center gap-3">
					<img
						src="../../src/assets/profiles_Channels/Profile.png"
						alt="Perfil del canal"
						className="max-w-8 aspect-square"
					/>
					<div className="text-sm">
                        <h3 className="font-semibold">{ NameChannel}</h3>
                        <p className="text-gray-400 line-clamp-1">{TitleVideo }</p>
					</div>
				</div>
				<div className="flex flex-row items-center gap-1">
					<span className="bg-red-600 w-2 h-2 p-1 rounded-full"></span>
                    <span className="text-sm">{TotalViwers }</span>
				</div>
			</div>
		</>
	);
}