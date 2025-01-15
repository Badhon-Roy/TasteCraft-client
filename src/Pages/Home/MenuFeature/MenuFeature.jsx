


const MenuFeature = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-6">
            <img className="w-[120px]" style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h3 className="text-xl">{name}</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506] font-bold">${price}</p>
            </div>
        </div>
    );
};

export default MenuFeature;