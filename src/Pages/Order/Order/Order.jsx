import { useState } from "react";
import coverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hook/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = [ 'salad' , 'pizza' , 'soups' , 'desserts' , 'drinks']
    const {category} = useParams()
    const initialTabIndex = categories.indexOf(category) 
    const [tabIndex, setTabIndex] = useState(initialTabIndex);
    const [menu] = useMenu()
    const dessert = menu.filter(item => item?.category === 'dessert');
    const pizza = menu.filter(item => item?.category === 'pizza');
    const salad = menu.filter(item => item?.category === 'salad');
    const soup = menu.filter(item => item?.category === 'soup');
    const drink = menu.filter(item => item?.category === 'drinks');
    console.log(drink);
    return (
        <div>
            <Cover img={coverImg} title={"Order Food"} description={'Would you like to try a dish?'}></Cover>
            <div className="my-16">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center my-16 uppercase font-bold">
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-8">
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-3 gap-8">
                            {
                                pizza?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-3 gap-8">
                            {
                                soup?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-3 gap-8">
                            {
                                dessert?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-3 gap-8">
                            {
                                drink?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;