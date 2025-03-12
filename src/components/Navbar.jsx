import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopMenuVisible, setIsDesktopMenuVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsDesktopMenuVisible(window.innerWidth > 1023);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dropdownItems = [
        { icon: "🖼️", title: "Dispute Manager", desc: "Take Control of Your Revenue" },
        { icon: "🚀", title: "Promotion Manager", desc: "Drive Exceptional Campaign Results" },
        { icon: "⏳", title: "Downtime Controller", desc: "Maximize Revenue with Zero Downtime" },
        { icon: "⭐", title: "Reviews & Ratings", desc: "Manage Your Online Reputation" },
        { icon: "💰", title: "Finance & Reconciliation", desc: "Simplify Your Finances" },
        { icon: "📊", title: "Analytics & Insights", desc: "Unlock the Power of Data" },
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src={isScrolled ? "/img/logoNavbarDark.png" : "/img/logoNavbarLight.png"}
                        alt="Logo"
                        className="h-32 w-auto transition-all duration-300"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                <AnimatePresence>
                    {isDesktopMenuVisible && (
                        <motion.div
                            className="collapse navbar-collapse"
                            initial={{ opacity: 0.6, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.6, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a
                                        className={`nav-link dropdown-toggle ${isScrolled ? "text-dark" : "text-white"}`}
                                        href="#"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        Product Features
                                    </a>
                                    {isDropdownOpen && (
                                        <ul className="dropdown-menu show">
                                            {dropdownItems.map((item, index) => (
                                                <li key={index} className="dropdown-item d-flex align-items-center">
                                                    <span className="me-2">{item.icon}</span>
                                                    <div>
                                                        <strong>{item.title}</strong>
                                                        <p className="small text-muted">{item.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                {["About Us", "Login", "Success Stories", "Blogs"].map((text, index) => (
                                    <li key={index} className="nav-item">
                                        <a className={`nav-link ${isScrolled ? "text-dark" : "text-white"}`} href="#">
                                            {text}
                                        </a>
                                    </li>
                                ))}

                                <li className="nav-item">
                                    <a href="#" className="btn btn-success ms-3">
                                        Book Demo
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {isMobileMenuOpen && (
                <div className="navbar-collapse show bg-white shadow-lg p-3">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">Product Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">Success Stories</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn btn-success w-100 mt-2">
                                Book Demo
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
