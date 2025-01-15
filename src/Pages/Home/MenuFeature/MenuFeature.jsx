const MenuFeature = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-[#FF9E00] to-[#FF6A00] rounded-2xl shadow-2xl group hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:scale-105 p-6">
            {/* Image Section */}
            <div className="w-full h-[180px] rounded-xl overflow-hidden mb-6">
                <img 
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src={image} 
                    alt={name} 
                />
            </div>

            {/* Text Section */}
            <div className="text-center lg:text-left">
                {/* Title */}
                <h3 className="text-3xl font-extrabold text-white mb-2 group-hover:text-[#fff5e1] transition-all duration-300">{name}</h3>
                
                {/* Recipe Description */}
                <p className="px-6 mb-4 text-lg text-gray-200">{recipe}</p>
                
                {/* Price */}
                <div className="flex justify-center mb-4 lg:justify-start">
                    <p className="text-[#FFDD00] font-semibold text-xl">${price}</p>
                </div>
            </div>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-[#00000066] opacity-0 group-hover:opacity-60 transition-all duration-300 ease-in-out"></div>

            {/* CTA Button */}
            <div className="absolute w-full text-center transform -translate-x-1/2 bottom-8 left-1/2">
                <button className="px-6 py-3 bg-[#FF9000] text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 group-hover:bg-[#FF6A00] hover:scale-105">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default MenuFeature;
