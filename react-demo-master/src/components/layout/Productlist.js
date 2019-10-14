import React,{Component} from 'react'
import Product from './Product'
import Title from './Title'
//import {storeProducts} from '../../data'
import {ProductConsumer} from '../../Context'
class Productlist extends Component
{

    render()
    
    {
        
        return(
         <React.Fragment>
             <div className="py-5">
                 <div className=" container">
                     <Title name="Welcome" title="To Store"></Title>
                     <div className="row">

                     <ProductConsumer>
                         {value=>{
                            
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product}></Product>
                            }) 
                                                   
                         }}

                     </ProductConsumer>
                     </div>
                 </div>
             </div>
         </React.Fragment>
        );
    }
}
export default Productlist