import React from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'



const App = () => {
    return (
        <div className = "container">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path = '/' exact component= {ProductList}/>
                    <Route path = '/product/:productId'  component= {ProductDetails}/>
                </Switch>
                <Footer/>
            </Router>
          
        </div>
    )
}

export default App
