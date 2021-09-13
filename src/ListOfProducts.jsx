import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
function ListOfProducts(props) {
    return (
        <div className="all-products">
            {
                Data.map((val)=> {

                return (
            <Link to={"/productDetails/" + val._id}>
                <div className="food-card">
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
               </div>
               </Link>
                )
              })
           }
        </div>
    )
}

export default ListOfProducts
