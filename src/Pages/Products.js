import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function Products() {
  const [product, setProduct]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    axios
      .get('https://fakestoreapi.com/products/'+id)
      .then((e)=>setProduct(e.data))
      console.log('products',product)
  },[])
  return (
    <div className='detailedDisplay'>
      <div>
        <Link to="/home">Back</Link>
        <img src={product.image} alt=""></img> <br/>
      </div>
      <div className='details'>
        <h1>{product.title}</h1> <br/>
        <h2>Category: {product.category}</h2>
        {/* <h2>Ratings: {product.rating.rate} ({product.rating.count})</h2> */}
        <h2>$ {product.price}</h2> <br/>
        <h2>{product.description}</h2>
      </div>
    </div>
  )
}
