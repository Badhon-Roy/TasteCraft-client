import MenuFeature from "../MenuFeature/MenuFeature";
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';
import useMenu from "../../../Hook/useMenu";

const MenuFeatures = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item?.category === 'popular');
    
    return (
        <div className="my-16">
            {/* Section Title */}
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            />
            
            {/* Menu Grid Section */}
            <div className='grid gap-8 px-4 my-12 md:grid-cols-2 lg:grid-cols-3'>
                {
                    popular?.map(item => (
                        <MenuFeature key={item._id} item={item} />
                    ))
                }
            </div>
            
            {/* View Full Menu Button */}
            <div className="flex justify-center my-10">
                <button className="px-8 py-3 text-xl font-semibold text-[#ff9000] border-2 border-[#ff9000] hover:bg-[#ff9000] hover:text-white transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105">
                    View Full Menu
                </button>
            </div>
        </div>
    );
};

export default MenuFeatures;
