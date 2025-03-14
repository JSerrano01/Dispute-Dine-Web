import { Mail, Phone } from "lucide-react";
import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-0">
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
                <div className="mt-12 ml-35 max-sm:ml-7 max-md:ml-7 lg:ml-35 xl:ml-35">
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
                        {["Dispute Manager", "Promotions Manager", "Downtime Controller", "Reviews and Ratings", "Finance and Reconciliation", "Analytics and Insights"].map((name, index) => (
                            <li key={index} className="pl-0">
                                <a href="#" className="text-white hover:underline">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna 4 - Company */}
                <div className="mt-12 text-left">
                    <p className="font-normal mb-2 text-gray-500 ml-7">Company</p>
                    <ul className="text-sm space-y-1 pl-0">
                        {["About Us", "Success Stories", "Blogs", "Privacy Policy"].map((name, index) => (
                            <li key={index} className="pl-0">
                                <a href="#" className="text-white hover:underline">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Social Icons y Derechos */}
            {/* Social Icons y Derechos */}
            <div className="border-t border-gray-800 mt-12 pt-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        {[FaYoutube, FaLinkedin, FaInstagram, FaXTwitter].map((Icon, index) => (
                            <a key={index} href="#" target="_blank" rel="noopener noreferrer">
                                <Icon className="h-6 w-6 text-white hover:text-gray-400 transition-colors duration-300" />
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400">© 2025 Dispute Dine, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;