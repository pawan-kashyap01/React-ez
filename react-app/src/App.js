import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';





const RestroCard =({name, image, cuisine, rating, delTime})=>{
    return (
        <div className='restro-card' >
            <div className='restro-img'><img alt="Dominos" src={image}/></div>
            <h3>{name}</h3>
            <h5>{cuisine}</h5>
            <h5>{rating} star</h5>
            <h5> {delTime} Mins</h5>
        </div>
    )
}







const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body />
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);


