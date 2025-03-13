import StatsCard from "./StatsCard";
import FinanceChart from "./FinanceChart";
import disputeImage from "../assets/img/landingpage/image1.png"; // Importar la imagen si está en src/assets
import { ArrowUpRight } from "lucide-react"
import { ChatBubbleLeftEllipsisIcon, StarIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Dashboard = () => {

    const items = [
        { text: "DoorDash", color: "text-red-500" },
        { text: "Uber Eats", color: "text-green-500" },
        { text: "GrubHub", color: "text-yellow-500" },
        { text: "Google", color: "text-blue-500" },
        { text: "ezCater", color: "text-green-400" },
        { text: "Yelp", color: "text-red-600" },
    ];

    // Agrupar elementos de dos en dos
    const groupedItems = [];
    for (let i = 0; i < items.length; i += 3) {
        groupedItems.push(items.slice(i, i + 3));
    }

    return (
        <div className="relative mt-[-7%] z-1 flex flex-wrap justify-center gap-6 px-8 mb-16 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {/* Card con Imagen */}
                <StatsCard
                    title={
                        <div className="flex items-center gap-2">
                            <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-white" />
                            <span>DISPUTE MANAGER</span>
                        </div>
                    }
                >
                    {/* Dispute Won Amount */}
                    <div className="bg-white p-3 rounded-lg shadow flex flex-col w-70">
                        <p className="text-black font-semibold text-sm mb-1">Dispute won amount</p>
                        <div className="flex items-center">
                            <p className="text-3xl font-normal text-gray-600">
                                $<CountUp end={84000} duration={4} separator="," />
                            </p>
                            <div className="flex items-center gap-1 text-green-600 font-medium text-xs ml-2">
                                <ArrowUpRight className="w-3 h-3" />
                                <span>10.04%</span>
                                <span className="text-gray-500">this week</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-0">Disputed orders: <CountUp end={8700} duration={4} separator="," /></p>
                    </div>

                    {/* Pending Dispute */}
                    <div className="bg-white p-3 rounded-lg shadow flex flex-col w-70 mt-3">
                        <p className="text-black font-semibold text-sm mb-1">Pending dispute</p>
                        <div className="flex items-center">
                            <p className="text-3xl font-normal text-gray-600">
                                <CountUp end={5600} duration={4} separator="," />
                            </p>
                            <div className="flex items-center gap-1 text-green-600 font-medium text-xs ml-auto">
                                <span className="bg-[#78C6A3] border-1 border-[#78C6A3] !text-[#FAFAFA] px-3 py-2 rounded-3xl font-normal text-sm transition-colors duration-300 hover:bg-[#56AB92] hover:!text-white" style={{ color: '#78C6A3' }}>Dispute</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-0">Disputed amount: $<CountUp end={51280} duration={4} separator="," /></p>
                    </div>
                </StatsCard>



                <div className="flex flex-col gap-6">
                    {/* Card con Texto */}
                    <StatsCard
                        title={
                            <div className="flex items-center gap-2">
                                <StarIcon className="w-5 h-5 text-white" />
                                <span>REVIEWS AND RATINGS</span>
                            </div>
                        }
                    >
                        <div className="bg-white p-4 rounded-lg shadow flex flex-col w-70">
                            <p className="text-black font-semibold text-sm mb-1">Unanswered reviews</p>
                            <div className="flex items-center justify-between">
                                <p className="text-4xl font-normal text-gray-600">
                                    <CountUp end={6433} duration={4} separator="," />
                                </p>
                                <span
                                    className="bg-[#78C6A3] border border-[#78C6A3] !text-[#FAFAFA] px-2 py-2 rounded-3xl font-normal text-sm transition-colors duration-300 hover:bg-[#56AB92] hover:text-white"
                                >
                                    Auto Reply
                                </span>
                            </div>
                        </div>
                    </StatsCard>

                    {/* Card con Etiquetas de Texto */}
                    <StatsCard title={
                        <div className="flex items-center gap-2"><StarIcon className="w-5 h-5 text-gray-500" /><span className="text-gray-500 font-semibold">MARKETPLACE MANAGEMENT</span></div>}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="bg-white p-4 rounded-lg shadow flex flex-col w-70"
                        >
                            {/* Contenedor GRID */}
                            <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium mt-2">
                                {groupedItems.map((group, groupIndex) => (
                                    <motion.div
                                        key={groupIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: groupIndex * 0.3 }} // Delay por grupo
                                        viewport={{ once: false, amount: 0.2 }}
                                        className="flex justify-center col-span-3"
                                    >
                                        {group.map((item) => (
                                            <span key={item.text} className={item.color + " w-1/3 text-center"}>
                                                {item.text}
                                            </span>
                                        ))}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </StatsCard>
                </div>


                {/* Card con Gráfico */}
                <StatsCard title={<div className="flex items-center gap-2"> <BanknotesIcon className="w-5 h-5 text-white" /> <span>FINANCE</span></div>}>
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center w-72 relative">
                        <div className="relative">
                            <FinanceChart />
                            {/* <p className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-semibold">
                                Total deductions:<br />$-8,011,191
                            </p> */}
                        </div>
                    </div>
                </StatsCard>

            </div>
        </div>
    );
};

export default Dashboard;
