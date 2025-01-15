
const Cover = ({img , title ,description}) => {
    return (
        <div className="hero md:min-h-[650px] bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content bg-black md:py-20 py-10 m-10 w-3/4  bg-opacity-25 px-4  text-center text-white">
                <div className="max-w-md ">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;