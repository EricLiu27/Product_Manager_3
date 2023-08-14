import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MainDashboard = (props) => {
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response => {
                props.removeFromDom(deleteId)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <h3>All Products</h3>
                    {props.productList.map((eachProduct, idx) => {
                        return (
                            <div className='d-flex justify-content-center '>
                                <Link to={`/products/${eachProduct._id}`} key={eachProduct._id} className='card-text d-flex flex-column me-5'>{eachProduct.title}</Link>
                                <button onClick={() => handleDelete(eachProduct._id)} type="button" className='btn btn-primary'>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainDashboard