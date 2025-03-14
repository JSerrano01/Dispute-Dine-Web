import LiveDemoForm from "../components/LiveDemoForm";
import Model3D from "../components/Model3D";

const Layout = ({ children }) => {
    return (
        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
};

const About = () => {
    return (
        <>
            {/* Sección con fondo degradado y modelo 3D */}
            <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-orange-600 to-black text-white text-center px-4">
                <div className="absolute inset-0">
                    <Model3D />
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl sm:text-6xl font-bold">Welcome to Dine</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        The future of restaurant technology. Voosh, a solution in the restaurant industry, was conceived with a vision to empower restaurant operators to unlock their full potential in the realm of 3rd party marketplaces.
                    </p>
                </div>
            </div>

            {/* Sección de historia y valores */}
            <div className="bg-white">
                <Layout>
                    <div className="py-16 space-y-6 text-center bg-[#FAFAFA] !w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between space-x-8">
                            <div className="lg:w-[50%] text-left space-x-8">
                                <h2 className="text-3xl font-bold">Our story</h2>
                                <p className="max-w-3xl text-xl text-gray-600">
                                    Starting as a virtual brand operator with 150+ restaurant partners, we faced a challenge - no unified platform for vital data from third-party marketplaces, hindering off-premise growth. This led to Voosh, <p className="text-black font-bold">democratizing tech for food operators.</p> Our robust Restaurant Marketplace Intelligence Platform enhances efficiency, customer experience, and third-party profits. <br />
                                    <br />
                                    Backed by top Silicon Valley funds, including Y Combinator, Voosh delivers impact. 1,000+ restaurants grew third-party sales 20%, saving hours weekly. Join our mission to revolutionize dining.
                                </p>
                                <button className="mt-4 px-6 py-2 bg-[#56AB92] text-white !rounded-lg">
                                    Learn More
                                </button>
                            </div>
                            <div className="lg:w-1/2 mt-8 lg:mt-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-6">
                                    <div className="p-4 bg-white shadow rounded-lg text-2xl font-medium"><p className="text-[#56AB92] font-bold text-3xl">1,000+</p> restaurant locations</div>
                                    <div className="p-4 bg-white shadow rounded-lg text-2xl font-medium"><p className="text-[#56AB92] font-bold text-3xl">$800k+</p>money recovered for restaurants</div>
                                    <div className="p-4 bg-white shadow rounded-lg text-2xl font-medium">Backed by <p className="text-[#56AB92] font-bold text-2xl"> Y Combinator</p></div>
                                    <div className="p-4 bg-white shadow rounded-lg text-2xl font-medium"><p className="text-[#56AB92] font-bold text-2xl">Unified platform</p> for 3rd party data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>

            {/* Nuestra visión y valores */}
            <div className="bg-white">
                <Layout>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
                        <div className="p-6 bg-white shadow-lg rounded-lg text-left">
                            <h3 className="text-xl font-semibold">OUR VISION</h3>
                            <p className="mt-2 text-gray-600">A future where restaurant operators effortlessly navigate 3rd-party marketplaces.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-left">
                            <h3 className="text-xl font-semibold">OUR VALUES</h3>
                            <p className="mt-2 text-gray-600">Customer-centricity, adaptability, and a team-focused approach.</p>
                        </div>
                    </div>
                </Layout>
            </div>

            {/* Nuestra solución */}
            <div className="bg-white">
                <Layout>
                    <div className="bg-blue-600 text-white py-16 px-6 rounded-xl text-center relative">
                        <h2 className="text-3xl font-bold">The Restaurant Marketplace Intelligence Platform</h2>
                        <p className="mt-4">Optimize operations across all major food delivery platforms.</p>
                        <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg">Know more →</button>
                    </div>
                </Layout>
            </div>

            {/* Sección "Why Voosh?" */}
            <div className="bg-white">
                <Layout>
                    <div className="py-16">
                        <h2 className="text-3xl font-bold text-center">Why Voosh?</h2>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-white p-4 shadow rounded-lg">Cost Saving</div>
                                <div className="bg-white p-4 shadow rounded-lg">Profit Maximization</div>
                                <div className="bg-white p-4 shadow rounded-lg">Efficiency</div>
                                <div className="bg-white p-4 shadow rounded-lg">Data-Driven Decisions</div>
                            </div>
                            <div>
                                <img src="/images/why-voosh.jpg" alt="Why Voosh?" className="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>

            {/* Sección con fondo negro */}
            <div className="bg-black py-20">
                <Layout>
                    <div className="max-w-7xl mx-auto">
                        <LiveDemoForm />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default About;