import React, { useEffect, useState } from 'react'
import './loadmoreproduct.css'
const SkeletonLoader = () => (
    <div className="skeleton-loader">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
    </div>
);
const LoadMoreProduct = ({ limit = 10, skip = 10 }) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    const fetchApiProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`

            );
            const result = await response.json()
            console.log('test', result);
            // setProduct((pre) => [...pre, ...result.products])
            if (result && result.products && result.products.length) {
                if (count === 0) {
                    setProduct(result.products)
                } else {
                    setProduct((prevProducts) => [...prevProducts, ...result.products]);
                }
                setLoading(false);
            }
            console.log(result);
        } catch (e) {
            setLoading(false)
            console.log('error occoured in catch', e.message);
        }
    }

    // console.log("test123", product);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            fetchApiProducts()

        }, 1000);
        return () => clearTimeout(timeOutId)
    }, [count])


    useEffect(() => {
        if (product && product.length === 100) setDisableButton(true);
    }, [product]);


    return (
        <div className="load-more-container">
            {loading ?
                <div className="load">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                : (
                    <>
                        <div className="product-container">
                            {product.map((values) => (
                                <div className="product" key={values.id}>
                                    <img src={values.thumbnail} alt={values.title} />
                                    <p>{values.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="button-container">
                            <button disabled={disableButton} onClick={() => setCount(count + 1)}
                            style={{padding:"20px",backgroundColor:'black',color:'white'}}>
                                Load More Products
                            </button>
                            {disableButton ? <p>You have reached 100 products</p> : null}
                        </div>
                    </>
                )}
        </div>
    )
}

export default LoadMoreProduct;