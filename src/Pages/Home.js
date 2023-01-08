import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {getProducts} from '../Actions/ecom.actions'
import '../App.css'

export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{ 
    axios
      .get('https://fakestoreapi.com/products/')
      .then((e)=>{dispatch(getProducts(e.data))})
    },[])
    const productList = useSelector((state)=>state.productReducer.products)

    return (
    <div className='cardWrapper'>
      {
        productList && productList.map((item)=>(
          <div className='cardBox'>
            <img src={item.image} alt=""></img>
            <h2>${item.price}</h2>
            <Link to={'/products/'+item.id}>{item.title}</Link>
          </div>
        ))
      }
    </div>
  )
}
