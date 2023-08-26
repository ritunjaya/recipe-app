import React,{useState,useEffect}from "react";
import {CiPizza} from 'react-icons/ci'
import{GiNoodles,GiFruitBowl,GiCheckMark} from 'react-icons/gi'
import{MdOutlineIcecream} from 'react-icons/md'
import {fetchTabData}from '../service'
import dataNew from "./data";
  function Tab(){
    const [active,setActive] = useState('Pizza')
    const [tabData,setTabData] = useState(dataNew);
    const tabLabel = [
        {
            name: 'Pizza',
            icons: <CiPizza />,
            id:'0209cb28fc05320434e2916988f47b71'
        },
         {
            name: 'Noodles',
            icons: <GiNoodles />,
            id:'0209cb28fc05320434e2916988f47b71 '
        },
         {
            name: 'Desert',
            icons: <GiFruitBowl />,
            id:'0209cb28fc05320434e2916988f47b71'
        },
        {
            name: 'Ice-cream',
            icons: <MdOutlineIcecream />,
            id:'74525a37d75de54869d0703c26c401de'
        },

    ];

    const handleClick= (name,id) => {
        setActive(name)
        fetchTabData(id).then((response)=> {
            setTabData(response)
            console.log(response);
        })  
    }
    return(
        <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
                {tabLabel.map((item,index) => (
                    <div onClick={()=> handleClick(item.name,item.id)} className={`tablist ${active === item.name ?'active':""}`}>
                     {item.icons}
                    <span>{item.name}</span>
                </div>
                ))}
               
        </div>
        <div className='recipe_banner'>
                <div className="left-col">
                    <span className='badge'>Italian</span>
                    <h1>White Pizza</h1>
                    <p><strong>Recipe by:</strong><small>Food52</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    {/* <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt="" /> */}
                    <img src={tabData.recipe.image} alt="image"/>
                    </div>
                </div>
        </div>
    </div>

    )
    
  }

  export default Tab