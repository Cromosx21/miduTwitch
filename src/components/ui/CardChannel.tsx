import { Tag } from "./Buttons";

export default function CardChannel({
	NameThumbnail,
	NameTag,
	TitleVideo,
	NameChannel,
	LinkCategory,
}: {
	NameThumbnail: string;
	NameTag: string;
	TitleVideo: string;
	NameChannel: string;
	LinkCategory: string;
}) {
	return (
		<>
			<figure className="max-w-sm flex flex-col gap-2.5 min-w-xs">
				<div className=" group">
					<img
						src={`../../src/assets/thumbnails_Channels/${NameThumbnail}`}
						alt="Imagen del canal"
						className="aspect-ratio-[384/210] block cursor-pointer group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition-all duration-300 ease-in-out group-hover:shadow-card rounded-xs"
					/>
				</div>
				<figcaption>
					<div className="flex flex-row gap-3 items-start">
						<img
							src="../../src/assets/profiles_Channels/Profile.png"
							alt="Foto del canal"
							className="cursor-pointer"
						/>
						<div className="text-sm flex flex-col gap-1">
							<h4 className="font-semibold line-clamp-1 cursor-pointer hover:text-sky-500">
								{TitleVideo}
							</h4>
							<span className="text-neutral-400 cursor-pointer hover:text-neutral-300 w-fit">
								{NameChannel}
							</span>
							<span className="text-neutral-400 cursor-pointer w-fit hover:text-sky-500">
								{LinkCategory}
							</span>
							<div className="flex flex-row gap-2">
								<Tag text={NameTag} />
							</div>
						</div>
					</div>
				</figcaption>
			</figure>
		</>
	);
}
