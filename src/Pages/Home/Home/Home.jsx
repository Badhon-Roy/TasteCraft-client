import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import MenuFeatures from "../MenuFeatures/MenuFeatures";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ChefService></ChefService>
            <MenuFeatures></MenuFeatures>
            <section className="bg-black rounded" >
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white text-center md:p-20 px-10 py-14 my-16">Call Us: +88 0192345678910</h2>
            </section>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;