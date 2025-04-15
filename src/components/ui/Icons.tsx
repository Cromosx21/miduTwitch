function CollapseIcon({ Styles, onClick }: { Styles: string, onClick: () => void }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
			onClick={onClick}
		>
			<rect
				x="19.333"
				y="5"
				width="2.33333"
				height="14"
				fill="CurrentColor"
			/>
			<path
				d="M6.8884 10.4445H16.9995V13.5556H6.8884V10.4445Z"
				fill="CurrentColor"
			/>
			<path
				d="M10.7773 8.11117L8.44396 5.77783L2.99951 12.0001L8.44396 18.2223L10.7773 15.8889L6.8884 12.0001L10.7773 8.11117Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function DownIcon({ Styles }: { Styles: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
		>
			<path
				d="M3 8.5L5.22727 6.5L12.5 13.5L19.7727 6.5L22 8.5L12.5 17.5L3 8.5Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function LeftIcon({ Styles }: { Styles: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
		>
			<path
				d="M16 2.5L18 4.72727L11 12L18 19.2727L16 21.5L7 12L16 2.5Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function MoreIcon({ Styles, onClick }: { Styles: string; onClick: () => void }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
			onClick={onClick}
		>
			<path
				d="M14.25 5.25C14.25 6.49264 13.2426 7.5 12 7.5C10.7574 7.5 9.75 6.49264 9.75 5.25C9.75 4.00736 10.7574 3 12 3C13.2426 3 14.25 4.00736 14.25 5.25Z"
				fill="CurrentColor"
			/>
			<path
				d="M14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12Z"
				fill="CurrentColor"
			/>
			<path
				d="M14.25 18.75C14.25 19.9926 13.2426 21 12 21C10.7574 21 9.75 19.9926 9.75 18.75C9.75 17.5074 10.7574 16.5 12 16.5C13.2426 16.5 14.25 17.5074 14.25 18.75Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function NotificationIcon({ Styles }: { Styles: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3 8.20825V16.8333C3 17.3333 3.375 18.3333 4.875 18.3333H18.75C19.5 18.3333 21 18.0333 21 16.8333V7.45825L16.5 10.8333L12 6.33325L7.125 10.8333L3 8.20825ZM5.25 11.5832V16.8332H18.75V11.5832L16.5 13.4582L12 9.33321L7.5 13.0832L5.25 11.5832Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function ProfileIcon({ Styles }: { Styles: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 15.3333C15.2133 15.3333 17.8182 12.7963 17.8182 9.66667C17.8182 6.53705 15.2133 4 12 4C8.78671 4 6.18182 6.53705 6.18182 9.66667C6.18182 12.7963 8.78671 15.3333 12 15.3333ZM12 13.2083C14.0083 13.2083 15.6364 11.6227 15.6364 9.66667C15.6364 7.71066 14.0083 6.125 12 6.125C9.99169 6.125 8.36364 7.71066 8.36364 9.66667C8.36364 11.6227 9.99169 13.2083 12 13.2083Z"
				fill="CurrentColor"
			/>
			<path
				d="M12 13.2083H10.5455V15.3333C10.5455 15.6875 9.44408 16.2088 7.68842 16.3958C4.36364 16.75 4 18.875 4 21H5.81818V19.9375C5.81818 19.2292 6.18182 18.1667 8.36364 18.1667C10.1816 18.1667 11.2727 17.4583 12 16.75V13.2083Z"
				fill="CurrentColor"
			/>
			<path
				d="M12 13.2083H13.4545V15.3333C13.4545 15.6875 14.5559 16.2088 16.3116 16.3958C19.6364 16.75 20 18.875 20 21H18.1818V19.9375C18.1818 19.2292 17.8182 18.1667 15.6364 18.1667C13.8184 18.1667 12.7273 17.4583 12 16.75V13.2083Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function RightIcon({ Styles }: { Styles: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
		>
			<path
				d="M9 2.5L7 4.72727L14 12L7 19.2727L9 21.5L18 12L9 2.5Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

function SearchIcon({ Styles }: { Styles: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${Styles}`}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M15.3055 16.9033C14.13 17.7643 12.6813 18.2724 11.1144 18.2724C7.18522 18.2724 4 15.0774 4 11.1362C4 7.19499 7.18522 4 11.1144 4C15.0436 4 18.2288 7.19499 18.2288 11.1362C18.2288 12.7133 17.7187 14.1709 16.8551 15.3522L19.9996 18.428L18.4713 20L15.3055 16.9033ZM16.0406 11.1362C16.0406 13.8647 13.8354 16.0767 11.1152 16.0767C8.39505 16.0767 6.1899 13.8647 6.1899 11.1362C6.1899 8.40767 8.39505 6.19575 11.1152 6.19575C13.8354 6.19575 16.0406 8.40767 16.0406 11.1362Z"
				fill="CurrentColor"
			/>
		</svg>
	);
}

export {
	CollapseIcon,
	DownIcon,
	LeftIcon,
	MoreIcon,
	NotificationIcon,
	RightIcon,
	SearchIcon,
	ProfileIcon,
};
