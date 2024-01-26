import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { clearCart, decreaseQuantity, deleteProduct, increaseQuantity } from '../redux/features/cartSlice';
import {motion} from "framer-motion"


import { emptyCart } from '../assets/index';
import { Link } from 'react-router-dom';
import { Button } from '../Components/import';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const products = useSelector((state) => state.cart.products)
    const userInfo = useSelector((state) => state.user.userInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        let Total = 0 ; 
        products.map((product) => {
            Total += (product.quantity * product.price)
            setTotalPrice(Total.toFixed(2))
        }) 
    }, [products,dispatch]) 

  return (
    <>
    {userInfo ?
        <div className='w-full bg-gray-100 p-4'>
        {
          products.length > 0 ? 
          <div className="mx-auto h-auto grid grid-cols-12 gap-y-5 lg:gap-x-5">
              <div className="w-full h-full bg-white px-4 col-span-12 lg:col-span-9">
                  <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 py-4">
                      <h2 className="text-3xl font-medium">Shopping Cart</h2>
                      <h4 className="text-3xl font-normal">subtitle</h4>
                  </div>
                  <div className="">
                      {products.map((product) => (
                      <div key={product.id} className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6">
                              <div className="w-full flex flex-col md:flex-row items-center gap-6">
                              <div className="">
                                  <img src={product.image} alt="product Image" className="w-full h-44 object-contain" />
                              </div>
                              <div className="w-4/5">
                                  <h2 className="font-semibold text-lg">{product.title}</h2>
                                  <p className="text-sm">{product.desc}</p>
                                  <p className="text-base">Unit Price :  <span className='font-semibold'>${product.price.toFixed(2)}</span></p>
                                  <div className="bg-[#f0f2f2] flex justify-between items-center gap-1 w-max p-1 text-center drop-shadow-lg rounded-md">
                                  <p className="">QTY : </p>
                                  <p className="w-8 text-xl font-bold cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300"
                                  onClick={() =>dispatch(decreaseQuantity(product.id))}>-</p>
                                  <p className="">{product.quantity}</p>
                                  <p className="w-8 text-xl font-bold cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300"
                                  onClick={() =>dispatch(increaseQuantity(product.id))}>+</p>
                                  </div>
                                  <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                                  onClick={() => dispatch(deleteProduct(product.id))}>
                                  Delete Item</button>
                          </div>
                          <div>
                              <p className="text-lg font-semibold">
                                  {(product.price* product.quantity).toFixed(2)}$</p>
                          </div>
                          </div>
                      </div>))}
                  </div>
                  <div className="w-full py-2">
                  <button className="bg-red-500 px-10 py-2 rounded-lg text-white text-lg tracking-wide hover:bg-red-700 active:bg-red-900 duration-300 font-semibold "
                  onClick={() => dispatch(clearCart(),console.log("total price is " , totalPrice))}>
                      Clear Cart
                  </button>
                  </div>
              </div>
  
              <div className="w-full h-52 bg-white flex flex-col items-center col-span-12 lg:col-span-3 justify-center p-4">
                  <div>
                  <p className="flex gap-2 items-start text-sm"><CheckCircleIcon className='bg-white text-green-500 rounded-full '/>Your order qualifies for FREE Shipping Choose this option at checkout. See details....</p>
                  </div>
              <div>
                  <p className="font-semibold px-10 py-1 flex items-center justify-between ">Total :  <span className="text-lg font-bold"> 
                  { totalPrice } $</span></p>
              </div>
              <Button>Proceed to Pay</Button>
              </div>
          </div>
      : 
      <motion.div 
       initial = {{y : 70 ,opacity : 0}}
       animate = {{y : 0 , opacity : 1}}
       transition={{delay : 0.5 , duration : 0.5}}
       className="flex justify-center items-center gap-4 p-4">
          <div>
              <img src={emptyCart} alt="empty cart" className="w-80 rounded-lg p-4 mx-auto"/>
          </div>
          <div className="w-96 bg-white p-6 flex flex-col items-center rounded-md shadow-lg">
              <h1 className='text-xl font-bold'>Your cart is empty</h1>
              <p className="text-sm text-center">
              fill your card with books , electronics , videos etc...</p>
              <Link to={"/"} className='w-full mt-4'>
                  <Button>Continue Shopping</Button>
              </Link>
          </div>
      </motion.div>
      }
      </div> 
      : <p className='font-extrabold text-xl text-center p-6'>Thinking about adding some stuff to your life? Step 1: Sign in. Step 2: Spice up your cart. Because life's too short for a boring shopping experience!  </p>}
    </>
    
  )
}

export default Cart
