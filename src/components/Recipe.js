import React,{useEffect,useState} from 'react'
import{BsSearch} from 'react-icons/bs'
import {fetchData} from '../service'
import {RecipeCard} from "./RecipeCard"
import Loader from './Loader'

function Recipe(){
    const [searchedTearm, setSearchedTearm] = useState()
    const [loader,setLoader] = useState(true)
    const[data, setData] = useState ('')

        useEffect(() => {
            const delay = 500;
     
            if(searchedTearm){
                const timer = setTimeout(() => {
                    const fetchedData = handleSubmit()
                    console.log(fetchedData)
                    setData(fetchedData)
    
                  }, delay);
                  return () => clearTimeout(timer)  
            }
          
        }, [searchedTearm])


        useEffect(() => {
            setLoader(false)
            setTimeout(() => {
                setLoader(true)
            }, 700);
        }, [data])
        

    function handleSubmit(){
        fetchData(searchedTearm).then((response)=> {
            setData(response)
            console.log(response)
        })  
    }
    return(
        <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input type="text" placeholder='Search your recipe' onChange={(e)=> setSearchedTearm(e.target.value)}/>
                <button onClick={handleSubmit}><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
        {
                loader ? (data ? 
                ( data.hits.map((item,index)=>{
                    return <RecipeCard image={ item.recipe.image} label={item.recipe.label} key={index}/>
                })):
                (<h3>Search your dish..</h3>)) : (<Loader/>)
            }
        </div>
    </div>
    )
}

export default Recipe