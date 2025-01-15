import img1 from "../../../assets/home/slide1.jpg"
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';
const ChefRecommends = () => {
    return (
        <div>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'} />
            <div className="grid md:grid-cols-3 gap-6 my-16 md:px-0 px-4">
                <div className="w-full bg-base-100 shadow-xl">
                    <figure><img src={img1} className="w-full h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="flex justify-center">
                            <button className=" py-2 px-4 text-xl font-bold text-[#BB8506] bg-[#E8E8E8] hover:bg-slate-800 rounded-xl border-b-2 border-black uppercase">add to cart</button>
                        </div>
                    </div>

                </div>
                <div className=" w-full bg-base-100 shadow-xl">
                    <figure><img src={img1} className="w-full h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="flex justify-center">
                            <button className=" py-2 px-4 text-xl font-bold text-[#BB8506] bg-[#E8E8E8] hover:bg-slate-800 rounded-xl border-b-2 border-black uppercase">add to cart</button>
                        </div>
                    </div>

                </div>
                <div className="w-full bg-base-100 shadow-xl">
                    <figure><img src={img1} className="w-full h-[300px]" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="flex justify-center">
                            <button className=" py-2 px-4 text-xl font-bold text-[#BB8506] bg-[#E8E8E8] hover:bg-slate-800 rounded-xl border-b-2 border-black uppercase">add to cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ChefRecommends;