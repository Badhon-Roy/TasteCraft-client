import { Link } from "react-router-dom";
import MenuFeature from "../../Home/MenuFeature/MenuFeature";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({item , title , coverImg}) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title} description={'Would you like to try a dish?'}> </Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 my-8 px-4'>
                {
                    item?.map(item => <MenuFeature key={item._id} item={item}></MenuFeature>)
                }

            </div>
            <div className="flex justify-center my-8">
                <Link to={`/order/${title}`}>
                <button className=" py-2 px-4 text-xl font-bold hover:bg-slate-100 rounded-xl border-b-2 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;