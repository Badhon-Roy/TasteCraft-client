import SectionChefService from "../../Shared/sectionChefService/SectionChefService";
import image from "../../../assets/home/chef-service.jpg"


const ChefService = () => {
    const serviceProps = {
        image: `${image}`,
        bg_color: 'bg-white', 
        heading: 'Bistro Boss',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.',
      };
    return (
        <div>
            <SectionChefService {...serviceProps} />
        </div>
    );
};

export default ChefService;