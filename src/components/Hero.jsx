export default function Hero() {
    return (
        <section className="h-screen bg-gradient-to-r from-blue-900 to-red-700 flex flex-col items-center justify-center text-white text-center p-8">
            <span className="bg-gray-800 text-sm px-4 py-1 rounded-full">#1 AI Restaurant Operations Automation Platform</span>
            <h1 className="text-5xl font-bold mt-4">Automate third-party promotions in <span className="text-blue-300">minutes.</span></h1>
            <p className="mt-4 text-lg max-w-2xl">
                Automate your disputes, reviews, finances, promotions, and downtime across DoorDash, UberEats, Grubhub, and more.
            </p>
            <button className="mt-6 bg-blue-500 px-6 py-3 rounded text-white font-semibold">Book a Demo →</button>
        </section>
    );
};
