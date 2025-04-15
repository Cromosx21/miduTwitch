function BtnPrimary({
	text,
	type,
	estado,
	onClick,
}: {
	text: string;
	type: any;
	estado?: boolean;
	onClick?: () => void;
}) {
	return (
		<button
			type={type}
			className={`justify-center flex flex-row items-center gap-2 ${
				!estado
					? "bg-gray-700 hover:bg-gray-600 cursor-pointer active:bg-gray-400"
					: "bg-neutral-700 opacity-50 cursor-not-allowed"
			}    rounded-md px-3 py-1 font-semibold text-sm`}
			disabled={estado}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

function BtnSecondary({
	text,
	type,
	estado,
}: {
	text: string;
	type?: any;
	estado?: boolean;
}) {
	return (
		<button
			type={type}
			className="justify-center flex flex-row items-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-gray-400 cursor-pointer rounded-md px-3 py-1 font-semibold text-sm"
			disabled={estado}
		>
			{text}
		</button>
	);
}

function Tag({ text }: { text: string }) {
	return (
		<button className="bg-neutral-700 text-xs text-neutral-400 font-semibold px-1.5 py-0.5 rounded-full w-fit">
			{text}
		</button>
	);
}

export { BtnPrimary, BtnSecondary, Tag };
