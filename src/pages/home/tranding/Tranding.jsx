import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useToys } from '../../../hooks/useToys';
import SingleTrandingToy from './SingleTrandingToy';

const item =[
    {
        a: 'abc'
    },
    
    {
        a: 'xyz'
    },

]
const item2 =[
    {
        a: 'abc'
    },
    
    {
        a: 'xyz'
    },

]
const item3 =[
    {
        a: 'abc'
    },
    
    {
        a: 'xyz'
    },

]

 const Tranding = () => {
    const [toys,setToys] = useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/toys`).then(res=>res.json()).then(data=>setToys(data))
    },[])

    
    const featuredToy = toys.filter((toy)=>toy?.featured === "featured")
    const latestToy = toys.filter((toy)=>toy?.featured === "latest")
    const bestSeller = toys.filter((toy)=>toy?.featured === "bestseller")

   return (
   <div className=''>
   
  
   <Tabs>
    <TabList>
    <Tab>Featured</Tab>
    <Tab>Latest</Tab>
      <Tab>Best Sellers</Tab>
      
      
    </TabList>

    <TabPanel>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
     {
        featuredToy?.map((ite,index)=><SingleTrandingToy ite={ite} key={index}>
            
        </SingleTrandingToy>)
     }
     </div>
    </TabPanel>

    <TabPanel>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
     {
        latestToy?.map((ite,index)=><SingleTrandingToy ite={ite} key={index}>
           
        </SingleTrandingToy>)
     }
     </div>
    </TabPanel>

    <TabPanel>
     <div className='flex space-x-2 '>
     {
        bestSeller?.map((ite,index)=><SingleTrandingToy ite={ite} key={index}>
            
        </SingleTrandingToy>)
     }
     </div>
    </TabPanel>
    
  </Tabs>
   
   </div>
   )
};

export default Tranding

