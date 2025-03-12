import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "animate.css";

const dropdownItems = [
    { icon: "🖼️", title: "Dispute Manager", desc: "Take Control of Your Revenue" },
    { icon: "🚀", title: "Promotion Manager", desc: "Drive Exceptional Campaign Results" },
    { icon: "⏳", title: "Downtime Controller", desc: "Maximize Revenue with Zero Downtime" },
    { icon: "⭐", title: "Reviews & Ratings", desc: "Manage Your Online Reputation" },
    { icon: "💰", title: "Finance & Reconciliation", desc: "Simplify Your Finances" },
    { icon: "📊", title: "Analytics & Insights", desc: "Unlock the Power of Data" },
];

const navLinks = ["About Us", "Login", "Success Stories", "Blogs"];

function DropdownMenu({ isOpen }) {
    return isOpen ? (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-80 bg-white rounded-lg shadow-lg p-3 grid grid-cols-1 gap-1 animate__animated animate__fadeIn">
            {dropdownItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                    <span className="text-lg">{item.icon}</span>
                    <div className="leading-tight">
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
                <button className={`transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"}`}>
                    Product Features ▾
                </button>
                <DropdownMenu isOpen={isDropdownOpen} />
            </div>
            {navLinks.map((text, index) => (
                <a key={index} href="#" className={`transition-colors duration-300 ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"}`}>
                    {text}
                </a>
            ))}
            <a href="#" className="bg-[#78C6A3] text-white px-3 py-2 rounded-md font-medium text-xs hover:bg-[#56AB92] transition-colors duration-300">
                Book Demo
            </a>
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
            <div className="container mx-auto flex justify-between items-center h-20 px-13 md:px-10 xl:px-40">
                <img
                    src={(isScrolled || isMobileMenuOpen) ? "/img/logoNavbarDark.png" : "/img/logoNavbarLight.png"}
                    alt="Logo"
                    className="h-35 w-auto transition-all duration-300"
                />
                <NavbarLinks isScrolled={isScrolled} />
                <button className={`lg:hidden text-4xl transition-colors duration-300 ${isMobileMenuOpen ? "text-black" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>
        </nav>
    );
}
