
import { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    const fetchProducts = async() => {
        const {data} = await axios.get('/api/products')
        console.log('kjkjdf', data)
        setProducts(data)
    }
    useEffect(()=>{
        fetchProducts()

    }, [])
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=>{
                return (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product}   />
                </Col>
                )
            })}
        </Row>
    </>
  )
}

export default HomeScreen