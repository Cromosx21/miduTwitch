import { Logo } from "./ui/ImageIcons";
import { MoreIcon, ProfileIcon, NotificationIcon } from "./ui/Icons";
import { BtnPrimary, BtnSecondary } from "./ui/Buttons";
import Search from "./ui/Search";
import { useState } from "react";

export default function Navbar({ onClick }: { onClick: () => void }) {
	const subMenu = [
		{
			General: [
				"Acerca de",
				"Anunciantes",
				"Blog",
				"Desarrolladores",
				"Descargar Aplicación",
				"Empleos",
				"Partners",
				"Prensa",
				"Turbo",
				"Twitch Gif Card",
			],
		},
		{
			Ayuda: [
				"Centro de ayuda",
				"Comunidad",
				"Contacto",
				"FAQ",
				"Política de privacidad",
				"Política de cookies",
				"Seguridad",
				"Términos",
				"Declaración de accesibilidad",
			],
		},
	];

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-10 w-full py-1.5 px-4 md:px-6 bg-neutral-900 text-gray-100 flex flex-row justify-between items-center gap-2 md:gap-6">
			<div className=" flex flex-row items-center gap-2">
				<Logo Styles={"size-7"} />
				<h1 className="text-sm font-bold uppercase">MiduTwitch</h1>
				<div className="px-1 py-2 relative">
					<MoreIcon
						Styles={"size-7 text-gray-100 h-full cursor-pointer"}
						onClick={() => setIsOpen(!isOpen)}
					/>
					{isOpen && (
						<div className="absolute top-12 left-0 bg-neutral-800 min-w-48 px-2 py-2 rounded-sm z-10">
							{subMenu.map((section, index) => {
								const [title, items] = Object.entries(
									section
								)[0] as [string, string[]];
								return (
									<>
										<div
											key={index}
											className="text-sm text-gray-100"
										>
											<h3 className="text-neutral-400 font-semibold uppercase py-2 px-1">
												{title}
											</h3>
											<ul>
												{items.map((item, i) => (
													<li
														key={i}
														className="text-neutral-200 cursor-pointer p-1 hover:bg-neutral-700 rounded-xs"
													>
														{item}
													</li>
												))}
											</ul>
										</div>
									</>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<div className="max-w-2xs lg:max-w-sm w-full hidden md:block min-w-48 lg:min-w-56">
				<Search />
			</div>
			<div className="flex flex-row items-center gap-2">
				<div className="cursor-pointer relative hidden md:block">
					<span className="absolute text-xs rounded-full bg-red-600 px-1.5 py-0.5 -top-2 -right-1">
						63
					</span>
					<NotificationIcon Styles={"size-7 text-gray-100 h-full"} />
				</div>
				<BtnPrimary
					type={"button"}
					text={"Log In"}
					estado={false}
					onClick={onClick}
				/>
				<BtnSecondary type={"button"} text={"Sign Up"} />
				<span className="cursor-pointer hidden md:block">
					<ProfileIcon Styles={"size-7 text-gray-100 h-full"} />
				</span>
			</div>
		</nav>
	);
}
