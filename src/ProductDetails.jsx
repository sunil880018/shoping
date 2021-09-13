import React from 'react'
import Data from './Data'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
function ProductDetails(props) {
    let val = Data.find(x => x._id === props.match.params.id);
    return (
        <div className="product-detail">
            <div className="product-one">
                <img src={process.env.PUBLIC_URL + val.image } alt=""/>
                     <p>{val.title}</p>
                     <div className="price">
                         <div style= {{fontWeight:"bold",fontSize:"1.2rem"}}>&#8377; {val.price}</div>
                     </div>
                     <p>{val.desc}</p>
                     <div className="rating">
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarHalfIcon/></span>
                    </div>
                    <button>Order</button>
            </div>
        </div>
    )
}

export default ProductDetails
