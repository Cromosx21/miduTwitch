export default function CardChannel(){
    return(
        <>
            <figure className="max-w-96 flex flex-col gap-2.5">
                <img src="../../src/assets/thumbnails_Channels/Screen_1.png" alt="Imagen del canal" className="aspect-ratio-[382/210]" />
                <figcaption>
                    <div className="flex flex-row gap-3 items-start">
                        <img src="../../src/assets/profiles_Channels/Profile.png" alt="Foto del canal" />
                        <div className="text-sm flex flex-col gap-1">
                            <h4 className="font-semibold line-clamp-1">Chismes y no pala</h4>
                            <span className="text-neutral-400">Miduncy</span>
                            <span className="text-neutral-400">
                                Debugging Sessions
                            </span>
                            <div className="flex flex-row gap-2">
                                <button className="bg-neutral-700 text-xs text-neutral-400 font-semibold px-1.5 py-0.5 rounded-full">Español</button>
                                <button className="bg-neutral-700 text-xs text-neutral-400 font-semibold px-1.5 py-0.5 rounded-full">DropsActivados</button>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </>
    )
}