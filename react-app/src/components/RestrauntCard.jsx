import {CDN_URL} from '../utils/constants';


const RestrauntCard =(props)=>{
    const {resData} = props;
    const  { cloudinaryImageId , name , cuisines , avgRating , sla , costForTwo} = resData?.info
    return (
        <div className='restro-card' >
            <div className='restro-img'><img alt="Dominos" src={CDN_URL+cloudinaryImageId}/></div>
            <h3 style={{align: 'center'}}>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} star</h5>
            <h5> {sla.deliveryTime} Mins</h5>
            <h5> {costForTwo} Mins</h5>

        </div>
    )
}

export default RestrauntCard;