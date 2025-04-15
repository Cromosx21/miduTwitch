import RecommendChannels from "./RecommendChannels";
import { useState } from "react";

export default function Sidebar() {
	const [openSidebar, setOpenSidebar] = useState(false);
	return (
		<>
			<div className={ `max-w-[260px] bg-neutral-900 ${openSidebar ? "w-full" : "w-fit"}`} >
				<RecommendChannels
					openSidebar={() => setOpenSidebar(!openSidebar)}
				/>
            </div>
		</>
	);
}
