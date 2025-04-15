import { BtnPrimary, BtnSecondary } from "./ui/Buttons";

export default function FormLogin({ onClick }: { onClick: () => void }) {
	return (
		<>
			<div className="w-screen h-screen fixed top-0 left-0 bg-neutral-950/75 flex items-center justify-center z-10">
				<div className="min-w-3xs max-w-xl w-full bg-neutral-900 text-gray-100 p-6 flex flex-col gap-6 rounded-md">
					<div className="flex flex-row items-center justify-between">
						<h2 className="text-2xl font-semibold">
							Iniciar sesión en MiduTwitch
						</h2>
						<span
							className="cursor-pointer py-0.5 px-2 hover:bg-neutral-700 rounded-xs"
							onClick={onClick}
						>
							X
						</span>
					</div>
					<form action="" className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label
								htmlFor="user"
								className="text-sm font-semibold text-neutral-200"
							>
								Usuario
							</label>
							<input
								type="text"
								name=""
								id="user"
								className="transition-all duration-300 ease-in-out border-4 border-neutral-900 rounded-sm px-3 py-1.5 text-sm focus:border-sky-500 focus:border-4 outline focus:outline-none"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="password"
								className="text-sm font-semibold text-neutral-200"
							>
								Contraseña
							</label>
							<input
								type="password"
								name=""
								id="password"
								className="transition-all duration-300 ease-in-out border-4 border-neutral-900 rounded-sm px-3 py-1 text-sm focus:border-sky-500 focus:border-4 outline focus:outline-none "
							/>
						</div>
						<a
							href="#"
							className="hover:text-sky-400 transition-colors duration-300 ease-in-out text-sm font-semibold"
						>
							¿Tienes problemas para iniciar sesión?
						</a>
						<div className="flex flex-col gap-3">
							<BtnPrimary
								type="submit"
								text={"Iniciar sesión"}
								estado={true}
								onClick={onClick}
							/>
							<BtnSecondary
								type={"button"}
								text={"¿No tienes una cuenta? Registrarse"}
								estado={false}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
