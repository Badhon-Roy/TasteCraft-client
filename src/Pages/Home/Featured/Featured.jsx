import img from "../../../assets/home/featured.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <div
            style={{
                background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${img}) lightgray 50%/cover no-repeat fixed`,
            }}
        >
            <div className="px-8 py-16 lg:px-52 md:px-28">
                <div className="mb-10 text-center text-white">
                    <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
                </div>
                <div className="items-center justify-between gap-12 lg:flex">
                    <div className="flex-1 transition-transform duration-500 transform hover:scale-105">
                        <img
                            className="lg:w-[500px] w-full rounded-lg shadow-xl"
                            src={img}
                            alt="Featured Menu Item"
                        />
                    </div>
                    <div className="flex-1 mt-6 space-y-6 text-white lg:mt-0">
                        <h3 className="text-3xl font-semibold">WHERE CAN I GET SOME?</h3>
                        <h4 className="text-xl text-[#ff9000]">March 20, 2023</h4>
                        <p className="text-sm leading-relaxed text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                            Eaque repellat recusandae ad laudantium tempore consequatur
                            consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="py-3 px-6 text-lg font-bold uppercase rounded-lg border-2 border-white bg-transparent text-white hover:bg-[#ff9000] hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ff9000]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
