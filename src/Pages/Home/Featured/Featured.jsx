import img from "../../../assets/home/featured.jpg"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Featured = () => {
    return (
        <div style={{
            background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${img}) lightgray 50%/cover no-repeat fixed`,
        }}>

            <div className="lg:px-52 md:px-28 px-8 py-16">
                <div className="text-white">
                    <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'} />
                </div>
                <div className="lg:flex items-center justify-between gap-6">
                    <div className="flex-1">
                        <img className="lg:w-[400px] w-full lg:mb-0 mb-5" src={img} alt="" />
                    </div>
                    <div className="text-white flex-1">
                        <h3 className="text-xl"> WHERE CAN I GET SOME?</h3>
                        <h3 className="text-xl">March 20, 2023</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className=" py-2 px-4 text-xl font-bold hover:bg-slate-800 rounded-xl border-b-2 border-white uppercase">Read More</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Featured;