
import img1 from "../../../assets/home/slide1.jpg";
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';

const ChefRecommends = () => {
    // Data for the dishes
    const dishes = [
        {
            name: "Caeser Salad",
            description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: img1
        },
        {
            name: "Grilled Chicken",
            description: "Grilled chicken served with a side of mixed vegetables.",
            image: img1
        },
        {
            name: "Spaghetti Bolognese",
            description: "Spaghetti with a rich tomato-based Bolognese sauce.",
            image: img1
        },
        {
            name: "Vegetable Stir Fry",
            description: "A mix of stir-fried vegetables served with rice.",
            image: img1
        },
        {
            name: "Beef Steak",
            description: "Juicy grilled beef steak served with mashed potatoes.",
            image: img1
        },
        {
            name: "Fish Tacos",
            description: "Crispy fish tacos with a tangy slaw.",
            image: img1
        },
        {
            name: "Chicken Alfredo",
            description: "Creamy Alfredo sauce with tender chicken pieces.",
            image: img1
        },
        {
            name: "Mushroom Risotto",
            description: "Creamy risotto with fresh mushrooms.",
            image: img1
        },
        {
            name: "Pork Ribs",
            description: "Tender pork ribs served with a smoky barbecue sauce.",
            image: img1
        },
        {
            name: "Margherita Pizza",
            description: "Classic pizza with mozzarella, tomato, and basil.",
            image: img1
        }
    ];

    return (
        <div>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'} />
            <div className="grid gap-8 px-4 my-16 md:grid-cols-4">
                {/* Dynamically render the cards */}
                {dishes.map((dish, index) => (
                    <div key={index} className="w-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <figure className="relative overflow-hidden">
                            <img
                                src={dish.image}
                                className="w-full h-[180px] object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
                                alt={dish.name}
                            />
                        </figure>
                        <div className="py-6 text-center card-body">
                            <h2 className="text-2xl font-semibold text-[#ff9000] mb-3">
                                {dish.name}
                            </h2>
                            <p className="mb-4 text-sm text-gray-700">
                                {dish.description}
                            </p>
                            <button className="px-8 py-2 text-lg font-semibold text-[#ff9000] border-2 border-[#ff9000] hover:bg-[#ff9000] hover:text-white transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#ff9000]">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefRecommends;
