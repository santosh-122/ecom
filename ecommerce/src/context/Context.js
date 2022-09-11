import React,{useEffect,useState,useReducer,useContext} from 'react';
import {createContext} from "react"
import faker from "Faker";
import axios from 'axios';
import { cartReducer } from './Reducers';


const Cart = createContext();
const Context = ({children}) => {
  const [products,setproducts] = useState([])
  console.log(products)
    // const products 
    useEffect(()=>{
       axios.get("http://localhost:9000/data").then(
         response => {setproducts(response.data);}
     )},[])
    
     const[state,dispatch] = useReducer(cartReducer,{
         products: products,
         Cart:[],
     });
  return (
    <Cart.Provider value={{state,dispatch}}> 
       {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}