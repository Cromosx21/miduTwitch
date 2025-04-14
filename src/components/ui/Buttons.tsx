function BtnPrimary({ text }: { text: string }) {
    return (
        <button type="button" className="flex flex-row items-center gap-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-400 cursor-pointer rounded-md px-3 py-1 font-semibold text-sm">
            {text}
        </button>
    );
}

function BtnSecondary({ text }: { text: string }) {
    return (
        <button type="button" className="flex flex-row items-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-gray-400 cursor-pointer rounded-md px-3 py-1 font-semibold text-sm">
            {text}
        </button>
    );
}

function Tag({ text }: { text: string }) {
    return (
		<button className="bg-neutral-700 text-xs text-neutral-400 font-semibold px-1.5 py-0.5 rounded-full w-fit">
            { text}
		</button>
	);
}

export { BtnPrimary, BtnSecondary, Tag };