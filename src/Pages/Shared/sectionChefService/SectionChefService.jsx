const SectionChefService = ({ image, bg_color, heading }) => {
    return (
        <div className={`p-8 md:p-16 lg:flex items-center gap-8 ${bg_color} rounded-lg shadow-2xl overflow-hidden`}>
            {/* Left Section: Image */}
            <div className="w-full overflow-hidden shadow-lg rounded-xl lg:w-1/2">
                <img 
                    src={image} 
                    alt="Chef Service" 
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
            </div>

            {/* Right Section: Text */}
            <div className="w-full mt-8 text-center lg:w-1/2 lg:mt-0 lg:text-left">
                <h2 className="text-5xl font-bold text-[#ff9000] mb-6 leading-snug">
                    {heading}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Indulge in a world-class culinary experience with our renowned chef service. Every dish is crafted with precision and passion, blending authentic flavors with modern techniques to delight your taste buds. 
                </p>

                {/* Decorative Line */}
                <div className="mb-6">
                    <div className="w-24 h-[3px] bg-gradient-to-r from-[#ff9000] to-transparent mx-auto lg:mx-0"></div>
                </div>

                {/* CTA Button */}
                <button className="px-8 py-4 bg-[#ff9000] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[#ff7300] transition-colors duration-300 hover:shadow-2xl">
                    Explore Our Menu
                </button>
            </div>
        </div>
    );
};

export default SectionChefService;
