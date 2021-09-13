import React from 'react'

function CreateProduct() {
    return (
        <div className="create-product-list">
            <div>
                 <form>
                 <h1>Create Product</h1>
                     <input type="text" placeholder="Title" required/><br/>
                     <input type="text" placeholder="Price" required/><br/>
                     <input type="text" placeholder="Description" required/><br/>
                     <input type="text" placeholder="Rating" required/><br/>
                     <input type="file" placeholder="Rating" required/><br/>
                     <button type="submit">Create</button>
                 </form>
            </div>
        </div>
    )
}

export default CreateProduct
