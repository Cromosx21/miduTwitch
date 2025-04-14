import CardChannel from "./ui/CardChannel";

export default function ListChannels(){
    return(
        <>
            <section className="text-gray-100 flex flex-col gap-2.5">
                <p className="text-lg font-semibold">
                    <span className="text-sky-500">Live Channels</span>{" "}
                    We think you'll like
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <CardChannel />
                    <CardChannel />
                    <CardChannel />  
                </div>
            </section>
        </>
    );
}