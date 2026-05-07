import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export type Product = {
  id: number,
  title: string
}

const ProductsList = () => {
  const [productsList, setProductsList] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      setProductsList(data.products)
    }
    fetchData()
  }, [])


  return (
    <div>
      <h2>Products</h2>
      {productsList.length === 0 ? (
        <p>Fetching NOW...</p>
      ) : (
        <ul>
          {productsList.map(product => (
            <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductsList