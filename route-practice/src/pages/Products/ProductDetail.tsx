import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import type { Product } from './ProductsList'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    const fetchDetailData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchDetailData()
  }, [id])

  const handlePrevious = (id: number) => {
    navigate(`/products/${id - 1}`)
  }
  const handleNext = (id: number) => {
    navigate(`/products/${id + 1}`)
  }

  return (
    <div>
      <Link to="/products">Go back product list</Link>
      {Number(id) - 1 !== 0 && <button onClick={() => handlePrevious(Number(id))}>Previous</button>}
      <button onClick={() => handleNext(Number(id))}>Next</button>
      <br />
      {product === null ? (
        <p>Page is not valid</p>
      ) : (
        <div>
          <h3>{product.title}</h3>
        </div>
      )}
    </div>
  )
}

export default ProductDetail