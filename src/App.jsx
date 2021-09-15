import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import Users from './Users'
import ListOfProducts from './ListOfProducts'
import Login from './Login';
import AllUsers from './AllUsers';
import CreateUser from './CreateUser';
import ProductOption from './ProductOption';
import CreateProduct from './CreateProduct';
import ProductDetails from './ProductDetails';
function App() {
    return (
        <>  
            <Header/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/allusers/" component={AllUsers}/>
                <Route exact path="/createuser/" component={CreateUser}/>
                <Route exact path="/login/" component={Login}/>
                <Route exact path="/users/" component={Users}/>
                <Route exact path="/products/" component={ListOfProducts}/>
                <Route exact path="/home/" component={ListOfProducts}/>
                <Route exact path="/productopt/" component={ProductOption}/>
                <Route exact path="/productDetails/:id" component={ProductDetails}/>
                <Route exact path="/createproduct/" component={CreateProduct}/>
            </Switch>
        </>
    )
}

export default App
