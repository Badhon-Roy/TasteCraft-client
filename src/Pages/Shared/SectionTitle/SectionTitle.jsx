const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="relative my-16 text-center">
            {/* Subheading with Decorative Lines */}
            <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[#ff9000]"></div>
                <p className="text-[#ff9000] text-lg font-semibold tracking-wider uppercase">
                    {subHeading}
                </p>
                <div className="w-20 h-[2px] bg-gradient-to-r from-[#ff9000] to-transparent"></div>
            </div>

            {/* Heading with Stylish Gradient */}
            <h3 className="relative inline-block text-4xl font-extrabold text-gray-900 md:text-5xl">
                <span className="relative z-10 px-8 py-3 bg-gradient-to-r from-[#ff9000] via-[#ffb347] to-[#ff9000] text-transparent bg-clip-text">
                    {heading}
                </span>
                {/* Glow Effect */}
                <span className="absolute inset-0 w-full h-full rounded-lg border-2 border-[#ff9000] -z-10 transform scale-110 blur-xl opacity-30"></span>
            </h3>

            {/* Animated Gradient Divider */}
            <div className="flex items-center justify-center mt-6">
                <div className="w-1/3 h-[3px] bg-gradient-to-r from-[#ff9000] via-[#ffb347] to-transparent animate-pulse"></div>
            </div>
        </div>
    );
};

export default SectionTitle;
