
import MenuFeature from "../MenuFeature/MenuFeature";
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';
import useMenu from "../../../Hook/useMenu";

const MenuFeatures = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item?.category === 'popular');
    return (
        <div>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            />
            <div className='grid md:grid-cols-2 gap-10 my-8 px-4'>
                {
                    popular?.map(item => <MenuFeature key={item._id} item={item}></MenuFeature>)
                }

            </div>
            <div className="flex justify-center my-8">
                <button className=" py-2 px-4 text-xl font-bold hover:bg-slate-100 rounded-xl border-b-2 border-black">View Full  Menu</button>
            </div>
        </div>
    );
};

export default MenuFeatures;