// src/pages/PrivacyPolicy.jsx
import React from 'react';
import Model3D from '../components/Model3D';

const PrivacyPolicy = () => {
    return (
        <div className="text-white min-h-screen bg-black">
            {/* Sección Hero con Modelo 3D */}
            <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
                {/* Fondo oscuro semitransparente */}
                <div className="absolute inset-0 bg-black/50 z-1"></div>

                {/* Modelo 3D */}
                <div className="absolute inset-0 z-0">
                    <Model3D />
                </div>

                {/* Contenido del hero */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Your Data Security is Our Top Priority
                    </p>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800">
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">1. Information We Collect</h2>
                        <p className="mb-4 text-gray-300">
                            We collect limited data necessary to provide our services effectively and securely:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                            <li><strong>Cookies & Local Storage:</strong> Used for session management, user preferences, and maintaining login states.</li>
                            <li><strong>Authentication Tokens:</strong> Temporarily stored in local storage to authorize user access to the platform.</li>
                            <li><strong>User-Provided Information:</strong> This includes any data voluntarily submitted by users, such as email addresses or platform credentials necessary for dispute resolution. This information is encrypted and only used for intended purposes.</li>
                            <li><strong>Device & Usage Information:</strong> We may collect anonymized usage statistics, browser type, and extension performance metrics for debugging and analytics purposes.</li>
                        </ul>
                        <p className="text-gray-300">
                            We do not collect or store personal data such as names, addresses, payment information, or browsing history unless explicitly provided by the user.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">2. How We Use Your Data</h2>
                        <p className="mb-4 text-gray-300">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                            <li>Authenticate users securely</li>
                            <li>Automate and process dispute filings on third-party delivery platforms</li>
                            <li>Improve our extension and platform functionality</li>
                            <li>Maintain secure and seamless user sessions</li>
                            <li>Diagnose technical issues and analyze usage trends</li>
                        </ul>
                        <p className="text-gray-300">
                            We do not use your information for advertising or behavioral profiling.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">3. Data Sharing & Disclosure</h2>
                        <p className="mb-4 text-gray-300">
                            Dispute Dine does not sell, rent, or share your personal data with third-party advertisers or marketers. Data is only transmitted to:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                            <li>Our secure backend server for dispute processing</li>
                            <li>Third-party platforms (e.g., UberEats, DoorDash, Grubhub) solely for the purpose of filing disputes on your behalf, using credentials explicitly provided by the user</li>
                        </ul>
                        <p className="text-gray-300">
                            We may disclose information if required to comply with a legal obligation, court order, or law enforcement request — but only when legally compelled to do so.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">4. User Control & Rights</h2>
                        <p className="mb-4 text-gray-300">
                            You have full control over your data:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                            <li>You may request deletion of your authentication or account-related data at any time by contacting us at dev@disputedine.ai</li>
                            <li>You can revoke extension permissions at any time through your browser settings</li>
                            <li>Users can uninstall the extension at any time, which removes locally stored data on the user's browser</li>
                        </ul>
                        <p className="text-gray-300">
                            We comply with all applicable laws concerning user data rights, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">5. Data Security</h2>
                        <p className="mb-4 text-gray-300">
                            We are committed to protecting your data using modern security protocols:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                            <li>All communication with our servers is encrypted using HTTPS/TLS</li>
                            <li>User authentication tokens are securely stored and expire after a defined session duration</li>
                            <li>Backend services are hosted on access-controlled cloud infrastructure (e.g., AWS S3, encrypted databases)</li>
                            <li>Internal access to user data is limited to authorized personnel with a legitimate business need</li>
                        </ul>
                        <p className="text-gray-300">
                            Despite our best efforts, no system is 100% immune to risk. By using our services, you acknowledge this and agree that Dispute Dine is not liable for damages resulting from unauthorized access caused by third-party attacks or user negligence (e.g., compromised passwords).
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">6. Children's Privacy</h2>
                        <p className="text-gray-300">
                            Dispute Dine is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children. If we discover such data has been collected, we will delete it promptly.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">7. Changes to This Policy</h2>
                        <p className="mb-4 text-gray-300">
                            We may update this Privacy Policy from time to time. If material changes are made, we will notify users via email or extension update notices. Continued use of the service after changes are published constitutes acceptance of those changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#56AB92]">8. Contact Us</h2>
                        <p className="mb-4 text-gray-300">
                            If you have questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
                        </p>
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                            <p className="mb-2"><strong className="text-white">Dispute Dine</strong></p>
                            <p className="mb-2"><strong className="text-white">Email:</strong> <span className="text-[#56AB92]">dev@disputedine.ai</span></p>
                            <p><strong className="text-white">Website:</strong> <a href="https://disputedine.ai/" className="text-[#56AB92] hover:underline">https://disputedine.ai/</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;