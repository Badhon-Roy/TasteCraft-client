import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="py-12 text-white bg-gray-900">
            <div className="max-w-screen-xl px-6 mx-auto md:px-12">
                {/* Top Section: Contact & Quick Links */}
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">

                    {/* Contact Section */}
                    <div>
                        <h2 className="mb-4 text-3xl font-semibold text-yellow-500">Contact Us</h2>
                        <p className="mb-4 text-lg">
                            123 ABS Street, Uni 21, Bangladesh
                        </p>
                        <p className="mb-4 text-lg">
                            <span className="font-semibold">Phone:</span> +88 123456789
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Email:</span> support@acme.com
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="mb-4 text-3xl font-semibold text-yellow-500">Quick Links</h2>
                        <ul className="space-y-3 text-lg">
                            <li><a href="#" className="transition duration-300 hover:text-yellow-400">Home</a></li>
                            <li><a href="#" className="transition duration-300 hover:text-yellow-400">About</a></li>
                            <li><a href="#" className="transition duration-300 hover:text-yellow-400">Services</a></li>
                            <li><a href="#" className="transition duration-300 hover:text-yellow-400">Blog</a></li>
                            <li><a href="#" className="transition duration-300 hover:text-yellow-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h2 className="mb-4 text-3xl font-semibold text-yellow-500">Follow Us</h2>
                        <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl hover:text-blue-700" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-600" />
            </a>
          </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2023 ACME Industries Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
