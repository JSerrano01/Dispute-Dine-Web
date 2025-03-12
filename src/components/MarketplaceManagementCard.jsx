import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StarIcon } from "@heroicons/react/24/solid";

const MarketplaceManagementCard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Se anima solo una vez
        threshold: 0.2, // Se activa cuando el 20% del elemento es visible
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <StatsCard title={
                <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-500 font-semibold">MARKETPLACE MANAGEMENT</span>
                </div>
            }>
                <div className="bg-white p-4 rounded-lg shadow flex flex-col w-70">
                    <div className="flex flex-wrap gap-2 text-center text-sm font-medium">
                        <span className="text-red-500">DoorDash</span>
                        <span className="text-green-500">Uber Eats</span>
                        <span className="text-yellow-500">GrubHub</span>
                        <span className="text-blue-500">Google</span>
                        <span className="text-green-400">ezCater</span>
                        <span className="text-red-600">Yelp</span>
                    </div>
                </div>
            </StatsCard>
        </motion.div>
    );
};

export default MarketplaceManagementCard;
