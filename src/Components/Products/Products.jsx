import { useEffect, useState } from "react"
import axiosInstance from "../../axios/axios"
import { Spinner } from "../import"
import ProductCard from "./ProductCard"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
            axiosInstance.get("/amazonproducts.json")
            .then((response)=> {
              console.log()
              const products = response.data
              setProducts(products)
              setLoading(false)
            })
            .catch((error) => alert(error))
        } , [products]);

        const myProducts = products?.map((product) => (
            <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                image= {product.image}
                price={product.price}
                desc={product.description}
                category={product.category}/>
        ))


  return (
    <>
      {loading ? <Spinner/> : null}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {products ? myProducts : (<Spinner/>) }
    </div>
    </>
  )
}

export default Products
