import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function ProductOption() {
    return (
        <div className="product-option">
            <div className="myproduct">
               <h2> <CheckCircleIcon/> Select an Option</h2>
                <div className="pro"><Link to="/products/">Products</Link></div>
                <div className="cre-pro"><Link to="/createproduct/">Create Product</Link></div>
            </div>
        </div>
    )
}

export default ProductOption
