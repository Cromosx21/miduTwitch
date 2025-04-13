import { Logo } from "./ui/ImageIcons";
import { MoreIcon, ProfileIcon, NotificationIcon } from "./ui/Icons";
import { BtnPrimary, BtnSecondary } from "./ui/Buttons";
import Search from "./ui/Search";

export default function Navbar() {
	return (
		<nav className="w-full py-1.5 px-6 bg-neutral-900 text-gray-100 flex flex-row justify-between items-center gap-8">
			<div className=" flex flex-row items-center gap-2">
				<Logo Styles={"size-7"} />
				<h1 className="text-sm font-bold uppercase">MiduTwitch</h1>
				<div className="px-1 py-2 cursor-pointer">
					<MoreIcon Styles={"size-7 text-gray-100 h-full"} />
				</div>
			</div>
			<div className="max-w-sm w-full min-w-56">
				<Search />
			</div>
			<div className="flex flex-row items-center gap-2">
                <div className="cursor-pointer relative">
                    <span className="absolute text-xs rounded-full bg-red-600 px-1.5 py-0.5 -top-2 -right-1">63</span>
                    <NotificationIcon Styles={"size-7 text-gray-100 h-full"} />
                </div>
                <BtnPrimary text={"Log In"} />
                <BtnSecondary text={"Sign Up"} />
                <span className="cursor-pointer">
                    <ProfileIcon Styles={"size-7 text-gray-100 h-full"} />
                </span>
			</div>
		</nav>
	);
}
