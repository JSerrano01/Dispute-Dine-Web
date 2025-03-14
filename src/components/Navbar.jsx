import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
    ChartBarIcon,
    CurrencyDollarIcon,
    ClockIcon,
    StarIcon,
    ChartPieIcon,
    RocketLaunchIcon
} from "@heroicons/react/24/solid";

import "animate.css";

const dropdownItems = [
    { icon: <ChartBarIcon className="h-5 w-5 text-gray-700" />, title: "Dispute Manager", desc: "Take Control of Your Revenue" },
    { icon: <RocketLaunchIcon className="h-5 w-5 text-gray-700" />, title: "Promotion Manager", desc: "Drive Exceptional Campaign Results" },
    { icon: <ClockIcon className="h-5 w-5 text-gray-700" />, title: "Downtime Controller", desc: "Maximize Revenue with Zero Downtime" },
    { icon: <StarIcon className="h-5 w-5 text-gray-700" />, title: "Reviews & Ratings", desc: "Manage Your Online Reputation" },
    { icon: <CurrencyDollarIcon className="h-5 w-5 text-gray-700" />, title: "Finance & Reconciliation", desc: "Simplify Your Finances" },
    { icon: <ChartPieIcon className="h-5 w-5 text-gray-700" />, title: "Analytics & Insights", desc: "Unlock the Power of Data" },
];

const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blogs", path: "/blogs" },
    { name: "Login", path: "/login" }
];

function DropdownMenu({ isOpen }) {
    return isOpen ? (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 bg-[#FAFAFA] rounded-lg shadow-lg p-3 grid grid-cols-1 gap-1">
            {dropdownItems.map((item, index) => (
                <div key={index} className="flex items-center px-2 py-1 gap-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                    {item.icon}
                    <div className="flex flex-col gap-0 leading-tight">
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    ) : null;
}

function NavbarLinks({ isScrolled }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="hidden lg:flex items-center space-x-6 text-base font-medium">
            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className={`transition-colors duration-500 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"}`}>
                    Product Features ▾
                </button>
                <DropdownMenu isOpen={isDropdownOpen} />
            </div>
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    to={link.path}
                    className={`transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"}`}
                >
                    {link.name}
                </Link>
            ))}
            <Link
                to="/book-demo"
                className="bg-[#78C6A3] text-white px-3 py-2 rounded-md font-medium text-xs hover:bg-[#56AB92] transition-colors duration-300"
            >
                Book Demo
            </Link>
        </div>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled || isMobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container mx-auto flex justify-between items-center h-20 px-6 md:px-10 xl:px-40">
                <Link to="/">
                    <img
                        src={(isScrolled || isMobileMenuOpen) ? "/img/logoNavbarDark.png" : "/img/logoNavbarLight.png"}
                        alt="Logo"
                        className="h-30 w-auto transition-all duration-300"
                    />
                </Link>
                {/* Desktop Links */}
                <NavbarLinks isScrolled={isScrolled} />
                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden text-4xl transition-colors duration-500 ${isMobileMenuOpen || isScrolled ? "text-black" : "text-white"}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-5 transition-all duration-300">
                    <div className="relative">
                        <button
                            className="text-black text-lg font-medium hover:text-gray-700 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Product Features ▾
                        </button>
                        <DropdownMenu isOpen={true} />
                    </div>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-black text-lg font-medium hover:text-gray-700 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/book-demo"
                        className="bg-[#78C6A3] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#56AB92] transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Demo
                    </Link>
                </div>
            )}
        </nav>
    );
}
