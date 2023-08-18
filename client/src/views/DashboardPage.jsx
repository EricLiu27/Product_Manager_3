import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const [productList, setProductList] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => setProductList(response.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response => {
                removeFromDom(deleteId)
            })
            .catch(err => console.log(err))
    }

    const removeFromDom = (deleteId) => {
        const filteredList = productList.filter((eachProduct, idx) => eachProduct._id !== deleteId)
        setProductList(filteredList)
    }

    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <h3>All Products</h3>
                    {productList.map((eachProduct, idx) => {
                        return (
                            <div>
                                <Link to={`/products/${eachProduct._id}`} key={eachProduct._id} className='card-text d-flex flex-column'>{eachProduct.title}</Link>
                                <button onClick={() => handleDelete(eachProduct._id)} type="button">Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage

