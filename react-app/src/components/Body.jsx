import RestrauntCard from './RestrauntCard';
import { useState } from 'react';
import {resList} from '../utils/mockData'

const Body = () => {
    const [listOfRest] = useState([]);


    return (
        <div className='body'>
            <div className='search-bar'>
                <input type='text' className='search-input' placeholder='Search Restaurant or Dish' />
            <div className='filter'>
                <button className='btn btn-primary' onClick={()=>{console.log("Button Clicked  ")}} >Top Rated </button>
            </div>
            </div>
            <div className='res-container'>
                {/* <RestroCard name='Dominos' image= {require('../../assets/burger.jpg')} cuisine="Italian, Burgers, Drinks" rating="4.5" delTime ={30}/>
                <RestroCard name='KFC'  image=  {require('../../assets/chow.jpg')} cuisine="Chinese, Noodles, Drinks" rating="4.1"delTime ={25}/>
                <RestroCard name='Pizzahut' image=  {require('../../assets/salad.jpg')} cuisine="Italian, Burgers, Drinks" rating="3.3"delTime ={33}/>
                <RestroCard name='Hangries' image=  {require('../../assets/juice.jpg')} cuisine="Indian, Drinks" rating="3.9"delTime ={22}/> */}
                
                {resList.map((item, index) => 
                   <RestrauntCard key={item.info.id} resData={item}/>
                )}
            </div>
        </div>
    )
}

export default Body;

