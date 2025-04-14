export default function CardCategory({
	NameImage,
	NameCategory,
    TotalViewers,
	children,
}: {
	NameImage: string;
	NameCategory: string;
	TotalViewers: string;
		children?: React.ReactNode;
}) {
	return (
		<>
			<figure className="flex flex-col gap-2.5 max-w-[182px] min-w-44">
				<div className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[240px] before:bg-sky-500 transition-all duration-300 ease-in-out group before:-z-10 before:scale-[.991]">
					<img
						src={`../../src/assets/portada_categories/${NameImage}`}
						alt="Imagen de portada de categoría"
						className="aspect-ratio-[182/240] block w-full object-cover cursor-pointer group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-sm font-semibold text-gray-100 line-clamp-1 w-fit cursor-pointer hover:text-sky-500 transition-colors duration-300 ease-in-out">
						{NameCategory}
					</h3>
					<p className="text-sm text-neutral-400 w-fit cursor-pointer hover:text-neutral-300 transition-colors duration-300 ease-in-out">
						{TotalViewers}
					</p>
					{children}
				</div>
			</figure>
		</>
	);
}
