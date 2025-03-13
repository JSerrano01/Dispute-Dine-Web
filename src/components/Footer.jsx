import { Mail, Phone } from "lucide-react";
import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-0">
                {/* Columna 1 - Logo y Contacto */}
                <div>
                <img src="/img/logoNavbarLight.png" alt="Dispute Dine Logo" className="h-35 mb-4" />
                    <p className="text-sm">We're Here to Help You Maximize Your Potential</p>
                    <div className="mt-4 flex flex-col gap-2 text-sm">
                        <span className="flex items-center gap-2">
                            <Mail size={16} /> Mail Us
                        </span>
                        <span className="flex items-center gap-2">
                            <Phone size={16} /> Contact Us
                        </span>
                    </div>
                </div>

                {/* Columna 2 - Dirección */}
                <div className="mt-12 ml-35">
                    <p className="font-normal mb-2 text-gray-500">Address</p>
                    <p className="text-sm">
                        2261, Market Street <br />
                        #4509, San Francisco, CA <br />
                        94114
                    </p>
                </div>

                {/* Columna 3 - Product Features */}
                <div className="mt-12 text-left">
                    <p className="font-normal mb-2 text-gray-500 ml-7">Product Features</p>
                    <ul className="text-sm space-y-1 pl-0">
                        {[
                            { name: "Dispute Manager", link: "/dispute-manager" },
                            { name: "Promotions Manager", link: "/promotions-manager" },
                            { name: "Downtime Controller", link: "/downtime-controller" },
                            { name: "Reviews and Ratings", link: "/reviews-ratings" },
                            { name: "Finance and Reconciliation", link: "/finance-reconciliation" },
                            { name: "Analytics and Insights", link: "/analytics-insights" },
                        ].map(({ name, link }) => (
                            <li key={name} className="pl-0">
                                <a href={link} className="text-white hover:underline">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna 4 - Company & Backed By */}
                <div className="mt-12 text-left">
                    <p className="font-normal mb-2 text-gray-500 ml-7">Company</p>
                    <ul className="text-sm space-y-1 pl-0">
                        {[
                            { name: "About Us", link: "/about-us" },
                            { name: "Success Stories", link: "/success-stories" },
                            { name: "Blogs", link: "/blogs" },
                            { name: "Privacy Policy", link: "/privacy-policy" },
                        ].map(({ name, link }) => (
                            <li key={name} className="pl-0">
                                <a href={link} className="text-white hover:underline">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="border-t border-gray-800 mt-30 pt-6 flex flex-col items-center">
                <div className="flex gap-6 mb-4">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="h-6 w-6 text-white hover:text-red-500 transition-colors duration-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-6 w-6 text-white hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-6 w-6 text-white hover:text-pink-500 transition-colors duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="h-6 w-6 text-white hover:text-blue-400 transition-colors duration-300" />
                    </a>
                </div>
                <p className="text-xs text-gray-400">© 2025 Dispute Dine, All Rights Reserved</p>
            </div>

        </footer>
    );
};

export default Footer;
