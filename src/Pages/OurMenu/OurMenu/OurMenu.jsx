import Cover from "../../Shared/Cover/Cover";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import img1 from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../Hook/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const OurMenu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item?.category === 'popular');
    const desserts = menu.filter(item => item?.category === 'dessert');
    const pizza = menu.filter(item => item?.category === 'pizza');
    const salads = menu.filter(item => item?.category === 'salad');
    const soups = menu.filter(item => item?.category === 'soup');
    return (
        <div>
            <Cover img={img1} title={'OUR MENU'} description={'Would you like to try a dish?'}> </Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={desserts} title={"desserts"} coverImg={dessertImg}></MenuCategory>
            <MenuCategory item={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory item={salads} title={"salad"} coverImg={saladImg}></MenuCategory>
            <MenuCategory item={soups} title={"soups"} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default OurMenu;