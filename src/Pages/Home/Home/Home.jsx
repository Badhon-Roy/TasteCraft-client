import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import FAQ from "../FAQ/FAQ";
import Featured from "../Featured/Featured";
import MenuFeatures from "../MenuFeatures/MenuFeatures";
import OurTeam from "../OurTeam/OurTeam";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ChefService></ChefService>
            <MenuFeatures></MenuFeatures>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <SpecialOffers />
            <OurTeam />
            <FAQ />
        </div>
    );
};

export default Home;